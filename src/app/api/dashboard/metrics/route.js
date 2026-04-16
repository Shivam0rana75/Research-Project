import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    if (!orgId) {
      return Response.json(
        { error: "Organization ID required" },
        { status: 400 }
      );
    }

    // 🔥 1. Active Incidents
    const activeQuery = `
      SELECT COUNT(*) 
      FROM incidents
      WHERE organization_id = $1
      AND status != 'Resolved'
    `;

    // 🔥 2. Critical OT Alerts
    const criticalOTQuery = `
      SELECT COUNT(*)
      FROM incidents
      WHERE organization_id = $1
      AND domain = 'OT'
      AND severity = 'Critical'
    `;

    // 🔥 3. IT Security Events
    const itQuery = `
      SELECT COUNT(*)
      FROM incidents
      WHERE organization_id = $1
      AND domain = 'IT'
    `;

    const [active, criticalOT, it] = await Promise.all([
      pool.query(activeQuery, [orgId]),
      pool.query(criticalOTQuery, [orgId]),
      pool.query(itQuery, [orgId]),
    ]);

    return Response.json({
      activeIncidents: Number(active.rows[0].count),
      criticalOT: Number(criticalOT.rows[0].count),
      itEvents: Number(it.rows[0].count),
      mttr: 2.4 // keep static for now
    });

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}