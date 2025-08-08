// app/api/login/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import sql from "../../../../../lib/db";


export async function POST(request: Request) {
  const { email, password } = await request.json();

  // --- Basic email format validation ---
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  // --- Password length check ---
  if (!password || password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }

  try {
    // --- Check DB for user ---
    const rows = await sql`
      SELECT id, name, email, password_hash, joined
      FROM users
      WHERE email = ${email}
      LIMIT 1;
    `;

    const user = rows[0];

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // --- Validate password ---
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // --- Return sanitized user (no password_hash!) ---
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        joined: user.joined,
        // token: optional - add JWT later
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
