var Comments = React.createClass({
  render() {
    var comments = this.props.data.map(function(comment, index) {
      return(
        <Comment key={index} comment={comment} user={comment.user}
          shouldRenderActions={comment.belongs_to_current_user || false} />
      );
    });
    return(
      <div>
        {comments}
      </div>
    );
  }
});
