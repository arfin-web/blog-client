import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Manageblogs = () => {
    const { user } = useAuth()
    const [myblogs, setMyblogs] = useState([])

    useEffect(() => {
        const url = `https://serene-coast-20752.herokuapp.com/blogs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyblogs(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this product ?')
        if (proceed) {
            const url = `https://serene-coast-20752.herokuapp.com/blog/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingBlogs = myblogs.filter(blog => blog._id !== id)
                        setMyblogs(remainingBlogs);
                    };
                })
        }
    }
    return (
        <>
            <div className="container my-5">
                <p className="fs-1 text-white fw-bold text-center">Manage Blogs</p>
                <hr className='bg-white' />
                {
                    myblogs.map(blog => <>
                        <div className="card mb-3 mt-5 blog">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={blog.image} className="img-fluid rounded-start h-100" alt="pic" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title fw-bold text-white">{blog.title}</h3>
                                        <p className="card-text text-white-50">{blog.details}</p>
                                        <p className="card-text"><small className="text-muted">--- {blog.name}</small></p>
                                        <button onClick={() => handleDelete(blog._id)} className="btn bg-white text-dark fw-bold">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default Manageblogs;