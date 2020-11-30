import * as express from 'express';
import * as passport from 'passport';

import blogsRouter from './blogs';
import authRouter from './auth';
import tokensRouter from './tokens';

const router = express.Router();

router.use('/auth', authRouter);


router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
});


router.use('/blogs', blogsRouter);
router.use('/tokens', tokensRouter);

export default router;