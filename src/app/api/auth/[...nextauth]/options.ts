import type { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email' 
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
 
const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.AUTH_DYNAMODB_ID as string,
    secretAccessKey: process.env.AUTH_DYNAMODB_SECRET as string,
  },
  region: process.env.AUTH_DYNAMODB_REGION,
}
 
const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})

export const options: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  adapter: DynamoDBAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
}

