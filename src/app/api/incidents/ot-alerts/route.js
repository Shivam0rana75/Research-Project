import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    const result = await pool.query(
      `
      SELECT 
        i.id as incident_id,
        i.description,
        i.created_at,
        i.status,
        a.name as asset_name,
        a.type as asset_type,
        ia.level
      FROM incidents i
      JOIN incident_assets ia ON ia.incident_id = i.id
      JOIN assets a ON ia.asset_id = a.id
      WHERE i.organization_id = $1
      AND i.domain = 'OT'
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}