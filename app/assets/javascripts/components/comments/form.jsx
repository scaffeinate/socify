var CommentsForm = React.createClass({
  render() {
    return (
      <form action={this.props.url} method="post" className="form comments-form" data-img-src="true">
        <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <div className="form-group">
          <div className="row">
            <div className="comments-form-avatar">
              <Avatar linkTo={this.props.linkTo} avatar={this.props.avatar}></Avatar>
            </div>
            <div className="comments-form-textbox">
              <ContentEditable name='comment[comment_text]' previewName='comment[preview_html]' placeholder='Enter Comment'></ContentEditable>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-sm btn-primary-inverted pull-right">
            <i className="icon-comment"></i> Comment
          </button>
        </div>
      </form>
    );
  }
});
