import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Map, Marker } from 'google-maps-react';

const propTypes = {
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  onLocationSelect: PropTypes.func.isRequired,
  address: PropTypes.string,
  latLng: PropTypes.string
};

const defaultProps = {
  address: '',
  latLng: ''
};

class Location extends Component {

  static parseLatLng(latLng) {
    try {
      return JSON.parse(latLng);
    } catch (e) {
      return {};
    }
  }

  constructor(props) {
    super(props);
    this.parseLatLng = this.parseLatLng.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onLocationSelect = this.onLocationSelect.bind(this);
    this.state = {
      address: props.address || '',
      mapVisible: false,
      containerStyle: {
        position: 'relative',
        marginTop: '20px',
        width: '100%',
        height: '200px'
      },
      center: Location.parseLatLng(props.latLng)
    };
  }

  onLocationChange(address) {
    this.setState({ address });
  }

  onLocationSelect(address) {
    this.onLocationChange(address);
    geocodeByAddress(address, (err, { lat, lng }) => {
      let latLng = {};
      if (!err) {
        latLng = { lat, lng };
        this.setState({ center: latLng });
      }
      this.props.onLocationSelect(address, latLng);
    });
  }

  render() {
    return (
      <div>
        <PlacesAutocomplete
          inputName={this.props.inputName}
          placeholder={this.props.inputPlaceholder}
          value={this.state.address}
          onChange={this.onLocationChange}
          onSelect={this.onLocationSelect} classNames={{ input: 'form-control' }}
        />
        <Map
          containerStyle={this.state.containerStyle}
          center={this.state.center}
          google={window.google}
          map={this.state.map} zoom={14}
        >
          <Marker name={'Place'} position={this.state.center} />
        </Map>
      </div>
    );
  }
}

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default Location;
