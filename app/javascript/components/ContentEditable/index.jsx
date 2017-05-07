import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stripTags from '../../helpers/stripTags';
import './styles.css';

const propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onContentPaste: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  content: PropTypes.string
};

const defaultProps = {
  placeholder: 'Enter text',
  content: ''
};

class ContentEditable extends Component {

  onInputChange(event) {
    const html = event.target.innerHTML;
    const text = stripTags(html);
    this.props.onInputChange(event, text);
  }

  onContentPaste(event) {
    event.preventDefault();
    const pasted = event.clipboardData.getData('text');
    if (pasted) {
      document.execCommand('insertText', false, pasted);
      this.props.onContentPaste(pasted);
    }
  }

  render() {
    return (
      <div>
        <div className="contenteditable">
          <div contentEditable className="editable form-control" onInput={this.onInputChange} onPaste={this.onContentPaste} placeholder={this.props.placeholder} dangerouslySetInnerHTML={{ __html: () => stripTags(this.props.content) }} />
        </div>
      </div>
    );
  }
}

ContentEditable.propTypes = propTypes;
ContentEditable.defaultProps = defaultProps;

export default ContentEditable;
