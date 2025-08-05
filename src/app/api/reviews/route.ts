
import { NextResponse , NextRequest } from 'next/server';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function POST(req: NextRequest) {
 
  try {
    const { productId, user, rating, comment, date } = await req.json();

    if(!productId || !user || !rating || !comment || !date) {
        return NextResponse.json({erro: 'Missing data'}, {status:400})
    }

    await sql`
      INSERT INTO reviews (product_id, user_name, rating, comment, created_at)
      VALUES (${productId}, ${user}, ${rating}, ${comment}, ${date});
    `;

    return NextResponse.json({ message: 'Review saved' }, { status: 200 })
  } catch (error) {
    console.error('[POST /api/reviews] DB Error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}