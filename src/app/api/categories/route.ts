import { NextResponse} from 'next/server' ;
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function GET() {
    const categories = await sql `
        SELECT category_id, category_name, category_description
        FROM product_category
    `;
    return NextResponse.json(categories);
}