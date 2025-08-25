'use server' // for some reason needs this for .env.local to work

import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { Item } from '@/types/types';

export async function getProductImages(item: Item): Promise<string[]> {
  try {
    const s3 = new S3Client({ region: process.env.AWS_REGION });
    const bucketName = process.env.AWS_BUCKET_NAME!;
    const region = process.env.AWS_REGION!;
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
      return /\.(png|jpe?g|gif|webp)$/i.test(obj.Key);
    });

    // Direct public URLs (no signed URL needed)
    const imageUrls = imageObjects
      .map((obj) => {
        if (!obj.Key) return null;
        return `https://${bucketName}.s3.${region}.amazonaws.com/${obj.Key}`;
      })
      .filter((url): url is string => url !== null);

    return imageUrls;
  } catch (error) {
    console.error(`Failed to fetch images for product ${item.name}:`, error);
    throw error;
  }
}
