import { NextResponse } from 'next/server'
import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ itemType: string }> }) 
{
  try {
    const { itemType } = await params;
    
    const s3 = new S3Client({ region: process.env.AWS_REGION });
    const bucketName = process.env.AWS_BUCKET_NAME!;
    const listCommand = new ListObjectsV2Command({
      Bucket:  bucketName,
      Prefix: `products/${itemType}/`,
      Delimiter: "/"
    });
    const listResponse = await s3.send(listCommand);
    const itemFolders = listResponse.CommonPrefixes?.map((prefix) => prefix.Prefix) || [];

    const items = await Promise.all(
      itemFolders.map(async (path) => {
        if (!path) return null;

        const imagePath = `${path}image.png`;
        const command = new GetObjectCommand({
          Bucket: bucketName,
          Key: imagePath,
        });

        const url = await getSignedUrl(s3, command);

        return {
          name: path.split("/").filter(Boolean).pop(),
          image: url,
          price: 100, 
        };
      })
    );

    return NextResponse.json(
      { items: items }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" }, 
      { status: 500 }
    );
  }
}