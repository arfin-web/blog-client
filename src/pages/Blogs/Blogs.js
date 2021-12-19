import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <div className='container my-5'>
                <h1 className='text-white fw-bold'>Latest Blogs</h1>
                <hr className='bg-white w-25' />
                {
                    blogs.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </>
    );
};

export default Blogs;