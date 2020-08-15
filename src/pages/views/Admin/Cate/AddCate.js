import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function AddCate ({onAddCate}) {
    let history = useHistory();
    const [valueInput ,setValueInput    ] = useState    ({});
    function onHandleChange(e) {
        const { name} = e.target;
        setValueInput({
            ...valueInput,
            [name]: e.target.value,
        })
    }
function onSubmit(e) {
    onAddCate(valueInput);
    history.push("/admin/cate");
}
const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div>
             <div className='all-content-wrapper'>
            <section class="content">
                <h3 className="card-title">Thêm danh mục</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="inputProductName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, minLength: 5 })} />
                            {errors.name && <span style={{ color: "red" }}>Tên danh mục không được để trống, không dưới năm ký tự</span>}
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
