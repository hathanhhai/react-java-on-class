import React, { Component } from 'react';
import Header from '../../Conponents/Layouts/Header';
import Silder from '../../Conponents/Layouts/Silder';
import HomeList from '../../Conponents/Layouts/HomeList/HomeList';
import Footer from '../../Conponents/Layouts/Footer';
class HomePage  extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Silder></Silder>
                <HomeList></HomeList>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default HomePage;