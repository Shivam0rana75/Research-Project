import { pool } from "@/lib/db";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const id = params.id; 

    console.log("INCIDENT ID:", id);

    
    const incidentRes = await pool.query(
      `
      SELECT 
        id,
        title,
        description,
        severity,
        status,
        domain,
        location,
        created_at
      FROM incidents
      WHERE id = $1
      `,
      [id]
    );

    if (incidentRes.rows.length === 0) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    const incident = incidentRes.rows[0];

   
    const assetsRes = await pool.query(
      `
      SELECT 
        a.name,
        a.type,
        ia.level
      FROM incident_assets ia
      JOIN assets a ON ia.asset_id = a.id
      WHERE ia.incident_id = $1
      `,
      [id]
    );

   
    const deptRes = await pool.query(
      `
      SELECT d.id, d.name
      FROM incident_departments idp
      JOIN departments d ON idp.department_id = d.id
      WHERE idp.incident_id = $1
      `,
      [id]
    );

   
    const timelineRes = await pool.query(
      `
      SELECT 
        event_time,
        event,
        type
      FROM incident_timeline
      WHERE incident_id = $1
      ORDER BY event_time ASC
      `,
      [id]
    );

  

    const formatted = {
      incidentId: incident.id,
      title: incident.title,
      description: incident.description,
      severity: incident.severity,
      domain: incident.domain,
      location: incident.location,
      time: new Date(incident.created_at).toLocaleString(),
      status: incident.status, 
      affectedAssets: {
        all: assetsRes.rows.map(a => ({
          name: a.name,
          type: a.type,
          level: a.level
        }))
      },

      notifiedDepartments: deptRes.rows.map(d => d.id), 

      timeline: timelineRes.rows.map(t => ({
        time: new Date(t.event_time).toLocaleTimeString(),
        event: t.event,
        type: t.type
      }))
    };

    return Response.json(formatted);

  } catch (err) {
    console.error("FULL ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}