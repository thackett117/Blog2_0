import { Query } from './index';

const findOne = async(id: number, token: string) => Query(`
    SELECT * FROM tokens
    WHERE id = ${id} AND token = '${token}'
`);

const insert = async (userid: number) => Query(`
    INSERT INTO tokens (userid)
    VALUES (${userid})
`);

const update = async (id: number, token: string) => Query(`
    UPDATE tokens
    SET token = '${token}'
    WHERE id = ${id}
`);

const remove = async(userid: number) => Query(`
    DELETE FROM tokens
    WHERE tokens.userid = ${userid};
`)


export default {
    findOne,
    insert,
    update,
    remove
}