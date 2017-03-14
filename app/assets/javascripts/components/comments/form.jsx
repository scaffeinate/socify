var CommentsForm = React.createClass({
  render() {
    return (
      <form action={this.props.url} className="form comments-form" onSubmit={this.props.onSubmit}>
        <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
        <div className="form-group">
          <div className="row">
            <div className="comments-form-avatar">
              <Avatar linkTo={this.props.userLinkTo} avatar={this.props.userAvatar}></Avatar>
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
