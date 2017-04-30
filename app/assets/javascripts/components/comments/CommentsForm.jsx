import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import fetch from 'isomorphic-fetch';
import Avatar from '../Avatar';
import ContentEditable from '../ContentEditable';
import LinkPreview from '../LinkPreview';

/* global FormData */

const propTypes = {
  userLinkTo: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  previewName: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  authenticityToken: PropTypes.string.isRequired // TODO: Remove this and use global CSRF-Token
};

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      linkPreviewHTML: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onContentPaste = this.onContentPaste.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const commentText = this.state.inputText;
    if (!commentText) {
      return;
    }

    this.setState({ inputText: '' });
    this.setState({ linkPreviewHTML: '' });
    this.props.onFormSubmit(event, { comment_text: commentText });
  }

  onInputChange(event, inputText) {
    this.setState({ inputText });
  }

  onContentPaste(pastedContent) {
    if (validator.isURL(pastedContent)) {
      const self = this;
      const authenticityToken = this.props.authenticityToken;
      const formData = new FormData();
      formData.append('url', pastedContent);

      fetch('/previews', {
        method: 'GET',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': authenticityToken
        },
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then((data) => {
        const html = data.html.trim();
        if (html && html !== '') {
          self.setState({ linkPreviewHTML: html });
        }
      })
      .catch(e => console.error(e));
    }
  }

  render() {
    return (
      <form className="form comments-form" onSubmit={this.onFormSubmit}>
        <input type="hidden" name="authenticity_token" value={this.props.authenticityToken} />
        <div className="form-group">
          <div className="row">
            <div className="comments-form-avatar">
              <Avatar linkTo={this.props.userLinkTo} avatar={this.props.userAvatar} />
            </div>
            <div className="comments-form-textbox">
              <ContentEditable previewName="comment[preview_html]" placeholder="Enter Comment" onInputChange={this.onInputChange} onContentPaste={this.onContentPaste} />
              <input type="hidden" value={this.state.inputText} />
              <LinkPreview html={this.state.linkPreviewHTML} name={this.props.previewName} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-sm btn-primary-inverted pull-right">
            <i className="icon-comment" /> Comment
          </button>
        </div>
      </form>
    );
  }
}

CommentsForm.propTypes = propTypes;

export default CommentsForm;
