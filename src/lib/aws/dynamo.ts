import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, ScanCommand, GetCommand } from '@aws-sdk/lib-dynamodb'
import { Item } from '@/types/types'

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});
const ddb = DynamoDBDocumentClient.from(client);
const TABLE_NAME = 'ProductCatalog'; 

export async function getProductsByType(itemType: string) {
  try {
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

export async function getProductById(id: string) {
  try {
    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        Id: id
      },
    });

    const result = await ddb.send(command);
    const item = keysToCamelCase(result.Item) as Item;
    return item;
  } catch (error) {
    console.error(`Failed to fetch product with ID "${id}":`, error);
    throw error;
  }
}

export async function getProductsByIdContains(partialId: string) {
  try {
    const command = new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: 'contains(#id, :partialId)',
      ExpressionAttributeNames: {
        '#id': 'Id',
      },
      ExpressionAttributeValues: {
        ':partialId': partialId,
      },
    });

    const result = await ddb.send(command);
    const rawItems = result.Items ?? [];
    const items: Item[] = rawItems.map(item => keysToCamelCase(item) as Item);
    return items;
  } catch (error) {
    console.error(`Failed to search products by ID fragment "${partialId}":`, error);
    throw error;
  }
}


function toCamelCase(str: string) {
  if (str.includes('_')) {
    return str.toLowerCase();
  }
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