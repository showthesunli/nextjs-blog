import {run} from '@/lib/db-manager/repository/db_tools.js'

export default async function handler(req, res){
    const aritcle = await run()
    res.status(200).send(aritcle)
    // res.status(200).json({ text: 'hello'})
}