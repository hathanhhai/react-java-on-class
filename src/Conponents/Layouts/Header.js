import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {logoutUser} from '../../Actions/UserAction';

class Header extends Component {
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
                <a href="cruise-list.html">Quản Lí Tour</a>
              </li>
              <li>
                <a onClick={this.props.onHandleLogout} href="#">Đăng Xuất</a>
              </li>
            </ul>
          </li>
        )
      }else{
        return (
          <li className="menu-parent">
            <a onClick={this.props.onHandleLogout} href="#" title="">
              Đăng Xuất
        </a>
            
          </li>
        )
      }
      

    }
  }


  render() {


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
                      <a href="#" title="">
                        Giỏ Hàng
                      </a>

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
     
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
