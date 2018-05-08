import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
 class TourList  extends Component {

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
                   <div className="main-cn package-page bg-white clearfix">
                  
                       <div className="row">
                           <div className="col-md-12">
                               <section className="package-list">
                                   <div className="form-submit col-md-12">
                                   </div>
                                  

                                   <div className="package-list-cn">

                                        {this.props.children}
                                   </div>
                               </section>
                           </div>
                       </div>

                   </div>

               </div>
           </div>
          
            </React.Fragment>
        );
    }
}


export default TourList