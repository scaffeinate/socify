var CommentsBlock = React.createClass({
  getInitialState() {
    return {
      data: []
    }
  },
  loadComments() {
    $.ajax({
      url: this.props.url,
      type: 'get',
      dataType: 'json',
      data: {
        commentable_type: this.props.resource_type,
        commentable_id: this.props.resource_id,
        limit: 3
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onSubmit(event) {
    event.preventDefault();
    console.log(event);
  },
  componentDidMount() {
    this.loadComments();
  },
  render() {
    return(
      <div className="comments-block">
        <div className="row">
          <CommentsForm url={this.props.newCommentURL} authenticityToken={this.props.authenticity_token}
            userLinkTo={this.props.userLinkTo} userAvatar={this.props.userAvatar} onSubmit={this.onSubmit} />
        </div>
        <div className="row">
          <div className="comments">
            <Comments data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
});
