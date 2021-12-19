import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = (props) => {
    const { name, title, details, image, _id } = props.blog;
    return (
        <>
            <div className="card mb-3 my-5 blog shadow-lg">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={image} className="img-fluid rounded-start h-100" alt="pic" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h4 className="card-title fw-bold text-white"><i className="fab fa-pied-piper fs-2"></i> {title}</h4>
                            <p className="card-text text-white-50">{details}</p>
                            <p className="card-text"><small className="text-muted">--- {name}</small></p>
                            <NavLink to={`/blog/${_id}`} className='btn bg-white text-dark fw-bold'>Learn More <i className="fas fa-terminal"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;