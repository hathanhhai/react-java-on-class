import React, { Component } from 'react';

export default class CartForm extends Component {
    
    render() {

        return (
            <React.Fragment>
              <h4><span class="package-rating float-right mt-right">Tồng Tiền: <b>{this.props.total}</b> VND</span></h4>
            </React.Fragment>
        );
    }
}