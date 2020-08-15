import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ products }) => {
    return (
        <div>
                <div>
        <div>
  {/* top-header */}
  <div className="ads-grid">
    <div className="container">
      {/* tittle heading */}
      <h3 className="tittle-w3l">Sản Phẩm
        <span className="heading-style">
          <i />
          <i />
          <i />
        </span>
      </h3>
      {/* //tittle heading */}
      {/* product left */}
      <div className="side-bar col-md-3">
       
        <div className="range">
          <h3 className="agileits-sear-head">Price range</h3>
          <ul className="dropdown-menu6">
            <li>
              <div id="slider-range" />
              <input type="text" id="amount" style={{border: 0, color: '#ffffff', fontWeight: 'normal'}} />
            </li>
          </ul>
        </div>
        {/* //price range */}
        {/* food preference */}
        <div className="left-side">
          <h3 className="agileits-sear-head">Food Preference</h3>
          <ul>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Vegetarian</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Non-Vegetarian</span>
            </li>
          </ul>
        </div>
        {/* //food preference */}
        {/* discounts */}
        <div className="left-side">
          <h3 className="agileits-sear-head">Discount</h3>
          <ul>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">5% or More</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">10% or More</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">20% or More</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">30% or More</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">50% or More</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">60% or More</span>
            </li>
          </ul>
        </div>
        {/* //discounts */}
        {/* reviews */}
        <div className="customer-rev left-side">
          <h3 className="agileits-sear-head">Customer Review</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <span>5.0</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>4.0</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>3.5</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>3.0</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>2.5</span>
              </a>
            </li>
          </ul>
        </div>
        {/* //reviews */}
        {/* cuisine */}
        <div className="left-side">
          <h3 className="agileits-sear-head">Cuisine</h3>
          <ul>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">South American</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">French</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Greek</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Chinese</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Japanese</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Italian</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Mexican</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Thai</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span">Indian</span>
            </li>
            <li>
              <input type="checkbox" className="checked" />
              <span className="span"> Spanish </span>
            </li>
          </ul>
        </div>
        {/* //cuisine */}
        {/* deals */}
       
      </div>
      {/* //product left */}
      {/* product right */}
      <div className="agileinfo-ads-display col-md-9">
        <div className="wrapper">
          {/* first section (nuts) */}
         
          {/* second section (nuts special) */}
          <div className="product-sec1 product-sec2">
            <div className="col-xs-7 effect-bg">
              <h3 className>Pure Energy</h3>
              <h6>Enjoy our all healthy Products</h6>
              <p>Get Extra 10% Off</p>
            </div>
            <h3 className="w3l-nut-middle">Nuts &amp; Dry Fruits</h3>
            <div className="col-xs-5 bg-right-nut">
              <img src="main/images/nut1.png" alt />
            </div>
            <div className="clearfix" />
          </div>
          {/* //second section (nuts special) */}
          {/* third section (oils) */}
          <div className="product-sec1">
           
            {products.map(({id, name, image, price }, index) => (
            <div className="col-md-4 product-men">
                
             <div className="men-pro-item simpleCart_shelfItem">
               
                <div className="men-thumb-item">
                  <img src={image} width="224.15"  alt />
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <Link to= {`/detail-product/${id}`}className="link-product-add-cart">Xem</Link>
                    </div>
                  </div>
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product ">
                  <h4>
                <a href="single.html">{name}</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">{price}</span>
                    
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
                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                      </fieldset>
                    </form>
                  </div>
                  
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
          {/* //fourth section (noodles) */}
        </div>
      </div>
      {/* //product right */}
    </div>
  </div>
  {/* //top products */}
  {/* special offers */}
 

 
</div>

      </div>
        
    )
}

Home.propTypes = {

}

export default Home
