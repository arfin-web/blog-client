import React, { useRef } from "react";
import useAuth from '../../Hooks/useAuth';

const Addblog = () => {
    const { user } = useAuth();

    const nameRef = useRef()
    const emailRef = useRef()
    const titleRef = useRef()
    const detailsRef = useRef()
    const fulldetailsRef = useRef()
    const imageRef = useRef()

    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const title = titleRef.current.value;
        const details = detailsRef.current.value;
        const fulldetails = fulldetailsRef.current.value;
        const image = imageRef.current.value;

        const newBlog = { name, email, title, details, fulldetails, image };


        fetch('https://serene-coast-20752.herokuapp.com/blogs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Blog Successfully posted');
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <>
            <div className="container p-4">
                <h1 className='text-white fw-bold'>Write Your Blog</h1>
                <hr className='bg-white w-50' />
                <hr className='bg-white w-25 mb-5' />
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputName4" className="form-label text-white fs-4">Name</label>
                        <input ref={nameRef} type="text" value={user.displayName} name='name' className="form-control" id="inputName4" placeholder="Enter Yoiur Name" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail" className="form-label text-white fs-4">Email</label>
                        <input ref={emailRef} type="text" value={user.email} name='email' className="form-control" id="inputEmail" placeholder="Enter Yoiur Email" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputTitle4" className="form-label text-white fs-4">Title</label>
                        <input ref={titleRef} type="text" name='title' className="form-control" id="inputTitle4" placeholder="Enter Blog Title" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDetails" className="form-label text-white fs-4">Details</label>
                        <input ref={detailsRef} type="text" name='details' className="form-control" id="inputDetails" placeholder="Detail Information" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputFullDetails" className="form-label text-white fs-4">Full Details</label>
                        <input ref={fulldetailsRef} type="text" name='details' className="form-control" id="inputFullDetails" placeholder="Full Detail Information" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputImage" className="form-label text-white fs-4">Image URL</label>
                        <input ref={imageRef} type="text" name='image' className="form-control" id="inputImage" placeholder="Image URL" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn bg-white text-dark fw-bold fs-5 mt-3" value="Add Blog" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Addblog;