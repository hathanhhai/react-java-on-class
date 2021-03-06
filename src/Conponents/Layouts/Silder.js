import React, { Component } from "react";
import axios from 'axios';
import curl from 'curl';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={

            file:''
        }
    }
    onChange=(e)=> {
        this.setState({file:e.target.files[0]})
      }
  render() {
    return (
      <section className="banner">
     
      <div className="bg-parallax bg-1"></div>
      <div className="container">
          <div className="banner-cn">
              <div className="logo-banner text-center">
                  <a href="" title="">
                      <img src="images/logo-banner.png" alt=""/>
                  </a>
              </div>
              <div className="category-singer clearfix">
                  <div className="cate-singer-icon float-left">
                      <h2>Tour</h2>
                      <img src="images/icon-vacation.png" alt=""/>
                  </div>
                  <p>Over <span>150,000</span> tour your choice</p>
              </div>
              <div className="form-cn form-tour">
                  <h2>Where would you like to go?</h2>
                  <div className="form-search clearfix">
                      <div className="form-field field-select field-region">
                          <div className="select">
                              <span>Region: <small>Wourldwide, africa..</small></span>
                              <select>
                                  <option>Africa</option>
                                  <option>Viet Nam</option>
                              </select>
                          </div>
                      </div>
                      <div className="form-field field-select field-country">
                          <div className="select">
                              <span>Country</span>
                              <select>
                                  <option>Country</option>
                                  <option>Viet Nam</option>
                                  <option>Thai Lan</option>
                              </select>
                          </div>
                      </div>
                      <div className="form-field field-select field-style">
                          <div className="select">
                              <span>Tour Style</span>
                              <select>
                                  <option>Style One</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                              </select>
                          </div>
                      </div>
                      <div className="form-submit">
                      <input type="file" onChange={this.onChange} />
                          <button onClick={this.onTest} type="submit" className="awe-btn awe-btn-medium awe-search">Search</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </section>
    );
  }
  onTest = (e) =>{
      e.preventDefault();
    //    axios({
    //        url:'http://localhost:8081/form/hello',
    //        method:'get',
    //    }).then(res=>{
    //        console.log(res);
    //    })
    // var bodyFormData = new FormData();
    // bodyFormData.set('file',this.state.file)
    // bodyFormData.set('id', 'Fred');
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8081/form/hello',
    //         data: bodyFormData,
    //         config: { headers: {'Content-Type': 'multipart/form-data' }}
    //     });
       

        axios({
            method: 'delete',
            url: 'http://localhost:8081/form/hello/5',

        }).then(res=>{
            console.log(res)
        })
    
       
                
  }

}

export default Header;
