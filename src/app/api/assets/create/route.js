import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const {
      id,
      name,
      type,
      domain,
      location,
      criticality,
      orgId,
    } = await req.json();

    if (!id || !name || !type || !domain) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await pool.query(
      `
      INSERT INTO assets 
      (id, name, type, domain, location, criticality, organization_id)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      `,
      [id, name, type, domain, location, criticality, orgId]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error("CREATE ASSET ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}