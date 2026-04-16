import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { incidentId, newStatus, role } = await req.json();

   
    if (
      (newStatus === "Resolved" || newStatus === "Acknowledged") &&
      role !== "admin" &&
      role !== "manager"
    ) {
      return Response.json(
        { error: "Only admin/manager allowed" },
        { status: 403 }
      );
    }

    if (role === "employee" && newStatus !== "Escalated") {
      return Response.json(
        { error: "Employees can only escalate" },
        { status: 403 }
      );
    }

    
    await pool.query(
      `
      UPDATE incidents
      SET status = $1
      WHERE id = $2
      `,
      [newStatus, incidentId]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}