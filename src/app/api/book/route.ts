import { NextResponse } from 'next/server';

/**
 * Placeholder booking submission endpoint.
 *
 * There is no existing booking provider/backend in this project to
 * integrate with, so this route only validates the payload shape and
 * returns a "request received" response — it does NOT confirm an
 * appointment. Wire this up to the practice's real booking system (or an
 * email/notification service) before relying on it in production.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const requiredFields = ['appointmentType', 'date', 'time', 'firstName', 'lastName', 'email', 'phone'];
  const missing = requiredFields.filter((field) => !body[field]);

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 }
    );
  }

  // Simulate processing latency.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return NextResponse.json({
    ok: true,
    reference: `SET-${Date.now().toString(36).toUpperCase()}`,
  });
}
