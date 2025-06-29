import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { itemType: string } }
) {
  const { itemType } = params;
  console.log(itemType);
  return NextResponse.json({ items: [{name: "arc11", image: "image.png", price: 100}] }, { status: 200 })
}