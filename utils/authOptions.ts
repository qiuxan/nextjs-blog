import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/utils/dbConnect";
import { AuthOptions } from "next-auth";

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(
        credentials: Record<keyof Credentials, string> | undefined,
        req: any
      ): Promise<any> {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        await dbConnect();

        const { email, password } = credentials;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        // if the user has no password
        if (!user?.password) {
          throw new Error("Please login via the method you used to signup");
        }

        const isPasswordMatched = await bcrypt.compare(
          password,
          user.password
        );

        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        // Return user without password
        const userWithoutPassword = {
          _id: user._id,
          email: user.email,
          name: user.name
          // Add any other fields you want to include
        };

        return userWithoutPassword;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  }
};