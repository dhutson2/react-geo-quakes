import React, { Component } from "react";
import Earthquake from "./EarthquakeFolder/Earthquake";
import Map from "./EarthquakeFolder/Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      earthquake: [],
      title: []
    };
  }

  getEarthquakes = async () => {
    try {
      const earthquakes = await fetch(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
      );
      const quakesJson = await earthquakes.json();
      return quakesJson;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  componentDidMount() {
    this.getEarthquakes().then(data => {
      this.setState({
        earthquake: data.features,
        title: data.features[0].properties.title,
        title1: data.features[1].properties.title,
        title2: data.features[2].properties.title
      });
      console.log("props!", this.state.title);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Map />
        </div>
        <div className="quakeContainer">
          <Earthquake
            earthquake={this.state.earthquake}
            title={this.state.title}
            title1={this.state.title1}
            title2={this.state.title2}
          />
        </div>
      </div>
    );
  }
}

export default App;
