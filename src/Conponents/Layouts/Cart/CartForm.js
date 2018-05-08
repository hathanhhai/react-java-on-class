import React, { Component } from 'react';
import {connect} from 'react-redux';
import {saveCartRequest} from '../../../Actions/CartAction'
import * as Types from '../../../Constants/ActionType'
 class CartForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            address:'',
            totalprice:'',
            userid:''
        }
    }
    
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]:value
        });
        if(localStorage.getItem("login")){
            this.setState({totalprice:this.props.total,userid:JSON.parse(localStorage.getItem("login")).id})
        }
      }
      
    
    onSubmitCart = (e) =>{
        e.preventDefault();
       this.props.onSubmit(this.state);
       alert('Đặt hàng thành công !!!');
       localStorage.removeItem("Cart");
       this.props.history.go("/")
     
    }
    render() {
        return (
            <React.Fragment>
                <div className="user-form user-signup">
                            <div className="row">
                                <div className="col-md-5 col-md-offset-2">
                                    <h2 className="user-profile__title">Thông Tin Đặt Hàng</h2>
                                    <b>Vui lòng điền đầy đủ thông tin đặt hàng </b>
                                    <form onSubmit={this.onSubmitCart}  >
                                    <input required type="hidden" value={this.state.userid} onChange={this.onChange} name="userid" />
                                    <div className="field-input">
                                                <input value={this.state.address} onChange={this.onChange} name="address" type="text" className="input-text" placeholder="Address *" />
                                            </div>
                                            <div className="field-input">
                                                <input value={this.state.phone} onChange={this.onChange} name="phone" type="text" className="input-text"  placeholder="Phone *"/>
                                            </div>
                                           
                                    <div className="field-input">
                                        <button type="submit" className="awe-btn awe-btn-1 awe-btn-medium">Gửi</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
             </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (cart) => {
            dispatch(saveCartRequest(cart))
        }
    }
}
export default connect(null,mapDispatchToProps)(CartForm);