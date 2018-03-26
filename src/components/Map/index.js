import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { withStyles } from "material-ui";
import constants from "./../../constants";

mapboxgl.accessToken = constants.mapBoxAccessToken;

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 17,
      lat: 65,
      zoom: 4
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });

      console.log(this.state);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div ref={el => (this.mapContainer = el)} className={classes.root} />
    );
  }
}

export default withStyles(styles)(Map);
