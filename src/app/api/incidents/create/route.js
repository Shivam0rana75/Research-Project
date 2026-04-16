import nodemailer from "nodemailer";
import { pool } from "@/lib/db";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-16-char-app-password",
  },
});

export async function POST(req) {
  try {
    const {
      title,
      description,
      severity,
      domain,
      status,
      location,
      orgId,
      selectedAssets = [],
      selectedDepartments = [],
    } = await req.json();

    const countRes = await pool.query(`SELECT COUNT(*) FROM incidents`);
    const count = parseInt(countRes.rows[0].count) + 1;
    const incidentId = `INC-${String(count).padStart(3, "0")}`;

    await pool.query(
      `
      INSERT INTO incidents 
      (id, title, description, severity, domain, status, location, time, assets_count, escalated, organization_id, created_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,NOW())
      `,
      [
        incidentId,
        title,
        description,
        severity,
        domain,
        status,
        location,
        new Date().toISOString(),
        selectedAssets.length,
        false,
        orgId,
      ]
    );

    for (let assetId of selectedAssets) {
      await pool.query(
        `
        INSERT INTO incident_assets (incident_id, asset_id, level)
        VALUES ($1,$2,$3)
        `,
        [incidentId, assetId, severity]
      );
    }

    for (let deptId of selectedDepartments) {
      await pool.query(
        `
        INSERT INTO incident_departments (incident_id, department_id)
        VALUES ($1,$2)
        `,
        [incidentId, deptId]
      );
    }

    await pool.query(
      `
      INSERT INTO incident_timeline (incident_id, event_time, event, type)
      VALUES ($1, NOW(), $2, $3)
      `,
      [incidentId, "Incident Created", "action"]
    );

    

    try {
      if (selectedDepartments.length > 0) {

        const deptRes = await pool.query(
          `
          SELECT default_email
          FROM departments
          WHERE id = ANY($1)
          `,
          [selectedDepartments]
        );

        const deptEmails = deptRes.rows
          .map(d => d.default_email)
          .filter(Boolean);

        const userRes = await pool.query(
          `
          SELECT DISTINCT u.email
          FROM department_members dm
          JOIN users u ON dm.user_id = u.id
          WHERE dm.department_id = ANY($1)
          `,
          [selectedDepartments]
        );

        const userEmails = userRes.rows.map(u => u.email);

        const allEmails = [...new Set([...deptEmails, ...userEmails])];

        if (allEmails.length > 0) {
          await transporter.sendMail({
            from: `"Grid Sentinel SOC" <your-email@gmail.com>`,
            to: allEmails.join(","),

            subject: `🚨 [${severity.toUpperCase()}] Incident: ${title}`,

            html: `
              <div style="font-family: Arial; background:#0b1220; padding:20px; color:#e5e7eb;">
                
                <h2 style="color:#ef4444;">🚨 Security Incident Alert</h2>

                <p>A new incident has been created and requires attention.</p>

                <div style="background:#111827; padding:15px; border-radius:10px;">
                  <p><b>ID:</b> ${incidentId}</p>
                  <p><b>Title:</b> ${title}</p>
                  <p><b>Severity:</b> ${severity}</p>
                  <p><b>Domain:</b> ${domain}</p>
                  <p><b>Status:</b> ${status}</p>
                  <p><b>Location:</b> ${location}</p>
                  <p><b>Time:</b> ${new Date().toLocaleString()}</p>
                </div>

                <p style="margin-top:20px;">
                  Please log into the system and take necessary action.
                </p>

                <hr style="margin:20px 0; border-color:#1f2937;" />

                <p style="font-size:12px; color:#9ca3af;">
                  Grid Sentinel Incident Management System
                </p>

              </div>
            `,
          });
        }
      }
    } catch (mailErr) {
      console.error("MAIL ERROR:", mailErr);
    }


    return Response.json({ success: true });

  } catch (err) {
    console.error("CREATE INCIDENT ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}