var Comment = React.createClass({
  onDelete(event) {
    console.log('On delete');
  },
  render() {
    var commentActions = '';
    if(this.props.shouldRenderActions) {
      commentActions = <CommentActions onDelete={this.onDelete}></CommentActions>
    }
    return (
      <div className="comment">
        <div className="row">
          <div className="comment-user-info">
            <Avatar linkTo='#' avatar={this.props.user.avatar_url}></Avatar>
            <h4 className="name">
              <a href='#'>{this.props.user.name}</a>
            </h4>
          </div>
          <div className="comment-actions">
            {commentActions}
          </div>
        </div>
        <div className="row">
          <div className="comment-content">
            <span className="text">{this.props.comment.comment}</span>
          </div>
        </div>
        <div className="row">
          <div className="comment-created-at">
            <CreatedAt isoTime={this.props.comment.created_at}></CreatedAt>
          </div>
        </div>
      </div>
    )
  }
});
