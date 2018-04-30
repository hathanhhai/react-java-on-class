import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Header from './Conponents/Layouts/Header';
import Silder from './Conponents/Layouts/Silder';
import ListIndex from './Conponents/Layouts/HomeList/HomeList';
import Footer from './Conponents/Layouts/Footer';
import router from './router';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrap">
        {this.showContentMenus(router)}
      </div>
      </Router>
    
      
    );
  }

  showContentMenus = (router) =>{
    var result = null;
    if(router.length > 0) {
      result = router.map((item,index)=>{
        return(
          <Route key={index} path={item.path} exact={item.exact} component={item.main} />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }

}

export default App;
