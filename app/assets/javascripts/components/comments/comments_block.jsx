var CommentsBlock = React.createClass({
  getInitialState() {
    return {
      resource: {}
    }
  },
  componentWillMount() {
    this.setState({resource: {
      type: this.props.resource_type,
      id: this.props.resource_id
    }});
  },
  render() {
    return(
      <div className="comments-block">
        <div className="row">
          <CommentsForm url={this.props.newCommentURL} authenticityToken={this.props.authenticity_token}
            userLinkTo={this.props.userLinkTo} userAvatar={this.props.userAvatar} />
        </div>
        <div className="row">
          <div className="comments">
            <Comments resource={this.state.resource} url={this.props.url} />
          </div>
        </div>
      </div>
    );
  }
});
