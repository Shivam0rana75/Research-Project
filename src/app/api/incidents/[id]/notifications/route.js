import { pool } from "@/lib/db";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const incidentId = params.id; 

    const result = await pool.query(
      `
      SELECT 
        d.id as department,
        d.default_email,
        u.email
      FROM incident_departments idp
      JOIN departments d ON idp.department_id = d.id
      LEFT JOIN department_members dm ON dm.department_id = d.id
      LEFT JOIN users u ON dm.user_id = u.id
      WHERE idp.incident_id = $1
      `,
      [incidentId]
    );

    const grouped = {};

    result.rows.forEach(row => {
      if (!grouped[row.department]) {
        grouped[row.department] = {
          defaultEmail: row.default_email,
          members: []
        };
      }

      if (row.email) {
        grouped[row.department].members.push(row.email);
      }
    });

    return Response.json(grouped);

  } catch (err) {
    console.error("NOTIFICATIONS ERROR:", err);
    return Response.json({}, { status: 200 }); 
  }
}