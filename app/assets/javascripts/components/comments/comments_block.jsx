var CommentsBlock = React.createClass({
  render() {
    return(
      <div className="comments-block">
        <div className="row">
          <CommentsForm url={this.props.newCommentURL} authenticityToken={this.props.authenticity_token}
            userLinkTo={this.props.userLinkTo} userAvatar={this.props.userAvatar} />
        </div>
        <div className="row">
          <div className="comments">
          </div>
        </div>
      </div>
    );
  }
});
