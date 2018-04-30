import React, { Component } from "react";

class Header extends Component {
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
                          <button type="submit" className="awe-btn awe-btn-medium awe-search">Search</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </section>
    );
  }
}

export default Header;
