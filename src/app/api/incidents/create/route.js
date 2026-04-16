import { pool } from "@/lib/db";

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
      selectedAssets,
      selectedDepartments,
    } = await req.json();

    // 🔥 GENERATE INCIDENT ID
    const countRes = await pool.query(
      `SELECT COUNT(*) FROM incidents`
    );

    const count = parseInt(countRes.rows[0].count) + 1;
    const incidentId = `INC-${String(count).padStart(3, "0")}`;

    // 🔥 INSERT INCIDENT
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

    // 🔥 LINK ASSETS
    for (let assetId of selectedAssets) {
      await pool.query(
        `
        INSERT INTO incident_assets (incident_id, asset_id, level)
        VALUES ($1,$2,$3)
        `,
        [incidentId, assetId, severity]
      );
    }

    // 🔥 LINK DEPARTMENTS
    for (let deptId of selectedDepartments) {
      await pool.query(
        `
        INSERT INTO incident_departments (incident_id, department_id)
        VALUES ($1,$2)
        `,
        [incidentId, deptId]
      );
    }

    // 🔥 TIMELINE
    await pool.query(
      `
      INSERT INTO incident_timeline (incident_id, event_time, event, type)
      VALUES ($1, NOW(), $2, $3)
      `,
      [incidentId, "Incident Created", "action"]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error("CREATE INCIDENT ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}