import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CartItem extends Component {
 
    render() {
        const {id,name,image,schedule,enddate,endpoint,price,startdate,startpoint} = this.props.tour
        
        return ( 
            <React.Fragment>
                   <div className="package-item">
                                                <figure className="package-img">
                                                    <a href="">
                                                        <img  src={`images/tours/${image}`} alt="" />
                                                    </a>
                                                </figure>
                                                <div className="package-text">
                                                    <div className="package-name">
                                                        <Link to={`tour/${id}`}>{name}</Link>
                                                    </div>

                                                    <span className="package-rating">
                                                        Tiền: {price}<ins> VND</ins> 
                                        </span>
                                            <address className="package-address">
                                               
                                                </address>
                                                    <address className="package-address">
                                                        {startdate}/{enddate}
                                                </address>
                                                <span className="price separately">
                                              
                                                 </span>
                                                    <div className="price-box">
                                                        
                                                        <span className="price together">
                                                    
                                                            <ins onClick={()=>this.onRemove(id)}>Xóa</ins><small> </small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                </React.Fragment>
        );
    }
    onRemove = (value) =>{
        this.props.onRemove(value)
    }
}

export default CartItem;