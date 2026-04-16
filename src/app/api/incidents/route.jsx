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

    const result = await pool.query(
      `
      SELECT 
        i.id,
        i.title,
        i.description,
        i.severity,
        i.status,
        i.created_at
      FROM incidents i
      WHERE i.organization_id = $1
      ORDER BY i.created_at DESC
      `,
      [orgId]
    );

    return Response.json(result.rows);

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}