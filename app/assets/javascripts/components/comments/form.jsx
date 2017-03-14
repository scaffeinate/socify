var CommentsForm = React.createClass({
  getInitialState() {
    return {
      inputText: ''
    }
  },
  handleChange(event, inputText) {
    this.setState({inputText: inputText});
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  render() {
    return (
      <form action={this.props.url} className="form comments-form" onSubmit={this.handleSubmit}>
        <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
        <div className="form-group">
          <div className="row">
            <div className="comments-form-avatar">
              <Avatar linkTo={this.props.userLinkTo} avatar={this.props.userAvatar}></Avatar>
            </div>
            <div className="comments-form-textbox">
              <ContentEditable previewName='comment[preview_html]' placeholder='Enter Comment' handleChange={this.handleChange}></ContentEditable>
              <input type="hidden" name='comment[comment_text]' value={this.state.inputText}></input>
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
