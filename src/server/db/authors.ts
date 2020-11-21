import { Query } from './index';

const insert = (name: string, email: string) => Query(`
    INSERT INTO authors (name, email)
    VALUES (?, ?)
`, [name, email])

export default {
    insert,
}