import * as express from 'express';

import db from '../db';

const router: express.Router = express.Router();


router.delete('/', async(req: express.Request, res: express.Response) => {
    try{
        let userid = Number(req.params.userid);
        await db.Tokens.remove(userid);

        res.json({message: 'Blogged!'})
        res.status(200).send(`Token Deleted!`)
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;