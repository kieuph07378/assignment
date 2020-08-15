import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
const EditCate = ({ cate, onUpdateCate }) => {
    const { register, handleSubmit, errors } = useForm();
        let { id } = useParams();
        let history = useHistory();
        let cates = cate.find((data) => data.id == id);
        const [currentCate, setCurrentCate] = useState(cates);
        console.log(currentCate);
        const onSubmit = (e) => {
            onUpdateCate(currentCate);
            history.push("/admin/cate");
        };
        const onHandleChange = (e) => {
            const { name, value } = e.target;
            setCurrentCate({
            ...currentCate,
            [name]: value
            });
        };
    return (
        <div>
            <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Tên danh mục</label>
                    <input type="text" name="name" value={currentCate.name} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
        </div>
    )
}

EditCate.propTypes = {
    cate: PropTypes.array
}

export default EditCate
