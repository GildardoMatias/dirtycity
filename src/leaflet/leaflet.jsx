import React, { Component } from 'react';
import { TileLayer, Marker, Popup, MapContainer as Map } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './react-leaflet.css';
import { MarkerIcon } from './react-leaflet-icon.js';

const CustomMarker = props => {
    const initMarker = ref => {
        if (ref) {
            ref.leafletElement.openPopup()
        }
    }
    return <Marker ref={initMarker} {...props} />
}

class MapView extends Component {

    /*Función para capturar la latitud y la longitud*/
    handleClick(e) {
        this.setState({ currentLocation: e.latlng });
    }

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: { lat: 38.71, lng: -0.48 },
            zoom: 12,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { currentLocation, zoom } = this.state;
        return (
            <Map center={currentLocation} zoom={zoom} onClick={this.handleClick}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution=<a href="https://osm.org/copyright">OpenStreetMap</a>
                />
                <CustomMarker position={currentLocation} icon={MarkerIcon} >
                    <Popup><pre>{"Latitude: " + currentLocation.lat.toFixed(2) + ", Longitude: " + currentLocation.lng.toFixed(2)}</pre></Popup>
                </CustomMarker>
            </Map >
        );
    }
}

export default MapView;