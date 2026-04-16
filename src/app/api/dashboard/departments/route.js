import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    const result = await pool.query(
      `
      SELECT 
        d.name as department,
        COUNT(*) as value
      FROM incident_departments id
      JOIN departments d ON id.department_id = d.id
      JOIN incidents i ON id.incident_id = i.id
      WHERE i.organization_id = $1
      GROUP BY d.name
      ORDER BY value DESC
      LIMIT 5
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}