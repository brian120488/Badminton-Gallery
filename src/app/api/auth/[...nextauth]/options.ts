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
      server: {
        host: 'smtp.resend.com',
        port: 465,
        auth: {
          user: process.env.RESEND_SMTP_USER,
          pass: process.env.RESEND_SMTP_PASS,
        },
      },
      from: process.env.RESEND_FROM,
    }),
  ],
  adapter: DynamoDBAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
    verifyRequest: '/verify',
  }
}

