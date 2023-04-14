// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript


import * as fs from 'fs'



export default function handler(
    req,res
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
