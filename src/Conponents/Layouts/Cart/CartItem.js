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
                                                        Tồng Tiền: <ins>{price * this.props.quantity} VND</ins> 
                                        </span>
                                            <address className="package-address">
                                                    Số Lượng: {this.props.quantity}
                                                </address>
                                                    <address className="package-address">
                                                        {startdate}/{enddate}
                                                </address>
                                                <span class="price separately">
                                                <a>Xóa</a>
                                                 </span>
                                                    <div className="price-box">
                                                        <span className="price separately">
                                                            Booked separately <br />
                                                            <ins>$4250</ins>
                                                        </span>
                                                        <span className="price together">
                                                            Booked together<br />
                                                            <ins>$1,757</ins><small>/night</small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                </React.Fragment>
        );
    }
}

export default CartItem;