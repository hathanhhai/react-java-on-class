import React, { Component } from "react";
import Item from "../HomeList/Item";


class HomeList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="title-wrap">
          <div className="container">
            <div className="travel-title float-left">
              <h2>
                Deals of the week:<span>
                  {" "}
                  Paris, Amsterdam, Saint Petersburg &amp; more
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="cruise-deals-cn clearfix">
          {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomeList;
