var CommentsForm = React.createClass({
  getInitialState() {
    return {
      inputText: '',
      linkPreviewHTML: ''
    }
  },
  handleChange(event, inputText) {
    this.setState({inputText: inputText});
  },
  onPaste(pastedContent) {
    var _this = this;
    Utils.fetchPreview(pastedContent, function(html) {
      _this.setState({linkPreviewHTML: html});
    });
  },
  handleSubmit(event) {
    event.preventDefault();
    var commentText = this.state.inputText;
    if(!commentText) {
      return;
    }

    this.setState({inputText: ''});
    this.setState({linkPreviewHTML: ''});
    this.props.onSubmit(event, { comment_text: commentText });
  },
  render() {
    return (
      <form className="form comments-form" onSubmit={this.handleSubmit}>
        <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
        <div className="form-group">
          <div className="row">
            <div className="comments-form-avatar">
              <Avatar linkTo={this.props.userLinkTo} avatar={this.props.userAvatar}></Avatar>
            </div>
            <div className="comments-form-textbox">
              <ContentEditable previewName='comment[preview_html]' placeholder='Enter Comment' handleChange={this.handleChange} onPaste={this.onPaste} content={this.state.inputText}></ContentEditable>
              <input type="hidden" value={this.state.inputText}></input>
              <LinkPreview html={this.state.linkPreviewHTML} name={this.props.previewName} />
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

module.exports = CommentsForm;
