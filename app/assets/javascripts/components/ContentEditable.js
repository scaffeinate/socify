import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onContentPaste: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  content: PropTypes.string
};

class ContentEditable extends Component {
  onInputChange(event) {
    let html = event.target.innerHTML;
    let text = Utils.stripTags(html);
    this.props.onInputChange(event, text);
  },
  onContentPaste(event) {
    event.preventDefault();
    let pasted = event.clipboardData.getData('text');
    if (pasted) {
      document.execCommand('insertText', false, pasted);
      this.props.onContentPaste(pasted);
    }
  },
  render() {
    return (
      <div>
        <div className="contenteditable">
          <div contentEditable className="editable form-control input-mentionable" onInput={this.onInputChange} onPaste={this.onContentPaste} placeholder={this.props.placeholder} dangerouslySetInnerHTML={{
            __html: () => Utils.stripTags(this.props.content)
          }}></div>
        </div>
      </div>
    );
  }
}

ContentEditable.propTypes = propTypes;

export default ContentEditable;
