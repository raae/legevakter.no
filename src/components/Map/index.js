import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { withStyles } from "material-ui";
import constants from "./../../constants";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
});

class Map extends React.Component {
  map = undefined;
  markers = [];
  flyToOptions = {
    center: [17, 65],
    zoom: 4
  };

  componentDidUpdate() {
    this.updateMap();
  }

  componentDidMount() {
    this.initMap();
    this.updateMap();
  }

  initMap() {
    mapboxgl.accessToken = constants.mapBoxAccessToken;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      ...this.flyToOptions
    });

    this.map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false
      })
    );
  }

  updateMap() {
    const { healthServices } = this.props;

    const markerLatLngs = healthServices
      .filter(({ node }) => node.location.lng && node.location.lat)
      .map(({ node }) => [node.location.lng, node.location.lat]);

    this.markers.forEach(marker => {
      marker.remove();
    });

    if (markerLatLngs.length === 0) {
      this.map.flyTo(this.flyToOptions);
      return;
    }

    const newMarkers = markerLatLngs.map(latLng =>
      new mapboxgl.Marker().setLngLat(latLng)
    );

    const bbox = new mapboxgl.LngLatBounds();
    markerLatLngs.forEach(latLng => bbox.extend(latLng));

    this.map.fitBounds(bbox, {
      padding: { top: 50, bottom: 20, left: 50, right: 50 }
    });

    newMarkers.forEach(marker => {
      marker.addTo(this.map);
    });

    this.markers = newMarkers;
  }

  render() {
    const { classes } = this.props;

    return (
      <div ref={el => (this.mapContainer = el)} className={classes.root} />
    );
  }
}

export default withStyles(styles)(Map);
