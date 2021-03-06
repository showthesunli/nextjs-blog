import { dm } from '@/lib/db-manager/manager.js'

const dbOption = {
    dbName: process.env.DB_NAME,
    dbCollection: process.env.DB_COLLECTION
}

const database = dm.client.db(dbOption.dbName);
const articlesCollection = database.collection(dbOption.dbCollection);

export async function updateOneArticle(filter, article) {

}

export async function findOneArticle(filter) {

}

export async function run() {
    // Query for a movie that has the title 'Back to the Future'
    const query = { doc_id: '9573529f1d48dd31154420d18281f3b0' };
    const article = await articlesCollection.findOne(query);
    return article
}

export async function getArticleList() {
    const query = { doc_ts: { $gt: 1647705556 } }
    const projection = {
        doc_date: 1,
        doc_name: 1,
        doc_id: 1,
        doc_author: 1,
        _id: 0
    }
    const option = {
        projection
    }
    const articleList = await articlesCollection
        .find(query, option).toArray()
    
    console.log(articleList)
    
    return articleList
}
