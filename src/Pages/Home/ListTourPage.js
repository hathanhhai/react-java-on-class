import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header'
import {Link} from 'react-router-dom'
import TourList from '../../Conponents/Layouts/Tours/TourList';
import TourItem from '../../Conponents/Layouts/Tours/TourItem';
import Footer from '../../Conponents/Layouts/Footer';
import {connect} from 'react-redux'
import {deleteTourRequest} from '../../Actions/TourAction'
class ListTourPage extends Component {
    
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Header></Header>
                
                <TourList history={this.props.history}>
                    {this.showCartItem(this.props.tour)}
                </TourList>
                <Footer></Footer>
            </React.Fragment>
        );
    }
    showCartItem = (tour) =>{
        var result = null;
        if(tour.length >0){
            result = tour.map((item,index)=>{
                return (
                    <TourItem onRemove={this.handleRemove}  key={index} tour={item}></TourItem>
                )
            });
        }else{
            this.props.history.push("/")
        }
        return result;
    }
    handleRemove = (value) =>{
        this.props.onHandleRemove(value)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        tour: state.Tour
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onHandleRemove: (id) =>{
           dispatch(deleteTourRequest(id))
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTourPage);