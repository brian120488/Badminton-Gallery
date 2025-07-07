import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'
import { Item } from '@/types/types'

export async function getProductsByType(itemType: string) {
  try {
    const client = new DynamoDBClient({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });
    const ddb = DynamoDBDocumentClient.from(client);
    const TABLE_NAME = 'ProductCatalog'; 
    
    const command = new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: `#type = :itemType`,
      ExpressionAttributeNames: {
        '#type': 'Type',
      },
      ExpressionAttributeValues: {
        ':itemType': itemType,
      },
    });
    
    const result = await ddb.send(command);
    const rawItems = result.Items ?? [];
    const items: Item[] = rawItems.map(item => keysToCamelCase(item) as Item);
    return items;
  } catch (error) {
    console.error(`Failed to fetch products of type "${itemType}":`, error);
    throw error;
  }
}

function toCamelCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function keysToCamelCase(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(v => keysToCamelCase(v));
  } else if (obj !== null && typeof obj === 'object' && obj.constructor === Object) {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[toCamelCase(key)] = keysToCamelCase(value);
    }
    return result;
  }
  return obj;
}