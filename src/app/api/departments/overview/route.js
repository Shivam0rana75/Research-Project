import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    // 🔥 departments + incident counts
    const result = await pool.query(
      `
      SELECT 
        d.id,
        d.name,
        COUNT(idp.incident_id) as incident_count
      FROM departments d
      LEFT JOIN incident_departments idp 
        ON idp.department_id = d.id
      WHERE d.organization_id = $1
      GROUP BY d.id, d.name
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}