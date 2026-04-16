import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    const result = await pool.query(
      `
      SELECT id, name, email 
      FROM users 
      WHERE organization_id = $1 
      AND role != 'admin'
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}