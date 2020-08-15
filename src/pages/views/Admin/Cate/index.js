import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CategoryManager = ({cate,onRemoveCate }) => {
    const removeHandle = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                onRemoveCate(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        console.log(id)
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <Link to='/admin/cate-add' className="btn btn-warning">Thêm danh mục</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cate.map(({ id, name}, index) => (
                                    <tr key={index}> 
                                    <th scope="row">{id}</th>
                                    <td><Link to={`/admin/detail-cate/${id}`}>{name}</Link></td> 
                                        <td> 
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button> 
                                            <Link className='btn btn-primary ml-2'to={`/admin/edit-cate/${id}`}>Sửa</Link> 
                                         </td> 
                                     </tr> 
                                ))} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

CategoryManager.propTypes = {

}

export default CategoryManager
