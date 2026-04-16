import { pool } from "@/lib/db";

async function generateUniqueGigCode() {
  let code;
  let exists = true;

  while (exists) {
    code =
      "GIG-" +
      Math.random().toString(36).substring(2, 8).toUpperCase();

    const result = await pool.query(
      "SELECT 1 FROM organizations WHERE gig_code = $1",
      [code]
    );

    exists = result.rows.length > 0;
  }

  return code;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      password,
      type, // "org" or "user"
      gigCode,
      adminId,
      adminPassword,
    } = body;

    // =========================
    // 🔥 ORG REGISTER
    // =========================
    if (type === "org") {
      const newGigCode = await generateUniqueGigCode();

      // create organization
      const orgResult = await pool.query(
        `INSERT INTO organizations (name, gig_code)
        VALUES ($1, $2)
        RETURNING id, gig_code`,
        [name, newGigCode]
      );

      const orgId = orgResult.rows[0].id;

      // create admin user
      await pool.query(
        `INSERT INTO users (name, email, password, role, organization_id)
         VALUES ($1, $2, $3, 'admin', $4)`,
        [name, email, password, orgId]
      );

      return Response.json({
        message: "Organization registered",
        gigCode: newGigCode,
      });
    }

    // =========================
    // 🔥 EMPLOYEE REGISTER
    // =========================
    if (type === "user") {
      // find org using gig_code
      const org = await pool.query(
        `SELECT id FROM organizations WHERE gig_code = $1`,
        [gigCode]
      );

      if (org.rows.length === 0) {
        return Response.json(
          { error: "Invalid Organization Code" },
          { status: 400 }
        );
      }

      const orgId = org.rows[0].id;

      // verify admin
      const admin = await pool.query(
            `SELECT * FROM users
            WHERE email = $1
            AND password = $2
            AND organization_id = $3
            AND role = 'admin'`,
            [adminId, adminPassword, orgId]
        );

      if (admin.rows.length === 0) {
        return Response.json(
          { error: "Invalid Admin Credentials" },
          { status: 400 }
        );
      }
      

      const existingUser = await pool.query(
            `SELECT * FROM users WHERE email = $1 AND organization_id = $2`,
            [email, orgId]
            );

            if (existingUser.rows.length > 0) {
            return Response.json(
                { error: "User already exists in this organization" },
                { status: 400 }
            );
        }

      // create employee
      await pool.query(
        `INSERT INTO users (name, email, password, role, organization_id)
         VALUES ($1, $2, $3, 'employee', $4)`,
        [name, email, password, orgId]
      );

      return Response.json({
        message: "Employee registered",
      });
    }

    return Response.json(
      { error: "Invalid request type" },
      { status: 400 }
    );

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}