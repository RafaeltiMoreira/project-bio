import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firebaseCert } from "./firebase";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID as string,
    clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
  })],
  events: {},
  callbacks: {},
});