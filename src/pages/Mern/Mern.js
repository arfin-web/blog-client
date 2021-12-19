import React from 'react';

const Mern = () => {
    return (
        <>
            <div className='container'>
                <div className="card blog my-5 shadow-lg">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-2898d743c3c2bf03a45f7c6d9181efe6" className="card-img-top" alt="asideBlog" />
                    <div className="card-body">
                        <h2 className="card-title text-white mb-4">What is the MERN Stack?</h2>
                        <p className='card-text text-white-50'>Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively (it technically uses a binary version of JSON called BSON), and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript.
                            MongoDB works extremely well with Node.js, and makes storing, manipulating, and representing JSON data at every tier of your application incredibly easy. For cloud-native applications, MongoDB Atlas makes it even easier, by giving you an auto-scaling MongoDB cluster on the cloud provider of your choice, as easy as a few button clicks.
                            Express.js (running on Node.js) and React.js make the JavaScript/JSON application MERN full stack, well, full. Express.js is a server-side application framework that wraps HTTP requests and responses, and makes it easy to map URLs to server-side functions. React.js is a frontend JavaScript framework for building interactive user interfaces in HTML, and communicating with a remote server.
                            The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!
                            MERN is the stack of choice for todays web developers looking to move quickly, particularly for those with React.js experience.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mern;