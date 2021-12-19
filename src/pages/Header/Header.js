import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">
                        <button className='btn bg-dark rounded-pill text-white fw-bold fs-4 logo'><i className="fas fa-laptop-code"></i> Dev-Blog</button>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-5" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" aria-current="page" to="/contact">Contact</NavLink>
                            </li>
                            {
                                user ? <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/addblog">Add Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/myblogs">My Blog</NavLink>
                                    </li>
                                    {
                                        admin && <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link fs-5" to="/manageblogs">Manage Blogs</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link fs-5" to="/makeadmin">Make Admin</NavLink>
                                            </li>
                                        </>
                                    }
                                    <li className="nav-item">
                                        <button onClick={logOut} type='button' className="btn bg-dark text-white fs-5 fw-bold">Sign Out</button>
                                    </li>
                                </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signin">
                                                <button className='btn bg-dark text-white fs-5 fw-bold'>Sign In</button>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signup">
                                                <button className='btn bg-dark text-white fs-5 fw-bold'>Sign Up</button>
                                            </NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;