import React, {Component} from 'react';
// import Modal from './Modal.css';

export default class Country extends Component {
    state = {
        modalwindow: false
    }
    modalShow = () => {
        const md = {modalwindow: !this.state.modalwindow}
        this.setState(md)
    }
    
    render(){
        if(this.state.modalwindow) {
            return(
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={this.modalShow} className="close">&times;</span>
                        <img className="imgFlag" alt="Flag" src={this.props.data.flag}></img>
                        <div className="countryData">
                            <div><strong>Region:</strong> {this.props.data.region}</div>
                            <div><strong>Subregion:</strong> {this.props.data.subregion}</div>
                            <div><strong>Language:</strong> {this.props.data.languages[0].name}</div>
                            <div><strong>Time Zone:</strong> {this.props.data.timezones} </div>
                            <div><strong>Calling Code:</strong> {this.props.data.callingCodes}</div>
                        </div>
                    </div>
                </div>
            );
        }
    return (

        <li>Country name: {this.props.data.name}, 
        <img alt={this.props.data.name} src = {this.props.data.flag}></img> Capital: {this.props.data.capital}
        <button onClick = {this.props.deleteSmth}>Delete</button>
        <button  onClick = {() => this.modalShow()}>Show Info</button>
        </li>
    );
}
}
