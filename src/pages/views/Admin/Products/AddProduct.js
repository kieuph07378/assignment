import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'




function AddProduct({ onAdd, cate }) {
    let history = useHistory();
    const [valueInput, setValueInput] = useState({});
    function onHandleChange(e) {
        const { name, image, price, value ,cate_id, detail } = e.target;
        setValueInput({
            ...valueInput,
            [name]: e.target.value,
            [cate_id]: e.target.value,
            [image]: e.target.value,
            [price]: e.target.value,
            [detail]: e.target.value,
        })
    }
    function onSubmit(e) {
        // e.preventDefault();
        onAdd(valueInput);
        history.push("/admin/products");
    }
    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div className='all-content-wrapper'>
            <section class="content">
                <h3 className="card-title">Thêm sản phẩm</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="inputProductName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, minLength: 5 })} />
                            {errors.name && <span style={{ color: "red" }}>Tên sản phẩm không được để trống, không dưới năm ký tự</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Danh mục</label>
                        <select type="text" name="cate_id" className="form-control"
                        onChange={onHandleChange} 
                        ref={register({ required: true })}>
                            {cate && cate.map(({ id, name }, index) => (
                                <option value={id}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Gía sản phẩm</label>
                        <input type="text"
                            name="price"
                            className="form-control"
                            id="inputProductName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, min: 0 })} />
                            {errors.price && <span style={{ color: "red" }}>Gía sản phẩm không được để trống, giá sản phẩm phải lớn hơn không</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
                        <input type="text"
                            name="detail"
                            className="form-control"
                            id="inputProductName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, min: 0 })} />
                            {errors.detail && <span style={{ color: "red" }}>Gía sản phẩm không được để trống, giá sản phẩm phải lớn hơn không</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ảnh sản phẩm</label>
                        <input type="text"
                            name="image"
                            className="form-control"
                            id="inputProductName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true })} />
                            {errors.image && <span style={{ color: "red" }}>Ảnh sản phẩm không được để trống</span>}
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}

export default AddProduct;