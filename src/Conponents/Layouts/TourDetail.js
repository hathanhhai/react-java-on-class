import React, { Component } from 'react';
import {fetchTourOneRequest} from '../../Actions/TourAction';
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
       
        nexProps.tour_one.map((item,index)=>{
            this.setState({
                tour_one:item.name
            })
        })
       
      }
    render() {
    

       
        return (
            <React.Fragment>
                <section className="sub-banner">
                    <div className="bg-parallax bg-1"></div>

                    <div className="logo-banner text-center">
                        <a href="" title="">
                            <img   alt="" />
                        </a>
                    </div>
                </section>

                <div className="main main-dt">
                    <div className="container">
                        <div className="main-cn detail-page bg-white clearfix">


                            <section className="breakcrumb-sc">
                                <ul className="breadcrumb arrow">
                                    <li><a href="index.html"><i className="fa fa-home"></i></a></li>
                                    <li><a href="hotel.html" title="">Hotels</a></li>
                                    <li><a href="#" title="">Europe </a></li>
                                    <li>Netherlands</li>
                                </ul>
                                <div className="support float-right">
                                    <small>Got a question?</small> 123-123-1234
                        </div>
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
                                        <img src="images/tour/slide/img-1.jpg" alt="" />

                                    </div>
                                </div>



                            </section>

                            <section className="tour-overview detail-cn" id="tour-overview">
                                <div className="row">



                                    <div className="col-lg-12 tour-overview-cn">


                                        <div className="tour-description mt-bot">
                                        
                                            <h2 className="title-detail">
                                                Mô Tả
                                                <a href="" title="" className="awe-btn awe-btn-1 awe-btn-lager float-right">Đặt Tour</a>
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
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TourDetail);