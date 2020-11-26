export interface blog {
    id: number,
    title: string,
    content: string,
    name: string,
    tags?: []
}

export interface newBlog {
    author?: {
        name: string,
        email: string
    },
    blog: {
        title: string,
        content: string, 
        authorid: number
        tags: string[]
    },
}

export interface newAuthor {
    email: string,
    password: string,
    loginStatus?: boolean
}
