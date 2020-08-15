import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Blog = ({ post }) => {
    return (
        <div>
            <div className="container">
        <div className="wrapper">
          {/* first section (nuts) */}
         
          {/* second section (nuts special) */}
          
          {/* //second section (nuts special) */}
          {/* third section (oils) */}
          <div className="product-sec1">
           
            {post.map(({id, title,short_desc, image }, index) => (
            <div className="col-md-4 product-men">
  
             <div className="men-pro-item simpleCart_shelfItem">
               
                <div className="men-thumb-item">
                  <img src={image} width="224.15"  alt />
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <Link to= {`/blog-detail/${id}`}className="link-product-add-cart">Xem</Link>
                    </div>
                  </div>
                  
                </div>
                <div className="item-info-product ">
                  <h4>
                <a href="single.html">{title}</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price"></span>
                    
                  </div>
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="business" defaultValue=" " />
                        <input type="hidden" name="item_name" defaultValue="Freedom Sunflower Oil, 1L" />
                        <input type="hidden" name="amount" defaultValue={78.00} />
                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                        <input type="hidden" name="currency_code" defaultValue="USD" />
                        <input type="hidden" name="return" defaultValue=" " />
                        <input type="hidden" name="cancel_return" defaultValue=" " />
                      
                      </fieldset>
                    </form>
                  </div>
            <span>{short_desc}</span>
                  
                </div>
               
              </div>
             
            </div>
            ))} 
            
            <div className="col-md-4 product-men">
              
            </div>
            <div className="col-md-4 product-men">
              
            </div>
            <div className="clearfix" />
          </div>
          {/* //third section (oils) */}
          {/* fourth section (noodles) */}
            </div>
            </div>
            <div className="clearfix" />
          </div>
        
      
            
    
    )
}

Blog.propTypes = {

}

export default Blog
