import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { orgId } = await req.json();

    // 🔥 Monthly trends
    const monthly = await pool.query(
      `
      SELECT 
        TO_CHAR(created_at, 'Mon') as month,
        severity,
        COUNT(*) as count
      FROM incidents
      WHERE organization_id = $1
      GROUP BY month, severity
      ORDER BY MIN(created_at)
      `,
      [orgId]
    );

    // 🔥 Pie (by domain)
    const pie = await pool.query(
      `
      SELECT domain, COUNT(*) as count
      FROM incidents
      WHERE organization_id = $1
      GROUP BY domain
      `,
      [orgId]
    );

    // 🔥 MTTR (fake but based on timeline count)
    const mttr = await pool.query(
      `
      SELECT 
        DATE(created_at) as day,
        COUNT(*) as count
      FROM incidents
      WHERE organization_id = $1
      GROUP BY day
      ORDER BY day DESC
      LIMIT 6
      `,
      [orgId]
    );

    return Response.json({
      monthly: monthly.rows,
      pie: pie.rows,
      mttr: mttr.rows,
    });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}