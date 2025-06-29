import { NextResponse } from 'next/server'
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ itemType: string }> }
) {
  const { itemType } = await params;
  
  const s3 = new S3Client({ region: process.env.AWS_REGION });
  const imageKey = `products/${itemType}/nanoflare-nextage/image.png`;
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: imageKey,
  });
  const url = await getSignedUrl(s3, command); 

  return NextResponse.json(
    { items: [{name: "nf-nextage", image: url, price: 100}] }, 
    { status: 200 }
  );
}