var InputFileField = require('../input_file_field/input_file_field.jsx');
var PostsForm = React.createClass({
  getInitialState() {
    return {
      inputText: Utils.stripTags(this.props.postContent),
      linkPreviewHTML: this.props.linkPreviewHTML || ''
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
  render() {
    var imgPreview = '',
        inputFileField = <InputFileField name='post[attachment]'></InputFileField>,
        actionURL = '/posts';
        method = 'post';

    if(this.props.postId) {
      imgPreview = <ImagePreview src={this.props.attachment} className='img-preview-sm' />;
      actionURL = '/posts/' + this.props.postId;
      method = 'put';
      inputFileField = '';
    }

    return (
      <form action={actionURL} method="post" className="form">
        <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
        <input type='hidden' name='_method' value={method} />
        <div className="form-group">
          <ContentEditable placeholder="What's up?" content={this.props.postContent} handleChange={this.handleChange} onPaste={this.onPaste}></ContentEditable>
          <input name='post[content]' type="hidden" value={this.state.inputText}></input>
          <LinkPreview name='post[preview_html]' html={this.state.linkPreviewHTML}  />
        </div>
        <div className="form-group">
          {imgPreview}
        </div>
        <div className="form-group">
          {inputFileField}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            <i className="icon-paper-plane"></i>
            {this.props.postId ? 'Update' : 'Post'}
          </button>
        </div>
      </form>
    );
  }
});

module.exports = PostsForm;
