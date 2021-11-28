import React, { Component } from 'react';

class Flat extends Component{
    handleClick = () => {
        if(this.props.selectFlat){
            this.props.selectFlat(this.props.lat, this.props.lng)
        }
    }

    render(){
        return(
            <img className="card" src={this.props.imageUrl} alt="" onClick={this.handleClick}/>   
        )
    }
};

export default Flat;
