import { Query } from './index';

// const insert = (name: string, email: string) => Query(`
//     INSERT INTO authors (name, email)
//     VALUES (?, ?)
// `, [name, email]);

const insert = async (email: string, name: string, password: string) => Query(`
    INSERT INTO authors (email, name, password)
    VALUES (?, ?, ?)
`, [email, name, password]);

const findOneByEmail = async (email: string) => Query(`
    SELECT * FROM authors
    WHERE email = '${email}' LIMIT 1
`)

const findOneById = async(id: number) => Query(`
    SELECT * FROM authors
    WHERE id = ${id} LIMIT 1
`);

export default {
    insert,
    findOneByEmail,
    findOneById,
}