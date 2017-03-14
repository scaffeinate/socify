var Comments = React.createClass({
  getInitialState() {
    return {
      data: []
    }
  },
  loadComments(resource) {
    $.ajax({
      url: this.props.url,
      type: 'get',
      dataType: 'json',
      data: {
        commentable_type: resource.type,
        commentable_id: resource.id
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentWillMount() {
    this.loadComments(this.props.resource);
  },
  render() {
    var comments = this.state.data.map(function(comment, index) {
      return(
        <Comment key={index} comment={comment} user={comment.user} shouldRenderActions={comment.shouldRenderActions || false} />
      );
    });
    return(
      <div>
        {comments}
      </div>
    );
  }
});
