import React,    { useState,useEffect } from 'react';
import Routers from './routers'
import api from './api/productApi'
import apiCate from './api/cateApi'
import apiPost from './api/postApi'
import apiContact from './api/contactApi'



function App() {
  const [products, setProducts] = useState([]);
  const [cate , setCate] = useState([apiCate]);
  const [post , setPost] = useState([apiPost]);
  const [contact , setContact] = useState ([apiContact])

  //hiển thị sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();

  },
   []);

  //xóa sản phẩm
  // const onHandleRemove = (id) => {
  //   const newProducts = products.filter(product => product.id !== id);
  //   setProducts(newProducts);
  // }
  const onHandleRemove = async (id) => {
    try {
      const { data } = await api.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  //thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await api.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  //sửa sản phẩm
  const onHandleUpdate = async (updateProducts) => {
    const newProducts = products.map(
      (Products) =>
        Products.id === updateProducts.id ? updateProducts : Products 
        // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await api.update(updateProducts.id, updateProducts);
    setProducts(newProducts);
  };
  
  //hiển thị danh mục
  useEffect(() => {
    const getCate = async () => {
      try {
        const { data } = await apiCate.getAll();
        setCate(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCate();

  },
   []);
  // thêm danh mục
  const onHandleAddCate = async (categories) => {
    try {
      const { data } = await apiCate.create(categories);
      setCate([
        ...cate,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  //xóa danh mục
  const onRemoveHandle = async (id) => {
    try {
      const { data } = await apiCate.remove(id);
      const newCategories = cate.filter((cates) => cates.id !== id);
      setCate(newCategories);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  //sửa danh mục

  const onHandleUpdateCate = async (updateCate) => {
    const newCate = cate.map(
      (cate) =>
        cate.id === updateCate.id ? updateCate : cate 
        // Nếu cate.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiCate.update(updateCate.id, updateCate);
    setCate(newCate);
  };


  //hiển thị bài viết 
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await apiPost.getAll();
        setPost(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPost();
  },
   []);

   //xóa bài viết

   const onRemoveHandlePost = async (id) => {
    try {
      const { data } = await apiPost.remove(id);
      const newPost = post.filter((post) => post.id !== id);
      setPost(newPost);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  
  //thêm bài viết

  const onHandleAddPost = async (posts) => {
    try {
      const { data } = await apiPost.create(posts);
      setPost([
        ...post,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // sửa bài viết
  const onHandleUpdatepost = async (updatePost) => {
    const newPost = post.map(
      (post) =>
        post.id === updatePost.id ? updatePost : post 
        // Nếu post.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiPost.update(updatePost.id, updatePost);
    setPost(newPost);
  };

  //hiển thị liên hệ
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await apiContact.getAll();
        setContact(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getContact();

  },
   []);
  //gửi liên hệ

  const onHandleAddContact = async (contact) => {
    try {
      const { data } = await apiContact.create(contact);
      setContact([
        ...contact,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  //xóa liên hệ
  const onRemoveHandleContact = async (id) => {
    try {
      const { data } = await apiContact.remove(id);
      const newContact = contact.filter((contact) => contact.id !== id);
      setContact(newContact);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} 
      onAdd={onHandleAdd} onUpdate={onHandleUpdate} cate={cate} 
      onAddCate = {onHandleAddCate} onRemoveCate = {onRemoveHandle}
      onUpdateCate = {onHandleUpdateCate} post={post} onRemovePost = {onRemoveHandlePost}
      onAddPost = {onHandleAddPost} onUpdatePost = {onHandleUpdatepost}
      contact ={contact} onAddContact = {onHandleAddContact} onRemoveContact = {onRemoveHandleContact}
      />
    </div>
  )

}
export default App;