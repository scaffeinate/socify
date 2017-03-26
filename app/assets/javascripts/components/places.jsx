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
      if (err) { console.log('Oh no!', err) }
      center = { lat: lat, lng: lng };
      this.setState({center: center});
      this.setState({containerClassName: ''});
    });
  },
  render() {
    return (
      <div>
        <PlacesAutocomplete value={this.state.address} onChange={this.handlePlaceChange} onSelect={this.handlePlaceSelect} classNames={{input:'form-control'}} />
        <div className={this.state.containerClassName}>
          <Map containerStyle={this.state.containerStyle} center={this.state.center} google={window.google} map={this.state.map} zoom={14}>
            <Marker name={'Place'} position={this.state.center} />
          </Map>
        </div>
      </div>
    );
  }
});

module.exports = Places;
