import React from 'react';

const About = () => {
    return (
        <>
            <div className='container-fluid about mb-5'>

            </div>
            <div className='container'>
                <div className="card my-5 blog shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src="https://girltechblog.com/wp-content/uploads/2020/04/fabian-grohs-dC6Pb2JdAqs-unsplash-1024x721.jpg" className="img-fluid rounded-start h-100" alt="about" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title text-white fw-bold">About Us:</h2>
                                <hr className='bg-white' />
                                <p className="card-text text-white-50 mt-5">Welcome to one of the best Dev Blog from where you can get latest Dev blogs and increase your knowledge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;