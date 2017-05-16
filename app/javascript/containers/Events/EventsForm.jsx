import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import DateTimePickerModal from '../../components/DateTimePickerModal';
import ImagePreview from '../../components/ImagePreview';
import DropzoneUpload from '../../components/DropzoneUpload';
import Location from '../../components/Location';

const propTypes = {
  event: PropTypes.object,
  authenticityToken: PropTypes.string.isRequired
};

const defaultProps = {
  event: {
    name: '',
    when: '',
    location: '',
    latlng: '',
    attachmentId: ''
  }
};

class EventsForm extends Component {
  static onDateTimeInputClick() {
    // TODO: Show DateTimePickerModal here
  }

  static formatDate(moment) {
    if (moment) {
      const m = Moment(moment);
      return m.format('MMMM Do YYYY, h:mm a');
    }
    return '';
  }

  constructor(props) {
    super(props);
    this.onImageUpload = this.onImageUpload.bind(this);
    this.onPlaceSelected = this.onPlaceSelected.bind(this);
    this.onDateSelected = this.onDateSelected.bind(this);
    this.state = {
      event: this.props.event
    };
  }

  onImageUpload(attachment) {
    const event = this.state.event;
    event.attachmentId = attachment.id;
    this.setState({ event });
  }

  onPlaceSelected(address, latLng) {
    const event = this.state.event;
    event.latlng = JSON.stringify(latLng);
    this.setState({ event });
  }

  onDateSelected(moment) {
    // TODO: Hide Modal here
    const event = this.state.event;
    event.when = moment;
    this.setState({ event });
  }

  render() {
    let attachment = '';
    const actionURL = this.props.event ? (`/events/${this.state.event.id}`) : '/events';
    const method = this.props.event ? 'put' : 'post';
    if (this.props.event.attachment) {
      attachment = <ImagePreview src={this.props.event.attachment} className="img-fit" />;
    } else {
      attachment = <div className="form-group"><DropzoneUpload multiple={false} onImageUploaded={this.handleImageUpload} authenticityToken={this.props.authenticityToken} /><input type="hidden" name="attachment_id" value={this.state.event.attachmentId} /></div>;
    }
    return (
      <div>
        <form action={actionURL} method="post" className="form">
          <input type="hidden" name="authenticity_token" value={this.props.authenticityToken} />
          <input type="hidden" name="_method" value={method} />
          <div className="form-group">
            {attachment}
          </div>
          <div className="form-group">
            <label htmlFor="event[name]">Event Name</label>
            <input type="text" placeholder="What&apos;s it called?" name="event[name]" className="form-control" defaultValue={this.state.event.name} onChange={() => {}} autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="event[when]">Date & Time</label>
            <input type="text" placeholder="When is it?" name="event[when]" value={this.formatDate(this.state.event.when)} className="form-control" onClick={this.handleClick} onChange={() => {}} />
          </div>
          <div className="form-group">
            <label htmlFor="event[location]">Location</label>
            <Location inputName="event[location]" address={this.state.event.location} latLng={this.state.event.latlng} inputPlaceholder="Where is it?" onPlaceSelected={this.handlePlaceSelected} />
            <input type="hidden" name="event[latlng]" value={this.state.event.latlng} />
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">{this.props.event ? 'Update' : 'Create'}</button>
          </div>
        </form>
        <DateTimePickerModal onDateSelected={this.handleDateSelected} />
      </div>
    );
  }
}

EventsForm.propTypes = propTypes;
EventsForm.defaultProps = defaultProps;

export default EventsForm;
