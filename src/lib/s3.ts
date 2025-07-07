'use server' // for some reason needs this for .env.local to work

import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Item } from '@/types/types';

export async function getProductImages(item: Item): Promise<string[]> {
  try {
    const s3 = new S3Client({ region: process.env.AWS_REGION });
    const bucketName = process.env.AWS_BUCKET_NAME!;
    const prefix = `products/${item.type}/${item.id}/`;

    // List all objects under the full product path (no delimiter)
    const listCommand = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix,
    });

    const listResponse = await s3.send(listCommand);
    const allObjects = listResponse.Contents || [];

    // Filter keys to common image extensions
    const imageObjects = allObjects.filter(obj => {
      if (!obj.Key) return false;
      return obj.Key.match(/\.(png|jpe?g|gif|webp)$/i);
    });

    // Generate signed URLs for each image
    const imageUrls = await Promise.all(
      imageObjects.map(async (obj) => {
        if (!obj.Key) return null;
        const command = new GetObjectCommand({
          Bucket: bucketName,
          Key: obj.Key,
        });
        return getSignedUrl(s3, command);
      })
    );

    // Filter out any nulls (just in case)
    return imageUrls.filter((url): url is string => url !== null);
  } catch (error) {
    console.error(`Failed to fetch images for product ${item.name}:`, error);
    throw error;
  }
}
