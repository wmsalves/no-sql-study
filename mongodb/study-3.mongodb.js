const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
require("dotenv").config();
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${user}:${password}@studycluster.ovcsk.mongodb.net/`;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");

    // find code goes here
    const cursor = coll.find({ hasRings: true });

    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
