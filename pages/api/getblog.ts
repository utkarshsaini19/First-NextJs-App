// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'

type Data = {
    error: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (error, data) => {
        console.log(req.query.slug);
        if(error)
        {
             res.status(500).json({error: 'No such Blog Found'})
        }

        res.status(200).json(JSON.parse(data))
    })
}
