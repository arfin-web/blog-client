import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const [blogDetails, setBlogDetails] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlogDetails(data))
    }, [])
    return (
        <>
            <div className='container my-5'>
                <div className="card mb-3 blog shadow-lg">
                    <img src={blogDetails?.image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h1 className="card-title text-white fw-bold">{blogDetails?.title}</h1>
                        <p className="card-text text-white-50 fs-5">{blogDetails?.fulldetails}</p>
                        <p className="card-text"><small className="text-muted fs-6">---- {blogDetails?.name}</small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;