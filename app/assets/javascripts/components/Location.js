import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete'
import {Map, Marker} from 'google-maps-react'

class Location extends Component {
  constructor(props) {
    super(props)
    let _this = this
    this._parseLatLng = (latLng) => this.parseLatLng(latLng)
    this._handlePlaceChange = (address) => this.handlePlaceChange(address)
    this._handlePlaceSelect = (address, placeId) => this.handlePlaceSelect(address, placeId)
    this.state = {
      address: props.address || '',
      mapVisible: false,
      containerStyle: {
        position: 'relative',
        marginTop: '20px',
        width: '100%',
        height: '200px'
      },
      center: _this._parseLatLng(props.latLng)
    }
  }

  static propTypes = {
    inputName: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    onPlaceSelected: PropTypes.func.isRequired,
    address: PropTypes.string,
    latLng: PropTypes.string
  }

  parseLatLng(latLng) {
    try {
      return JSON.parse(latLng)
    } catch (e) {
      return {}
    }
  }

  handlePlaceChange(address) {
    this.setState({address: address})
  }

  handlePlaceSelect(address, placeId) {
    this.handlePlaceChange(address)
    geocodeByAddress(address, (err, {lat, lng}) => {
      var latLng = {};
      if (!err) {
        latLng = {
          lat: lat,
          lng: lng
        };
        this.setState({center: latLng})
      }
      this.props.onPlaceSelected(address, latLng)
    })
  }

  render() {
    return (
      <div>
        <PlacesAutocomplete inputName={this.props.inputName} placeholder={this.props.inputPlaceholder} value={this.state.address} onChange={this._handlePlaceChange} onSelect={this._handlePlaceSelect} classNames={{
          input: 'form-control'
        }}/>
        <Map containerStyle={this.state.containerStyle} center={this.state.center} google={window.google} map={this.state.map} zoom={14}>
          <Marker name={'Place'} position={this.state.center}/>
        </Map>
      </div>
    )
  }
}

export default Location
