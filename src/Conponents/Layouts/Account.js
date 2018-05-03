import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerAccountRequest,loginRequest,onCheckLogin} from '../../Actions/UserAction';
import {chaneMessage} from '../../Actions/MessageAction';
import * as Message from '../../Constants/Messages';
 class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            fristname:'',
            lastname:'',
            password:'',
            phone:'',
            email_login:'',
            password_login:''
        }
        
    }
    componentDidMount(){
        console.log(this.props)
        this.props.Account
    }
  

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]:value
        });
      }
      
    render() {
        return (
            <React.Fragment>
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
                <div className="main-cn element-page bg-white clearfix">
                    <section className="breakcrumb-sc">
                        <ul className="breadcrumb arrow">
                            <li><a href="index.html"><i className="fa fa-home"></i></a></li>
                            <li>User Reviews</li>
                        </ul>
                        <div className="support ">
                            <h2>{this.props.message}</h2>
                        </div>
                    </section>
                    
                    <section className="user-profile">
                        <div className="user-form user-signup">
                            <div className="row">
                                <div className="col-md-5">
                                    <h2 className="user-profile__title">Sign in</h2>
                                    <p>Access your account information and manage your bookings.</p>
                                    <div className="field-input">
                                        <input onChange={this.onChange} value={this.state.email_login} placeholder="Email * "  name="email_login" type="text" className="input-text" />
                                    </div>
                                    <div className="field-input">
                                        <input onChange={this.onChange} value={this.state.password_login} placeholder="Password * "  name="password_login" type="text" className="input-text" />
                                    </div>
                                    
                                    <div className="field-input">
                                        <button onClick={this.onLogin} className="awe-btn awe-btn-1 awe-btn-medium">Sign in</button>
                                    </div>
                                </div>
                                <div className="col-md-5 col-md-offset-2">
                                    <h2 className="user-profile__title">Sign up</h2>
                                    <p>Sign up now and receive exclusive offers with huge discounts </p>
                                    <div className="field-input">
                                            </div>
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.email} placeholder="Email * "  name="email" type="email" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <input  onChange={this.onChange} value={this.state.fristname} placeholder="Firstname * "  name="fristname"  type="text" className="input-text"  required/>
                                            </div>

                                            <div className="field-input">
                                                <input  onChange={this.onChange} value={this.state.lastname} placeholder="Lastname * "  name="lastname"  type="text" className="input-text"  required/>
                                            </div>
                                          
                                            
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.password} placeholder="Password * "  name="password" type="password" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <input  onChange={this.onChange} value={this.state.phone} placeholder="Phone * "  name="phone"  type="number" className="input-text"  required/>
                                            </div>
                                   
                                    <div className="field-input">
                                        <button onClick={this.onRegister} className="awe-btn awe-btn-1 awe-btn-medium">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }

    onRegister =()=>{
        let account = {
            email:this.state.email,
            fristname:this.state.fristname,
            lastname:this.state.lastname,
            password:this.state.password,
            phone:this.state.phone
        }
        console.log(account);
        
        if(!account.email || !account.fristname || !account.lastname || !account.password || !account.phone){
         
            this.props.onChangeMessage(Message.MESSAGE_REGISTER_FAIL);
        }else{
            this.props.onRegister(account);
            this.props.onChangeMessage(Message.MESSAGE_REGISTER_SUCCESSFULLY);
        }     
    }
    onLogin = ()=>{
        let login = {
            email:this.state.email_login,
            password:this.state.password_login,
        } 
         this.props.onLogin(login,this.props.history);
         this.props.onChangeMessage(Message.MESSAGE_LOGIN_FAIL)
    
        
    }
 
}
    

const mapStateToProps = (state, ownProps) => {
    return {
        message:state.Message,
        Account:state.Account
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRegister:(account)=>{
            dispatch(registerAccountRequest(account));
        },
        onChangeMessage:(message)=>{
            dispatch(chaneMessage(message));
        },
        onLogin:(account,history)=>{
            dispatch(loginRequest(account,history));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);