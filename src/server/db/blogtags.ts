import { Query } from './index';

const insert = (blogid: number, tags: string[]) => {
   tags.forEach(async(tagName) => {
    const tagId = await Query(`
        SELECT tags.id
        FROM tags
        WHERE tags.name = ?
    `, [tagName]);



       Query(`
        INSERT INTO blogtags (blogid, tagid)
        VALUES (?, ?);
       `, [blogid, tagId[0].id])
   })
}

const one = (blogid: number) => Query(`call spBlogTags(?)`, [blogid]);

const deleteBlogTags = (blogid: number) => Query(`
    DELETE FROM blogTags
    WHERE blogtags.blogid = ?
`, [blogid]);

export default {
    insert,
    one,
    deleteBlogTags
}