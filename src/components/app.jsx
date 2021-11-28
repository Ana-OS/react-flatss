import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import flats from '../data/flats';



class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            flats: flats,
            center:{    
            lat: null,
            lng: null
            }
        }
    };

    selectFlat = (lat, lng) =>{
        console.log(lat, lng)
        this.setState({
            center: {
                lat: lat,
                lng: lng
            }
        })
    };

    render() {
        return (
            <>
            <div>
                <FlatList flats={this.state.flats} selectFlat={this.selectFlat}/>
                <div className="map-container">
                    <GoogleMapReact center={this.state.center} defaultZoom={12}>
                        <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
                    </GoogleMapReact>
                </div>
            </div>
            </>
        )
    }

};

export default App;