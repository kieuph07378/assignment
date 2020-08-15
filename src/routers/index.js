import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import EditProduct from '../pages/views/Admin/Products/EditProducts';
import CategoryManager from '../pages/views/Admin/Cate';
import CategoryAdd from '../pages/views/Admin/Cate/AddCate';

import PostManager from '../pages/views/Admin/Post';
import AddPost from '../pages/views/Admin/Post/AddPost';
import EditPost from '../pages/views/Admin/Post/EditPost';

import Contacts from '../pages/views/Admin/Contacts';

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact'

import DetailProducts from '../pages/views/Admin/Products/DetailProduct';
import AddProduct from '../pages/views/Admin/Products/AddProduct';
import Detail from '../pages/views/Main/Product/Detail';
import EditCate from '../pages/views/Admin/Cate/EditCate';
import Blog from '../pages/views/Main/Blog';
import DetailBlog from '../pages/views/Main/DetailBlog';
import Checkout from '../pages/views/Main/Checkout';
import DetailCategory from '../pages/views/Admin/Cate/DetailCate';





const Routers = ({ cate, products, onRemove, onAdd, onUpdate, onAddCate,

     onRemoveCate,onUpdateCate, post ,onRemovePost, onAddPost , onUpdatePost, contact, onAddContact ,onRemoveContact
    
    
}) => {

    //xóa
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    //thêm
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    //sửa
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    //xóa

    const onHandleAddCate = (cate) => {
        onAddCate(cate)
    }

    
    const onRemoveHandle = (id) => {
        onRemoveCate(id)
    }
    
    const onHandleUpdateCate = (id, cate) => {
        onUpdateCate(id, cate)
    }


    const onRemoveHandlePost  = (id) => {
        onRemovePost(id)
    }

    const onHandleAddPost = (post) => {
        onAddPost(post)
    }
    const onHandleUpdatePost = ( id,post) => {
        onUpdatePost(id, post)
    }

    const onHandleAddContact = (contact) => {
        onAddContact(contact)
    }

    const onRemoveHandleContact = (id) => {
        onRemoveContact(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} cate ={cate} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/detail-product/:id'>
                                <DetailProducts products={products} />
                            </Route>
                            <Route path='/admin/add-product'>
                                <AddProduct onAdd={onHandleAdd} cate={cate} />
                            </Route>
                            <Route path='/admin/edit-product/:id'>
                                <EditProduct products={products} onUpdate={onHandleUpdate} cate={cate} />
                            </Route>
                            {/* danh mục */}
                            <Route path='/admin/cate'>
                                <CategoryManager cate={cate}  onRemoveCate = {onRemoveHandle}/>
                            </Route>
                            
                            <Route path='/admin/cate-add'>
                                <CategoryAdd onAddCate={onHandleAddCate} />
                            </Route>
                            <Route path='/admin/edit-cate/:id'>
                                <EditCate cate={cate} onUpdateCate={onHandleUpdateCate} />
                            </Route>
                            <Route path ='/admin/detail-cate/:id'>
                                <DetailCategory products = {products} cate ={cate}/>
                            </Route>

                            {/* bài viết */}

                            <Route path ='/admin/post'>
                                <PostManager post={post}  onRemovePost = {onRemoveHandlePost}/>
                            </Route>
                            <Route path='/admin/post-add'>
                                <AddPost onAddPost = {onHandleAddPost} />
                            </Route>
                            <Route path='/admin/edit-post/:id'>
                                <EditPost post = {post} onUpdatePost = {onHandleUpdatePost}/>
                            </Route>

                            {/* liên hệ */}
                            <Route path='/admin/contacts'>
                                <Contacts contact = {contact} onRemoveContact = {onRemoveHandleContact}/>
                            </Route>
                        </Switch>

                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home  products = {products}/>
                            </Route>
                            <Route path="/detail-product/:id" exact>
                                <Detail  products = {products}/>
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact onAddContact= {onHandleAddContact}/>
                            </Route>
                            <Route path="/blog">
                                <Blog  post = {post} />
                            </Route>
                            <Route path="/blog-detail/:id" >
                                <DetailBlog  post = {post}  />
                            </Route>
                            <Route path="/checkout">
                                <Checkout/>
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
