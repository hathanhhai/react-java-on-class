import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CartItem extends Component {
    render() {
        const {id,name,image,schedule,enddate,endpoint,price,startdate,startpoint} = this.props.cart.tour
        
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
                                                        Tồng Tiền: <ins>VND</ins> 
                                        </span>
                                            <address className="package-address">
                                                    Số Lượng: 
                                                </address>
                                                    <address className="package-address">
                                                        {startdate}/{enddate}
                                                </address>
                                                <span class="price separately">
                                                <a>Xóa</a>
                                                 </span>
                                                    <div className="price-box">
                                                        <span className="price separately">
                                                           Số Lượng <br />
                                                            <ins>{this.props.quantity}</ins>
                                                        </span>
                                                        <span className="price together">
                                                            Thành Tiền<br />
                                                            <ins>{price * this.props.quantity} </ins><small> VND</small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                </React.Fragment>
        );
    }
}

export default CartItem;