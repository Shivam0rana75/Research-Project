import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    const result = await pool.query(
      `
      SELECT id, name, type 
      FROM assets
      WHERE organization_id = $1
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}