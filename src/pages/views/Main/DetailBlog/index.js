import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'

const DetailBlog = ({post}) => {
    let { id }  = useParams();
    const posts = post.find(posts =>posts.id == id);
    return (
        <div className="container">
            {/* tittle heading */}
            <h3 className="tittle-w3l">Chi tiết bài viết
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
          <li data-thumb={posts.image}>
            <div className="thumb-image">
              <img src={posts.image}  className="img-responsive" alt /> </div>
          </li>
        </ul>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  <div className="col-md-7 single-right-left simpleCart_shelfItem">
    <h3>{posts.title}</h3>
   
    <div className="single-infoagile">
      <ul>
        <li>
          {posts.content}
        </li>
        
      </ul>
      
    </div>
    
    
  </div>

  <div className="clearfix"> </div>
</div>

    )
}

DetailBlog.propTypes = {

}

export default DetailBlog
