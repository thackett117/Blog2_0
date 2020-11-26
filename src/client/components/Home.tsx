import React from 'react';
import {blog} from '../types';
import { Link } from 'react-router-dom';
import { json } from '../utils/api';

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [blogs, setBlogs] = React.useState<blog[]>([]);

    React.useEffect(() => {
        (async () => {
            let blogs = await json('/api/blogs')
            // let data = await fetch(`/api/blogs`);
            // let blogs = await data.json();
            blogs.reverse();
            setBlogs(blogs);
        })();
    }, [])

    return (
        <div className="container">
            {blogs.map(blog => (
                <div className="card home-blog-card m-3 shadow">
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{blog.name}</h6>
                  <p className="card-text">{blog.content}</p>
                  <Link to={`/blog/${blog.id}`}>
                    <button className="btn btn-sm btn-outline-dark">Read More</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
    )
};

interface HomeProps { }

export default Home;