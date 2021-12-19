import React from 'react';
import Aside from '../Aside/Aside';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <div className='container-fluid banner'>

            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-12'>
                        <Blogs></Blogs>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <Aside></Aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;