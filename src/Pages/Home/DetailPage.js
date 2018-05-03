import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header'
import TourDetail from '../../Conponents/Layouts/TourDetail';
import Footer from '../../Conponents/Layouts/Footer';
class DetailPage extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <TourDetail history={this.props.history} match={this.props.match}></TourDetail>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default DetailPage;