import React, { Component } from 'react';
import CartForm from '../Cart/CartForm';

class CartList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowForm:false
        }
    }
    onShowForm = ()=>{
        this.setState({isShowForm:!this.state.isShowForm})
    }
    
    render() {
       var showform = (this.state.isShowForm) ? <CartForm/>  :null;
       var changText = (!this.state.isShowForm) ? 'Nhập Thông Tin' : 'Ẩn'
        return (
            <React.Fragment>
                 {this.showform}
                    <section className="sub-banner">
       
            <div className="bg-parallax bg-1"></div>
         
            <div className="logo-banner text-center">
                <a href="" title="">
                    <img src="images/logo-banner.png" alt=""/>
                </a>
            </div>
           
        </section>
                <div className="main">
                    <div className="container">
                        <div className="main-cn package-page bg-white clearfix">
                            <div className="row">
                                <div className="col-md-12">
                                    <section className="package-list">
                                        <div className="form-submit col-md-12">
                                            <button onClick={this.onShowForm} className="awe-btn awe-btn-1 awe-btn-lager float-right">{changText}</button>
                                     
                                        </div>
                                       
                                        {showform}
                                        <div className="package-list-cn">

                                            {this.props.children}
                                        </div>
                                    </section>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                </React.Fragment>
        );
    }
}

export default CartList;