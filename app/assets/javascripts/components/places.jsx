var ReactPlacesAutocomplete = require('react-places-autocomplete');
var Map = require('google-maps-react').default;
var Marker = require('google-maps-react').Marker;
var PlacesAutocomplete = ReactPlacesAutocomplete.default;
var GeocodeByAddress = ReactPlacesAutocomplete.geocodeByAddress;
var Places = React.createClass({
  getInitialState() {
    return {
      address: '',
      mapVisible: false,
      containerStyle: {
        position: 'relative',
        marginTop: '20px',
        width: '100%',
        height: '200px'
      },
      center: {}
    }
  },
  handlePlaceChange(address) {
    this.setState({address: address});
  },
  handlePlaceSelect(address, placeId) {
    this.handlePlaceChange(address);
    GeocodeByAddress(address,  (err, { lat, lng }) => {
      var latLng = {};
      if (!err) {
        latLng = { lat: lat, lng: lng };
        this.setState({center: latLng});
      }
      this.props.onPlaceSelected(address, latLng);
    });
  },
  render() {
    return (
      <div>
        <PlacesAutocomplete inputName={this.props.inputName} value={this.state.address} onChange={this.handlePlaceChange} onSelect={this.handlePlaceSelect} classNames={{input:'form-control'}} />
        <Map containerStyle={this.state.containerStyle} center={this.state.center} google={window.google} map={this.state.map} zoom={14}>
          <Marker name={'Place'} position={this.state.center} />
        </Map>
      </div>
    );
  }
});

module.exports = Places;
