import React from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';

const index =( { contact, onRemoveContact } ) => {
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
                onRemoveContact(id)
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
    </div>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Nội Dung</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {contact.map(({ id, name ,email,message}, index) => (
                        <tr key={index}>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{message}</td>
                            <td>
                                <button className="btn btn-danger"onClick={() => removeHandle(id)}>Xóa</button>
                            </td>
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

index.propTypes = {

}

export default index
