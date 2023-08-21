import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";

const clientId = process.env.COGNITO_CLIENT_ID;
const clientSecret = process.env.COGNITO_CLIENT_SECRET;
const issuer = process.env.COGNITO_ISSUER;

if (!clientId) {
  throw Error("COGNITO_CLIENT_ID is missing in your env file");
}

if (!clientSecret) {
  throw Error("COGNITO_CLIENT_SECRET is missing in your env file");
}

if (!issuer) {
  throw Error("COGNITO_ISSUER is missing in your env file");
}

const authOptions = {
  providers: [
    CognitoProvider({
      clientId,
      clientSecret,
      issuer,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
