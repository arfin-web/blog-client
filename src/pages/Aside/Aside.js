import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <>
            <div className='container my-5'>
                <h1 className='text-white fw-bold'>Other Blogs</h1>
                <hr className='bg-white w-100' />
                <div className="card blog my-5 shadow-lg">
                    <img src="https://www.nextacademy.com/wp-content/uploads/2016/07/Learn-to-code-on-your-own.webp" className="card-img-top" alt="asideBlog" />
                    <div className="card-body">
                        <h5 className="card-title text-white mb-4">How To Code For Beginners: All You Need to Know</h5>
                        <NavLink to="/coding" className="btn-sm bg-white text-dark text-decoration-none fw-bold">Know More</NavLink>
                    </div>
                </div>
                <div className="card blog my-5 shadow-lg">
                    <img src="https://www.motocms.com/blog/wp-content/uploads/2019/11/how-to-become-a-web-developer.jpg" className="card-img-top" alt="asideBlog" />
                    <div className="card-body">
                        <h5 className="card-title text-white mb-4">How to Become a Web Developer</h5>
                        <NavLink to="/developer" className="btn-sm bg-white text-dark text-decoration-none fw-bold">Know More</NavLink>
                    </div>
                </div>
                <div className="card blog my-5 shadow-lg">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-2898d743c3c2bf03a45f7c6d9181efe6" className="card-img-top" alt="asideBlog" />
                    <div className="card-body">
                        <h5 className="card-title text-white mb-4">What is the MERN Stack?</h5>
                        <NavLink to="/mern" className="btn-sm bg-white text-dark text-decoration-none fw-bold">Know More</NavLink>
                    </div>
                </div>

                <h1 className='text-white fw-bold'>Follow Us:</h1>
                <hr className='bg-white w-100' />
                <div className='container-fluid mt-5'>
                    <div className='row g-4'>
                        <div className='col-6'>
                            <div className='p-5 bg-white rounded-3'>
                                <i className="fab fa-facebook-square fs-1 text-dark"></i>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='p-5 blog rounded-3 shadow'>
                                <i className="fab fa-twitter-square fs-1 text-white"></i>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='p-5 blog rounded-3 shadow'>
                                <i className="fab fa-instagram-square fs-1 text-white"></i>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='p-5 bg-white rounded-3'>
                                <i className="fab fa-whatsapp-square fs-1 text-dark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aside;