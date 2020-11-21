import { Query } from './index';

const all = () => Query(`
    SELECT blogs.id, blogs.title, blogs.content, authors.name FROM blogs
    JOIN authors
    ON blogs.authorid = authors.id;
`);

const one = (id: number) => Query(`
    SELECT blogs.id, blogs.title, blogs.content, authors.name FROM blogs
    JOIN authors
    ON blogs.authorid = authors.id
    WHERE blogs.id = ?;
`, [id]);

const insert = (title: string, content:string, authorid: number) => Query(`
    INSERT INTO blogs(title, content, authorid)
    VALUES (?, ?, ?);
`,[title, content, authorid]);

const update = (content: string, id: number) => Query(`
    UPDATE blogs 
    SET content = ?
    WHERE blogs.id = ?;
`,[content, id]);

const destroy = (id: number) => Query(`
    DELETE FROM blogs
    WHERE blogs.id = ?;
`, [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy,
}