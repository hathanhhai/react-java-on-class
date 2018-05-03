import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
class Item  extends Component {
   
    render() {
    
      const {id,name,image,schedule,enddate,endpoint,price,startdate,startpoint} = this.props.tour
 
        return (

 
            <div onClick={this.onRedirect}  className="col-xs-6 col-md-4 col-lg-3">
            <div className="cruise-deal-item">
              <figure className="cruise-img">
              <Link to={`/tour/${id}`}>
                  <img src={`images/tours/${image}`} alt="" />
               </Link>
              </figure>
              <div className="cruise-text">
                <div className="cruise-name">
                  <a href="#" title="">
                    {name}
                  </a>
                </div>
                <div className="cruise-night">
                 Khởi Hành <span>{startdate}</span> - {enddate}
                </div>
             
                <div className="price-box">
                  <span className="price old-price">
                   Lich Trình: {startpoint} - {endpoint}
                  </span>
                  <span className="price special-price">{price} VND</span>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Item;