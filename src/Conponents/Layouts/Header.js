import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {logoutUser} from '../../Actions/UserAction';

class Header extends Component {

  constructor(props){
    super(props);
    this.state ={
      count:null
    }
  }

  componentWillMount() {
    this.showAccount();
    
  }
 

 
  showAccount = () => {
    if (!localStorage.getItem("login")) {
      return (<li className="menu-parent dropmenu">
        <Link to="/account" >
          Tài Khoản
                       </Link>
      </li>)
    } else {
      if(JSON.parse(localStorage.getItem("login")).isadmin == "1"){
        return (
          <li className="menu-parent">
            <a href="#" title="">
              Quản Lí
        </a>
            <ul className="sub-menu">
              <li>
                <a href="home-cruise.html" title="">
                  Quản Lí Hóa Đơn
            </a>
              </li>
              <li>
                <Link to="/listtour">Quản lí Tour</Link>
               
              </li>
              <li>
              
                <Link to="/addtour">Thêm Tour</Link>
              </li>
              <li onClick={this.props.onHandleLogout}>
                <a  >Đăng Xuất</a>
              </li>
            </ul>
          </li>
        )
      }else{
        return (
          <li onClick={this.props.onHandleLogout} className="menu-parent">
            <a  title="">
              Đăng Xuất
        </a>
            
          </li>
        )
      }
      

    }
  }


  render() {
    var showCountCart = (this.props.cart.length>0) ? `(${this.props.cart.length})` : null;

    return (
      <header id="header" className="header">

        <div className="container">
          <div className="logo float-left">
            <Link to="/">
              <img  src="images/logo-header.png" alt="" />

            </Link>

          </div>
         

          <nav
            className="navigation nav-c nav-desktop"
            id="navigation"
           
          >
            <div className="nav-inner">

              <div className="tb">
                <div className="tb-cell">
                  <ul className="menu-list text-uppercase">
                    <li className="current-menu-parent menu-parent">
                      <a  href="#" title="">
                        Tours
                      </a>

                    </li>

                    <li className="menu-parent">
                      <Link to="/my-cart">  Giỏ Hàng {showCountCart}</Link>
                    </li>
                    {this.showAccount()}

                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);
