import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
              <div className="footer-top">
    <div className="container-fluid">
      <div className="col-xs-8 agile-leftmk">
        <h2>Get your Groceries delivered from local stores</h2>
        <p>Free Delivery on your first order!</p>
        <form action="#" method="post">
          <input type="email" placeholder="E-mail" name="email" required />
          <input type="submit" defaultValue="Subscribe" />
        </form>
        <div className="newsform-w3l">
          <span className="fa fa-envelope-o" aria-hidden="true" />
        </div>
      </div>
      <div className="col-xs-4 w3l-rightmk">
        <img src="main/images/tab3.png" alt=" " />
      </div>
      <div className="clearfix" />
    </div>
  </div>
  {/* //newsletter */}
  {/* footer */}
  <footer>
    <div className="container">
      {/* footer first section */}
      <p className="footer-main">
        <span>"Grocery Shoppy"</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione voluptatem sequi nesciunt.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.</p>
      {/* //footer first section */}
      {/* footer second section */}
      <div className="w3l-grids-footer">
        <div className="col-xs-4 offer-footer">
          <div className="col-xs-4 icon-fot">
            <span className="fa fa-map-marker" aria-hidden="true" />
          </div>
          <div className="col-xs-8 text-form-footer">
            <h3>Track Your Order</h3>
          </div>
          <div className="clearfix" />
        </div>
        <div className="col-xs-4 offer-footer">
          <div className="col-xs-4 icon-fot">
            <span className="fa fa-refresh" aria-hidden="true" />
          </div>
          <div className="col-xs-8 text-form-footer">
            <h3>Free &amp; Easy Returns</h3>
          </div>
          <div className="clearfix" />
        </div>
        <div className="col-xs-4 offer-footer">
          <div className="col-xs-4 icon-fot">
            <span className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="col-xs-8 text-form-footer">
            <h3>Online cancellation </h3>
          </div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
      {/* //footer second section */}
      {/* footer third section */}
      <div className="footer-info w3-agileits-info">
        {/* footer categories */}
        <div className="col-sm-5 address-right">
          <div className="col-xs-6 footer-grids">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="product.html">Grocery</a>
              </li>
              <li>
                <a href="product.html">Fruits</a>
              </li>
              <li>
                <a href="product.html">Soft Drinks</a>
              </li>
              <li>
                <a href="product2.html">Dishwashers</a>
              </li>
              <li>
                <a href="product.html">Biscuits &amp; Cookies</a>
              </li>
              <li>
                <a href="product2.html">Baby Diapers</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 footer-grids agile-secomk">
            <ul>
              <li>
                <a href="product.html">Snacks &amp; Beverages</a>
              </li>
              <li>
                <a href="product.html">Bread &amp; Bakery</a>
              </li>
              <li>
                <a href="product.html">Sweets</a>
              </li>
              <li>
                <a href="product.html">Chocolates &amp; Biscuits</a>
              </li>
              <li>
                <a href="product2.html">Personal Care</a>
              </li>
              <li>
                <a href="product.html">Dried Fruits &amp; Nuts</a>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
        {/* //footer categories */}
        {/* quick links */}
        <div className="col-sm-5 address-right">
          <div className="col-xs-6 footer-grids">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <a href="help.html">Help</a>
              </li>
              <li>
                <a href="faqs.html">Faqs</a>
              </li>
              <li>
                <a href="terms.html">Terms of use</a>
              </li>
              <li>
                <a href="privacy.html">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 footer-grids">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <i className="fa fa-map-marker" /> 123 Sebastian, USA.</li>
              <li>
                <i className="fa fa-mobile" /> 333 222 3333 </li>
              <li>
                <i className="fa fa-phone" /> +222 11 4444 </li>
              <li>
                <i className="fa fa-envelope-o" />
                <a href="mailto:example@mail.com"> mail@example.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* //quick links */}
        {/* social icons */}
        <div className="col-sm-2 footer-grids  w3l-socialmk">
          <h3>Follow Us on</h3>
          <div className="social">
            <ul>
              <li>
                <a className="icon fb" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="icon tw" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="icon gp" href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
          <div className="agileits_app-devices">
            <h5>Download the App</h5>
            <a href="#">
              <img src="main/images/1.png" alt />
            </a>
            <a href="#">
              <img src="main/images/2.png" alt />
            </a>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* //social icons */}
        <div className="clearfix" />
      </div>
      {/* //footer third section */}
      {/* footer fourth section (text) */}
      <div className="agile-sometext">
        <div className="sub-some">
          <h5>Online Grocery Shopping</h5>
          <p>Order online. All your favourite products from the low price online supermarket for grocery home delivery in Delhi,
            Gurgaon, Bengaluru, Mumbai and other cities in India. Lowest prices guaranteed on Patanjali, Aashirvaad, Pampers, Maggi,
            Saffola, Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel, Ariel, Vim, Haldiram's and others.</p>
        </div>
        <div className="sub-some">
          <h5>Shop online with the best deals &amp; offers</h5>
          <p>Now Get Upto 40% Off On Everyday Essential Products Shown On The Offer Page. The range includes Grocery, Personal Care,
            Baby Care, Pet Supplies, Healthcare and Other Daily Need Products. Discount May Vary From Product To Product.</p>
        </div>
        {/* brands */}
        <div className="sub-some">
          <h5>Popular Brands</h5>
          <ul>
            <li>
              <a href="product.html">Aashirvaad</a>
            </li>
            <li>
              <a href="product.html">Amul</a>
            </li>
            <li>
              <a href="product.html">Bingo</a>
            </li>
            <li>
              <a href="product.html">Boost</a>
            </li>
            <li>
              <a href="product.html">Durex</a>
            </li>
            <li>
              <a href="product.html"> Maggi</a>
            </li>
            <li>
              <a href="product.html">Glucon-D</a>
            </li>
            <li>
              <a href="product.html">Horlicks</a>
            </li>
            <li>
              <a href="product2.html">Head &amp; Shoulders</a>
            </li>
            <li>
              <a href="product2.html">Dove</a>
            </li>
            <li>
              <a href="product2.html">Dettol</a>
            </li>
            <li>
              <a href="product2.html">Dabur</a>
            </li>
            <li>
              <a href="product2.html">Colgate</a>
            </li>
            <li>
              <a href="product.html">Coca-Cola</a>
            </li>
            <li>
              <a href="product2.html">Closeup</a>
            </li>
            <li>
              <a href="product2.html"> Cinthol</a>
            </li>
            <li>
              <a href="product.html">Cadbury</a>
            </li>
            <li>
              <a href="product.html">Bru</a>
            </li>
            <li>
              <a href="product.html">Bournvita</a>
            </li>
            <li>
              <a href="product.html">Tang</a>
            </li>
            <li>
              <a href="product.html">Pears</a>
            </li>
            <li>
              <a href="product.html">Oreo</a>
            </li>
            <li>
              <a href="product.html"> Taj Mahal</a>
            </li>
            <li>
              <a href="product.html">Sprite</a>
            </li>
            <li>
              <a href="product.html">Thums Up</a>
            </li>
            <li>
              <a href="product2.html">Fair &amp; Lovely</a>
            </li>
            <li>
              <a href="product2.html">Lakme</a>
            </li>
            <li>
              <a href="product.html">Tata</a>
            </li>
            <li>
              <a href="product2.html">Sunfeast</a>
            </li>
            <li>
              <a href="product2.html">Sunsilk</a>
            </li>
            <li>
              <a href="product.html">Patanjali</a>
            </li>
            <li>
              <a href="product.html">MTR</a>
            </li>
            <li>
              <a href="product.html">Kissan</a>
            </li>
            <li>
              <a href="product2.html"> Lipton</a>
            </li>
          </ul>
        </div>
        {/* //brands */}
        {/* payment */}
        <div className="sub-some child-momu">
          <h5>Payment Method</h5>
          <ul>
            <li>
              <img src="main/images/pay2.png" alt />
            </li>
            <li>
              <img src="main/images/pay5.png" alt />
            </li>
            <li>
              <img src="main/images/pay1.png" alt />
            </li>
            <li>
              <img src="main/images/pay4.png" alt />
            </li>
            <li>
              <img src="main/images/pay6.png" alt />
            </li>
            <li>
              <img src="main/images/pay3.png" alt />
            </li>
            <li>
              <img src="main/images/pay7.png" alt />
            </li>
            <li>
              <img src="main/images/pay8.png" alt />
            </li>
            <li>
              <img src="main/images/pay9.png" alt />
            </li>
          </ul>
        </div>
        {/* //payment */}
      </div>
      {/* //footer fourth section (text) */}
    </div>
  </footer>
  {/* //footer */}
  {/* copyright */}
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
