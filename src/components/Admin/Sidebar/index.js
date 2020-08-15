import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" to='/admin'>
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Interface
  </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/products" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                   
                    <span>Sản phẩm</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/cate" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    
                    <span>Danh mục</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" /> 
            {/* Heading */}
            <div className="sidebar-heading">
                Addons
  </div>
            {/* Nav Item - Pages Collapse Menu */}
           
            {/* Nav Item - Charts */}
            <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/post" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    
                    <span>Bài Viết</span>
                </Link>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/contacts" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    
                    <span>Quản lí liên hệ</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
           
        </ul>

    )
}

Sidebar.propTypes = {

}

export default Sidebar
