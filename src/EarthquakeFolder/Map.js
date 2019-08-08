import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./map.css";

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlace: { lat: 121.9473, lng: 24.475 }
    };
  }
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 30.2682,
          lng: -97.74295
        }}
        zoom={5}
      >
        <Marker
          name={"Indonesia"}
          position={{ lat: -6.93405, lng: 107.72225 }}
        />

        <Marker
          class="markerIcon"
          name={"Your position"}
          position={{ lat: 37.7344, lng: 141.5361 }}
          icon={{
            url: "../images/earthquake.png"
          }}
        />

        <Marker name={"Taiwan"} position={{ lat: 24.475, lng: 121.9473 }} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer);
