import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        return (
          <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={this.toggleShow} className="close">&times;</span>
            {/* <img className="imgFlag" src={this.props.data.flag}></img> */}
            <div className="countryData">
              <div><strong>Region:</strong> {this.props.data.region}</div>
              <div><strong>Subregion:</strong> {this.props.data.subregion}</div>
              <div><strong>Language:</strong> {this.props.data.languages[0].name}</div>
              <div><strong>Language Native Name:</strong> {this.props.data.languages[0].nativeName} </div>
              <div><strong>Time Zone:</strong> {this.props.data.timezones} </div>
              <div><strong>Calling Code:</strong> {this.props.data.callingCodes}</div>
              <div><strong>Top Level Domain:</strong> {this.props.data.topLevelDomain}</div>
            </div>
          </div>
        </div>
        );
    }
} 