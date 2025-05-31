import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your email",
          required: true,
          type: "text",
        },
        password: {
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
          required: true,
        },
      },

      async authorize(credentials){
        if(!credentials){
            return null
        }

        return true
      }
    }),
  ],
});

export { handler as GET, handler as POST };
