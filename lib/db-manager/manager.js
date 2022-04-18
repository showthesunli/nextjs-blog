import {MongoClient} from "mongodb"

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const dbUrl = `mongodb://${DB_HOST}:${DB_PORT}`

const client = new MongoClient(dbUrl);
export async function run() {
  try {
    await client.connect();
    const database = client.db('liuli');
    const articles = database.collection('liuli_articles');
    // Query for a movie that has the title 'Back to the Future'
    const query = { doc_id: '9573529f1d48dd31154420d18281f3b0' };
    const article = await articles.findOne(query);
    console.log(article);
    return article
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}