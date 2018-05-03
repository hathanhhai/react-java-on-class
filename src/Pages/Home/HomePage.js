import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header';
import Silder from '../../Conponents/Layouts/Silder';
import HomeList from '../../Conponents/Layouts/HomeList/HomeList';
import Footer from '../../Conponents/Layouts/Footer';
import {connect} from 'react-redux';
import {logoutUser} from '../../Actions/UserAction';
import {chaneMessage} from '../../Actions/MessageAction';
import * as Messages from '../../Constants/Messages';
import {fetchTourRequest} from '.././../Actions/TourAction';
import Item from '../../Conponents/Layouts/HomeList/Item';

class HomePage  extends Component {
    onHandleLogout = () =>{
        this.props.onLogout(this.props.history);
        this.props.onChangeMessage(Messages.MESSAGE_LOGOUT)
    }
    componentWillMount(){
        this.props.onFetchTour();
      
    }

    render() {
  
        return (
            <React.Fragment>
                <Header onHandleLogout={this.onHandleLogout}></Header>
                <Silder></Silder>
                <HomeList >
                    {this.showTour(this.props.tour)}
                </HomeList>
                <Footer></Footer>
            </React.Fragment>
        );
    }
    showTour = (tour) =>{
        var result = null;
        if(tour.length >0){
            result = tour.map((item,index)=>{
                 return (
                    <Item history={this.props.history} key={index} tour={item}></Item>
                 )   
            });
        }
        return result;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       tour:state.Tour
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogout:(history)=>{
            dispatch(logoutUser(history))
          },
          onChangeMessage:(message)=>{
              dispatch(chaneMessage(message));
          },
          onFetchTour:()=>{
                dispatch(fetchTourRequest());
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);