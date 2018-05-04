import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header'
import CartList from '../../Conponents/Layouts/Cart/CartList';
import Footer from '../../Conponents/Layouts/Footer';
import Account from '../Users/Account';
import CartItem from '../../Conponents/Layouts/Cart/CartItem';
import {connect} from 'react-redux'
class CartPage extends Component {

    constructor(props){
        super(props);
      
    }

    
    render() {
        this.props.history.goForward();
        return (
            <React.Fragment>
                <Header></Header>
                <CartList>
                        {this.showCartItem(this.props.cart)}
                </CartList>

                <Footer></Footer>
            </React.Fragment>
        );
    }
    showCartItem = (cart) =>{
        var result = null;
        if(cart.length >0){
            result = cart.map((item,index)=>{
                return (
                    <CartItem quantity={item.quantity} key={index} cart={item}></CartItem>
                )
            });
        }else{
            alert('Bạn chưa có sản phẩm vào trong giỏ hàng')
            this.props.history.goBack();
        }
        return result;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      cart:state.Cart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);