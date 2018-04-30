import React, { Component } from 'react';
class Item  extends Component {
    state = {  }
    render() {
        return (
            <div className="col-xs-6 col-md-4 col-lg-3">
            <div className="cruise-deal-item">
              <figure className="cruise-img">
                <a href="tour-detail.html" title="">
                  <img src="images/deal/img-5.jpg" alt="" />
                </a>
              </figure>
              <div className="cruise-text">
                <div className="cruise-name">
                  <a href="tour-detail.html" title="">
                    Amsterdam
                  </a>
                </div>
                <div className="cruise-night">
                  <span>9 nights</span> - 05/12 - 12/14
                </div>
                <hr className="hr" />
                <div className="price-box">
                  <span className="price old-price">
                    Only <del>$269</del>
                  </span>
                  <span className="price special-price">$175</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Item;