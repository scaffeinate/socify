var PostsForm = React.createClass({
  getInitialState() {
    return {

    }
  },
  render() {
    var imgPreview = '';
    if(this.props.edit) {
      imgPreview = <ImagePreview src={this.props.post.attachment.url}></ImagePreview>;
    }
    return (
      <form action={this.props.url} method="post" className="form">
        <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <div className="form-group">
          <ContentEditable name='post[content]' previewName='post[preview_html]' placeholder="What's up?" content= {this.props.post.content} linkPreviewHTML={this.props.post.preview_html}></ContentEditable>
        </div>
        <div className="form-group">
          {imgPreview}
        </div>
        <div className="form-group">
          <InputFileField name='post[attachment]'></InputFileField>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            <i className="icon-paper-plane"></i>
            {this.props.edit ? 'Update' : 'Post'}
          </button>
        </div>
      </form>
    );
  }
});
