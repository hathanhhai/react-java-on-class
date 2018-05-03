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
                  
                </div>
            </div>
        </footer>
        );
    }
}
export default Footer;