import * as express from 'express';

import DB from '../../db';
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens'

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let result: any = await DB.Authors.insert(user.email, user.name, user.password);
        let token = await CreateToken({ authorid: result.insertId });
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

export default router;