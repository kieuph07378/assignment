import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'

const Detail = ({products}) => {
    let { id }  = useParams();
    const product = products.find(product =>product.id == id);
    return (
        <div className="banner-bootom-w3-agileits">
  <div className="container">
    {/* tittle heading */}
    <h3 className="tittle-w3l">Chi Tiết Sản Phẩm
      <span className="heading-style">
        <i />
        <i />
        <i />
      </span>
    </h3>
    {/* //tittle heading */}
    <div className="col-md-5 single-right-left ">
      <div className="grid images_3_of_2">
        <div className="flexslider">
          <ul className="slides">
            <li data-thumb={product.image}>
              <div className="thumb-image">
                <img src={product.image} data-imagezoom="true" className="img-responsive" alt /> </div>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    <div className="col-md-7 single-right-left simpleCart_shelfItem">
      <h3>{product.name}</h3>
   
      <p>
        <span className="item_price">{product.price}    </span>
        <del>$1300.00</del>
        
      </p>
      <div className="single-infoagile">
        <ul>
          <li>
          {product.detail}
          </li>
        </ul>
      </div>
     
      
      </div>
    </div>
    
  </div>


    )
}

Detail.propTypes = {

}

export default Detail
