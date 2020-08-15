import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

    const EditProduct = ({ products, onUpdate, cate }) => {
        const { register, handleSubmit, errors } = useForm();
        let { id } = useParams();
        let history = useHistory();
        let product = products.find((data) => data.id == id);
        const [currentProduct, setCurrentProduct] = useState(product);
        console.log(currentProduct);
        const onSubmit = (e) => {
            onUpdate(currentProduct);
            history.push("/admin/products");
        };
        const onHandleChange = (e) => {
            const { name, value } = e.target;
            setCurrentProduct({
            ...currentProduct,
            [name]: value
            });
        };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
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
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentProduct.image} onChange = {onHandleChange} className="form-control" ref={register({ required: true })}/>
                    {errors.image && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange = {onHandleChange} className="form-control" ref={register({ required: true })}/>
                    {errors.price && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả sản phẩm</label>
                    <input type="text" name="detail" value={currentProduct.detail} onChange = {onHandleChange} className="form-control" ref={register({ required: true })}/>
                    {errors.detail && <span>This field is required</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}
EditProduct.propTypes = {
    products: PropTypes.array
}
export default EditProduct