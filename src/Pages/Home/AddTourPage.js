import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header'
import AddTour from '../../Conponents/Layouts/Tours/AddTour';
import Footer from '../../Conponents/Layouts/Footer';
class AddTourPage extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <AddTour history={this.props.history}></AddTour>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default AddTourPage;