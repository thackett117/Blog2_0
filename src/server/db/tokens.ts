import { Query } from './index';

const findOne = async(id: number, token: string) => Query(`
    SELECT * FROM tokens
    WHERE id = ${id} AND token = '${token}'
`);

const insert = async (authorid: number) => Query(`
    INSERT INTO tokens (userid)
    VALUES (${authorid})
`);

const update = async (id: number, token: string) => Query(`
    UPDATE tokens
    SET token = '${token}'
    WHERE id = ${id}
`)


export default {
    findOne,
    insert,
    update
}