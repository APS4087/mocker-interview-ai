import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(process.env.DRIZZLE_DATABASE_URL);
const db = drizzle(sql);

console.log(sql);
// TODO :
// 1. CREATE NEON DATABASE
// 2. GET DATABASE STRING FROM DASHBOARD (ENV VARIABLE)
// 3. SET UP DRIZZLE AND SCHEMA
