import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'


function AddPost({ onAddPost }) {
    let history = useHistory();
    const [valueInput, setValueInput] = useState({});
    // const onHandleChange = (e) => {
    //     const { title, image, content, short_desc ,value } = e.target;
    //     setValueInput({
    //         ...valueInput,
    //         [title]: e.target.value,
    //         [content]: e.target.value,
    //         [short_desc]: e.target.value,
    //         [image]: e.target.value
    //     })
    // }
    const onSubmit = (data) => {
        onAddPost(data);
        history.push("/admin/post");
    }
    const { register, handleSubmit, watch, errors } = useForm();


    return (
        <div>
            <div>
             <div className='all-content-wrapper'>
            <section class="content">
                <h3 className="card-title">Thêm bài viết</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tiêu đề bài viết</label>
                        <input type="text"
                            name="title"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true, minLength: 5 })} />
                            {errors.title && <span style={{ color: "red" }}>Tiêu đề bài viết không được để trống, không dưới năm ký tự</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả ngắn</label>
                        <input type="text"
                            name="short_desc"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true, minLength: 5 })} />
                            {errors.short_desc && <span style={{ color: "red" }}>Mô tả bài viết không được để trống, không dưới năm ký tự</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nội dung </label>
                        <textarea  type="text"
                            name="content"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true, min: 0 })} />
                            {errors.content && <span style={{ color: "red" }}>Nội dung không được để trống, giá sản phẩm phải lớn hơn không</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ảnh bài viết</label>
                        <input type="text"
                            name="image"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })} />
                            {errors.image && <span style={{ color: "red" }}>Ảnh bài viết không được để trống</span>}
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
        </div>
        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost
