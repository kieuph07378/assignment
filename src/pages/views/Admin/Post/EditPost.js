import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const EditPost = ({ post, onUpdatePost }) => {
    const { register, handleSubmit, errors } = useForm();
        let { id } = useParams();
        let history = useHistory();
        let posts = post.find((data) => data.id == id);
        const [currentPost, setCurrentPost] = useState(posts);
        console.log(currentPost);
        const onSubmit = (e) => {
            onUpdatePost(currentPost);
            history.push("/admin/post");
        };
        const onHandleChange = (e) => {
            const { name, value } = e.target;
            setCurrentPost({
            ...currentPost,
            [name]: value
            });
        };
    return (
        <div>
            <div>
            <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Tiêu đề</label>
                    <input type="text" name="title" value={currentPost.title} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.title && <span>This field is required</span>}
                </div>
            </form>
            </div>
            <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Mô tả ngắn</label>
                    <input type="text" name="short_desc" value={currentPost.short_desc} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.short_desc && <span>This field is required</span>}
                </div>
            </form>
            <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Nội dung</label>
                    <textarea type="text" name="content" value={currentPost.content} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.content && <span>This field is required</span>}
                </div>
            </form>
            </div>
            <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Ảnh</label>
                    <input type="text" name="image" value={currentPost.image} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.image && <span>This field is required</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}

EditPost.propTypes = {

}

export default EditPost
