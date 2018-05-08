import React, { Component } from 'react';
import {fetchTourOneRequest} from '../../Actions/TourAction';
import {addToCart} from '../../Actions/CartAction';
import {connect} from 'react-redux';

class TourDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            tour_one:''
        }
    }
    componentWillMount() {
        var { match } = this.props;
        if (match) {
            this.props.onFetchOne(match.params.id);
              
        }
    }
    componentWillReceiveProps(nexProps){
        this.setState(nexProps.tour_one[0]);
      }
    render() {
    

       
        return (
            <React.Fragment>
              
                <section className="sub-banner">
                    <div className="bg-parallax bg-1"></div>

                    <div className="logo-banner text-center">
                        <a href="" title="">
                            <img    alt="" />
                        </a>
                    </div>
                </section>

                <div className="main main-dt">
                    <div className="container">
                        <div className="main-cn detail-page bg-white clearfix">


                            <section className="breakcrumb-sc">
                               
                            
                            </section>

                            <section className="head-detail">
                                <div className="head-dt-cn">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <h1>{this.state.name}</h1>
                                        </div>
                                        <div className="col-sm-5 text-right">
                                            <p className="price-book">
                                                Từ ngày: {this.state.startdate}01/1995 Đến ngày: {this.state.startdate}<span> {this.state.price} VND</span> 
                                      
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
               
                            <section className="detail-slider">
                      
                        <div className="slide-room-lg">
                            
                      
                         <div id="slide-room-lg">
                                <img with="1000" height="400" src={window.location.origin + `/images/tours/${this.state.image}`} alt=""/>
                            </div>

                         
                        </div>
                   
                    
                    </section>


                            <section className="tour-overview detail-cn" id="tour-overview">
                                <div className="row">



                                    <div className="col-lg-12 tour-overview-cn">


                                        <div className="tour-description mt-bot">
                                        
                                            <h2 className="title-detail">
                                                Mô Tả
                                                <a  onClick={this.onAddToCart}  title="" className="awe-btn awe-btn-1 awe-btn-lager float-right">Đặt Tour</a>
                                    </h2>
                                    
                                            <div className="tour-detail-text">
                                          
                                               {this.state.description}      
                  
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
    onAddToCart = () =>{
        this.props.onAddToCart(this.state,1);
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       tour_one:state.TourOne
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchOne:(id)=>{
            dispatch(fetchTourOneRequest(id))
        },
        onAddToCart : (tour,quantity) =>{
            dispatch(addToCart(tour,1))
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TourDetail);