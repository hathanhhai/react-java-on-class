import React, { Component } from 'react';

class Footer  extends Component {
    render() {
        return (
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo-foter">
                            <a href="index.html" title=""><img src="images/logo-footer.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-2">
                        <div className="ul-ft">
                            <ul>
                                <li><a href="about.html" title="">About</a></li>
                                <li><a href="blog.html" title="">Blog</a></li>
                                <li><a href="fqa.html" title="">FQA</a></li>
                                <li><a href="careers.html" title="">Carrers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-2">
                        <div className="ul-ft">
                            <ul>
                                <li><a href="contact.html" title="">Contact Us</a></li>
                                <li><a href="#" title="">Privacy Policy</a></li>
                                <li><a href="#" title="">Term of Service</a></li>
                                <li><a href="#" title="">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="currency-lang-bottom dropdown-cn float-left">
                            <div className="dropdown-head">
                                <span className="angle-down"><i className="fa fa-angle-down"></i></span>
                            </div>
                            <div className="dropdown-body">
                                <ul>
                                    <li className="current"><a href="#" title="">English</a></li>
                                    <li><a href="#" title="">Bahasa Melayu</a></li>
                                    <li><a href="#" title="">Català</a></li>
                                    <li><a href="#" title="">Dansk</a></li>
                                    <li><a href="#" title="">Deutsch</a></li>
                                    <li><a href="#" title="">Francais</a></li>
                                    <li><a href="#" title="">Italiano</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="currency-lang-bottom dropdown-cn float-left">
                            <div className="dropdown-head">
                                <span className="angle-down"><i className="fa fa-angle-down"></i></span>
                            </div>
                            <div className="dropdown-body">
                                <ul>
                                    <li className="current"><a href="#" title="">US</a></li>
                                    <li><a href="#" title="">ARS</a></li>
                                    <li><a href="#" title="">ADU</a></li>
                                    <li><a href="#" title="">CAD</a></li>
                                    <li><a href="#" title="">CHF</a></li>
                                    <li><a href="#" title="">CNY</a></li>
                                    <li><a href="#" title="">CZK</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="copyright">
                            © 2009 – 2014 Bookyourtrip™ All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}
export default Footer;