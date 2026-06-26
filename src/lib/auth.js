import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// 🌍 global cache (Next.js dev fix)
const globalForMongo = global;

// 🔥 Mongo Client Setup
let client;
let clientPromise;

if (!globalForMongo._mongoClientPromise) {
  client = new MongoClient(process.env.DB_URL);
  globalForMongo._mongoClientPromise = client.connect();
} else {
  client = new MongoClient(process.env.DB_URL);
}

clientPromise = globalForMongo._mongoClientPromise;

// 🔥 DB Connection
const connection = await clientPromise;
const db = connection.db("mdantormia");

// 🚀 AUTH CONFIG
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: connection, // ✅ always connected client
  }),

  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  // 🔥 FIX: account linking (no more account_not_linked error)
  account: {
    accountLinking: {
      enabled: true,
    },
  },

  // 🔐 security
  trustedOrigins: [
    "http://localhost:3000",
    process.env.BETTER_AUTH_URL,
  ],

});