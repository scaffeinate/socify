var Comment = React.createClass({
  render() {
    var commentActions = '';
    if(this.props.shouldRenderActions) {
      commentActions = <CommentActions comment={this.props.comment} user={this.props.user}></CommentActions>
    }
    return (
      <div className="comment">
        <div className="row">
          <div className="comment-user-info">
            <Avatar linkTo={this.props.linkTo} avatar={this.props.avatar}></Avatar>
            <h4 className="name">
              <a href={this.props.linkTo}>{this.props.user.name}</a>
            </h4>
          </div>
          <div className="comment-actions">
            {commentActions}
          </div>
        </div>
        <div className="row">
          <div className="comment-content">
            <span className="text">{this.props.comment.comment_html}</span>
          </div>
        </div>
        <div class="row">
          <div class="comment-created-at">
            <CreatedAt isoTime={this.props.comment.created_at}></CreatedAt>
          </div>
        </div>
      </div>
    )
  }
});
