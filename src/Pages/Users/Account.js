import React, { Component } from 'react';
import Account from '../../Conponents/Layouts/Account';
import Header from '../../Conponents/Layouts/Header';
import {connect} from 'react-redux';
import {logoutUser} from '../../Actions/UserAction';

class HomePage  extends Component {
    handleLogout = () =>{
      
    }
    render() {
        
        return (
            <React.Fragment>
                <Header history={ this.props.history} ></Header>
                <Account history={ this.props.history}></Account>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogout:(history)=>{
            dispatch(logoutUser(history))
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);