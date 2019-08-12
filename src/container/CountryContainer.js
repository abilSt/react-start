import React, {Component} from 'react';
import Country from '../component/Country';
// import Modal from '../component/Modal'
import './CountryContainer.css';
// import Modal from '../component/Modal';

class CountryContainer extends Component{
    state = {
        data:[],
    }
 deleteCountry =(index) =>{
     let data = this.state.data;
     data.splice(index,1);
     this.setState(data)
 }

 componentWillMount = async() =>{
     try{
     let response = await fetch('https://restcountries.eu/rest/v2/all');
     let result = await response.json();
     this.setState({data:result}) ;
     } catch (err){
         console.error(err);
     }
 };

    render(){
        return(
            <ul className = 'country-list'>
                {this.state.data.map((item,index) => {
                    return(
                <Country 
                deleteSmth = {()=>this.deleteCountry(index)}
                data = {item}
                />
               );
            })}

            </ul>
        )
    }
}

export default CountryContainer;