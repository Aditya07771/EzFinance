import * as dotenv from "dotenv";
dotenv.config();

console.log("DB URL:", process.env.NEXT_PUBLIC_DATABASE_URL); // ✅ correct placement

export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
