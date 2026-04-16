import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    const result = await pool.query(
      `
      SELECT 
        to_char(date_trunc('hour', created_at), 'HH24:00') as time,
        SUM(CASE WHEN domain = 'OT' THEN 1 ELSE 0 END) as ot,
        SUM(CASE WHEN domain = 'IT' THEN 1 ELSE 0 END) as it
      FROM incidents
      WHERE organization_id = $1
      GROUP BY date_trunc('hour', created_at)
      ORDER BY date_trunc('hour', created_at)
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}