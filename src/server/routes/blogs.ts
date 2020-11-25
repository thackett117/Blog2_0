import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import db from '../db';

const router: express.Router = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const blogs = await db.Blogs.all()
        res.json(blogs);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
});

router.get('/:id', async(req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const blog = await db.Blogs.one(id);
        const blogTags = await db.BlogTags.one(id);
        blog[0].tags = blogTags[0];
        res.json(blog[0]);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
});

router.post('/', async(req: express.Request, res: express.Response) => {
    try {
        // const author = req.body.author;
        const blog = req.body.blog;
        const blogTags = req.body.blog.tags;

        // const newAuthor = await db.Authors.insert(author.name, author.email);
        const newBlog = await db.Blogs.insert(blog.title, blog.content, newAuthor.insertId);
        const newBlogTags = await db.BlogTags.insert(newBlog.insertId, blogTags);

        res.status(200).send(
            // author created with id: ${newAuthor.insertId}
            `blog created with id: ${newBlog.insertId}
        `);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
});

router.put('/:id', async(req: express.Request, res: express.Response) => {
    try {
        const content: string = req.body.content;
        const id = Number(req.params.id);

        await db.Blogs.update(content, id);

        res.status(200).send(`blog edited as id: ${id}`);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async(req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.BlogTags.deleteBlogTags(id);
        await db.Blogs.destroy(id);

        res.status(200).send(`blog deleted at id: ${id}`);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;