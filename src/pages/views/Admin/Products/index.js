import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ProductsManager = ({ products, onRemove, cate }) => {
    const [filter, setFilter] = useState("")
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
                onRemove(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <Link to='/admin/add-product' className="btn btn-warning">Thêm sản phẩm</Link>
                    <div className="card-header py-3">
                    <form className="d-none d-sm-inline-block form-inline mr-auto md-3 my-8 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input value={filter} onChange={(e) => setFilter(e.target.value)}
                                type="text"
                                className="form-control bg-light border-0 small"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2" />
                            
                        </div>
                    </form>
                </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Danh mục</th>
                                    
                                    
                                    <th scope="col">Mô tả</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {products.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">{product.id}</th>
                                        <td><Link to={`/admin/detail-product/${product.id}`}>{product.name}</Link></td>
                                        <td>{cate.map((cates) => cates.id == product.cate_id && <p>{cates.name}</p>)}</td>
                                        <td><img src={product.image} alt="" width="50" /></td>
                                        <td>{product.price}</td>
                                        <td>{product.detail}</td>
                                        <td>
                                            <button className="btn btn-danger"onClick={() => removeHandle(product.id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/edit-product/${product.id}`}>Sửa</Link>
                                        </td>
                                    </tr>
                                ))} */}
                                {products.map((product, index) => {
                                    if (filter.length !== 0) {
                                        if ((product.name).startsWith(filter)) {
                                            return (<tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td><Link to={`/admin/detail-product/${product.id}`}>{product.name}</Link></td>
                                                <td>{cate.map((cates) => cates.id == product.cate_id && <p>{cates.name}</p>)}</td>
                                                <td><img src={product.image} alt="" width="50" /></td>
                                                <td>{product.price}</td>
                                                
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>Xóa</button>
                                                    <Link className='btn btn-primary ml-2' to={`/admin/edit-product/${product.id}`}>Sửa</Link>
                                                </td>
                                            </tr>)
                                        } else {
                                            return null
                                        }
                                    }
                                    return (<tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><Link to={`/admin/detail-product/${product.id}`}>{product.name}</Link></td>
                                        <td><img src={product.image} alt="" width="50" /></td>
                                        <td>{product.price}</td>
                                        <td>{cate.map((cates) => cates.id == product.cate_id && <p>{cates.name}</p>)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/edit-product/${product.id}`}>Sửa</Link>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
