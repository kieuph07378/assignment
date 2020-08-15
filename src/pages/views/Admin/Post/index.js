import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const PostManager = ( { post, onRemovePost } ) => {
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
                onRemovePost(id)
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
            <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <Link to='/admin/post-add' className="btn btn-warning">Thêm bài viết</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Mô tả ngắn</th>
                                    <th scope="col">Nội dung</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Action</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                            {post.map(({ id, title ,short_desc,content,image}, index) => (
                                    <tr key={index}> 
                                    <th scope="row">{id}</th>
                                    <td>{title}</td>
                                    <td>{short_desc}</td>
                                    <td>{content}</td>
                                    <td><img src={image} alt="" width="50" /></td>
                                        <td> 
                                            <button className="btn btn-danger"  onClick={() => removeHandle(id)}>Xóa</button> 
                                             

                                         </td>
                                         <td><Link className="btn btn-primary"to={`/admin/edit-post/${id}`}>Sửa</Link></td> 
                                     </tr> 
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

PostManager.propTypes = {

}

export default PostManager
