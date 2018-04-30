import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="container">
          <div className="logo float-left">
            <a href="index.html" title="">
              <img src="images/logo-header.png" alt="" />
            </a>
          </div>
          <div className="bars" id="bars" />

          <nav
            className="navigation nav-c nav-desktop"
            id="navigation"
            data-menu-type="1200"
          >
            <div className="nav-inner">
              <a href="#" className="bars-close" id="bars-close">
                Close
              </a>
              <div className="tb">
                <div className="tb-cell">
                  <ul className="menu-list text-uppercase">
                    <li className="menu-parent">
                      <a href="index.html" title="">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html" title="">
                            Home menu 1
                          </a>
                        </li>
                        <li>
                          <a href="index2.html" title="">
                            Home menu 2
                          </a>
                        </li>
                        <li>
                          <a href="index3.html" title="">
                            Home menu 3
                          </a>
                        </li>
                        <li>
                          <a href="index4.html" title="">
                            Home menu 4
                          </a>
                        </li>
                        <li>
                          <a href="index5.html" title="">
                            Home background slide
                          </a>
                        </li>
                        <li>
                          <a href="index6.html" title="">
                            Home background video
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-parent">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-parent">
                          <a href="#" title="">
                            Blog
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html" title="">
                                Blog
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">Blog Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html" title="">
                            About
                          </a>
                        </li>
                        <li className="menu-parent">
                          <a href="#" title="">
                            User
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="user-booking.html" title="">
                                User Booking
                              </a>
                            </li>
                            <li>
                              <a href="user-profile.html" title="">
                                User Profile
                              </a>
                            </li>
                            <li>
                              <a href="user-setting.html" title="">
                                User Setting
                              </a>
                            </li>
                            <li>
                              <a href="user-review.html" title="">
                                User Review
                              </a>
                            </li>
                            <li>
                              <a href="user-signup.html" title="">
                                User Signup
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" title="">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="payment.html" title="">
                            Payment
                          </a>
                        </li>
                        <li>
                          <a href="element.html" title="">
                            Element
                          </a>
                        </li>
                        <li>
                          <a href="404.html" title="">
                            404
                          </a>
                        </li>
                        <li>
                          <a href="comingsoon.html" title="">
                            Comingsoon
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-parent">
                      <a href="#" title="">
                        Hotel
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-hotel.html" title="">
                            Hotel
                          </a>
                        </li>
                        <li>
                          <a href="hotel-list.html">Hotel List 1</a>
                        </li>
                        <li>
                          <a href="hotel-list-2.html">Hotel List 2</a>
                        </li>
                        <li>
                          <a href="hotel-maps.html">Hotel Map</a>
                        </li>
                        <li>
                          <a href="hotel-detail.html">Hotel Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-parent">
                      <a href="#" title="">
                        Flights
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-flight.html" title="">
                            Flights
                          </a>
                        </li>
                        <li>
                          <a href="flight-list.html">Flight List</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-parent">
                      <a href="#" title="">
                        Car
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-car.html" title="">
                            Car
                          </a>
                        </li>
                        <li>
                          <a href="car-list.html">Cart List</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-parent">
                      <a href="#" title="">
                        Package
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-package.html" title="">
                            Package Deals
                          </a>
                        </li>
                        <li>
                          <a href="package-list.html">Package Deals List</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-parent">
                      <a href="#" title="">
                        Cruises
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-cruise.html" title="">
                            Cruises
                          </a>
                        </li>
                        <li>
                          <a href="cruise-list.html">Cruise List</a>
                        </li>
                        <li>
                          <a href="cruise-detail.html">Cruise Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li className="current-menu-parent menu-parent">
                      <a href="#" title="">
                        Tours
                      </a>
                      <ul className="sub-menu">
                        <li className="current-menu-item">
                          <a href="home-tour.html" title="">
                            Tours
                          </a>
                        </li>
                        <li>
                          <a href="tour-list.html">Tour List</a>
                        </li>
                        <li>
                          <a href="tour-detail.html">Tour Detail</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
