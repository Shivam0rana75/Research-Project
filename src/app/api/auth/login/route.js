import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, password, gigCode } = body;

    // 🔥 1. find organization
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

    // 🔥 2. find user in that org
    const user = await pool.query(
      `SELECT id, name, email, role 
       FROM users
       WHERE email = $1
       AND password = $2
       AND organization_id = $3`,
      [email, password, orgId]
    );

    if (user.rows.length === 0) {
      return Response.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const userData = user.rows[0];

    // 🔥 3. success response
    return Response.json({
      message: "Login successful",
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        organizationId: orgId,
      },
    });

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}