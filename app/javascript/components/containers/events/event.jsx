var Event = React.createClass({
  render() {
    var event = this.props.event;
    var user = event.user;
    var user_path = '/users/' + user.id;
    <div className="event">
      <div className="row">
        <div className="event-user-info">
          <Avatar linkTo={user_path} avatar={user.avatar} />
          <h4 className="name">
            <a href={user_path}>{user.name}</a>
          </h4>
        </div>
        <div className="actions">
          <Actions isEditable={this.props.isEditable} event={event} />
        </div>
        <div className="row">
          <div className="event-created-at">
            <CreatedAt isoTime={event.created_at} format={0} />
          </div>
        </div>
        <div className="row">
          <div className="event-content">
            <ImagePreview src={event.attachment.file_name.url} clsName={'img-fit'} />
            <div className="event-details">
              <span className="text">{event.name}</span>
              <div className="calendar">
                <i className="icon-calendar-empty"></i> <CreatedAt isoTime={event.when} format={1} />
              </div>
              <div className="location">
                <i className="icon-location-1"></i>{(event.location) || 'Unknown'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
});

module.exports = Event;
