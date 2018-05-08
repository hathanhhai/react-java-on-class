import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header'
import CartList from '../../Conponents/Layouts/Cart/CartList';
import Footer from '../../Conponents/Layouts/Footer';
import Account from '../Users/Account';
import CartItem from '../../Conponents/Layouts/Cart/CartItem';
import {connect} from 'react-redux'
import CartTotal from '../../Conponents/Layouts/Cart/CartTotal'
import {removeItemCart} from '../../Actions/CartAction'
class CartPage extends Component {

    constructor(props){
        super(props);
      
    }

    
    render() {
        this.props.history.goForward();
        return (
            <React.Fragment>
                <Header></Header>
                <CartList history={this.props.history} totalCart={this.totalCart(this.props.cart)}>
                        {this.showCartItem(this.props.cart)}
                        {this.totalCart(this.props.cart)}

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
                    <CartItem  onRemoveCart={this.handleRemoveCart} quantity={item.quantity} key={index} cart={item}></CartItem>
                )
            });
        }else{
            alert('Bạn chưa có sản phẩm vào trong giỏ hàng')
            this.props.history.goBack();
        }
        return result;
    }

    totalCart(cart){
        var total = 0;
        if(cart.length > 0 ){
            for(var i=0;i<cart.length ; i++){
                total +=cart[i].tour.price * cart[i].quantity;
            }
            return <CartTotal total={total} />
        }
        return null;
    }
    handleRemoveCart = (value) =>{
        this.props.removeItemCart(value)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      cart:state.Cart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItemCart:(cart)=>{
            dispatch(removeItemCart(cart))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);