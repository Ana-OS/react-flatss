import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

    displayFlats = () => {
        return this.props.flats.map(flat => <Flat imageUrl={flat.imageUrl} key={flat.price} lat={flat.lat} lng={flat.lng} selectFlat={this.props.selectFlat}/>)
    }

    render(){
        return(
            <div className="flat-list">
                {this.displayFlats()}
            </div>
        )
    }
};

export default FlatList;