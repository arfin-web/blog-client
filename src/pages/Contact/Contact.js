import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Contact = () => {
    const { user } = useAuth();
    return (
        <>
            <div className='container'>
                <div className="card my-5 blog shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title text-white fw-bold">Get In Touch:</h2>
                                <hr className='bg-white' />
                                <div className="p-3">
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label htmlFor="inputName4" className="form-label text-white fs-4">Name</label>
                                            <input type="text" value={user.displayName} name='name' className="form-control" id="inputName4" placeholder="Enter Yoiur Name" autoComplete="off" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputEmail" className="form-label text-white fs-4">Email</label>
                                            <input type="text" value={user.email} name='email' className="form-control" id="inputEmail" placeholder="Enter Yoiur Email" autoComplete="off" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputEmail" className="form-label text-white fs-4">Your Message</label>
                                            <textarea class="form-control" placeholder="Leave your message here here" id="floatingTextarea" autoComplete='off'></textarea>
                                        </div>
                                        <div className="col-12">
                                            <input type="submit" className="btn bg-white text-dark fw-bold fs-5 mt-3" value="Send" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src="https://c4.wallpaperflare.com/wallpaper/56/546/345/developer-php-wallpaper-preview.jpg" className="img-fluid rounded-start h-100" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;