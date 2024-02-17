import { MongoClient } from "mongodb";
import "dotenv/config";

async function getDbConnection() {
  const connectionString = process.env.DATABASE_URL || "";

  const client = new MongoClient(connectionString);

  var connection = await client.connect();

  return connection.db("ExpenseDatabase");
}

export default getDbConnection;