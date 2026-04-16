import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const {
      name,
      defaultEmail,
      email,
      orgId,
      selectedAssets,
      selectedUsers,
    } = await req.json();

    if (!name || !orgId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const deptId = `DEPT-${Date.now()}`.slice(0, 50);

    // 🔥 INSERT DEPARTMENT
    await pool.query(
      `
      INSERT INTO departments 
      (id, name, default_email, email, organization_id)
      VALUES ($1, $2, $3, $4, $5)
      `,
      [deptId, name, defaultEmail || null, email || null, orgId]
    );

    // 🔥 LINK USERS
    if (Array.isArray(selectedUsers)) {
      for (let userId of selectedUsers) {
        await pool.query(
          `
          INSERT INTO department_members (user_id, department_id)
          VALUES ($1, $2)
          `,
          [userId, deptId]
        );
      }
    }

    // 🔥 LINK ASSETS (THIS WAS MISSING)
    if (Array.isArray(selectedAssets)) {
      for (let assetId of selectedAssets) {
        await pool.query(
          `
          INSERT INTO department_assets (department_id, asset_id)
          VALUES ($1, $2)
          `,
          [deptId, assetId]
        );
      }
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error("CREATE DEPARTMENT ERROR:", err);
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}