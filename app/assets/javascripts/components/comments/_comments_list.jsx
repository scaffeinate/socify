var Comment = require('./_comment.jsx');
var CommentsList = React.createClass({
  onDelete(event, id) {
    this.props.onDelete(event, id);
  },
  render() {
    var _this = this;
    var comments = this.props.data.map(function(comment, index) {
      return(
        <Comment key={index} comment={comment} user={comment.user} onDelete={_this.onDelete}
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

module.exports = CommentsList;
