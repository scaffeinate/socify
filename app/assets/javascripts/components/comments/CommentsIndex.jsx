import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

const propTypes = {
  userSignedIn: PropTypes.boolean, // TODO: Remove this and use global state
  authenticityToken: PropTypes.string.isRequired, // TODO: Remove this and use global CSRF-Token
  userLinkTo: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  commentableType: PropTypes.string.isRequired,
  commentableId: PropTypes.string.isRequired
};

const defaultProps = {
  userSignedIn: false,
  userAvatar: ''
};

class CommentsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getComments = this.getComments.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCommentDelete = this.onCommentDelete.bind(this);
  }

  getComments() {

  }

  onFormSubmit(event, params) {
  }

  onCommentDelete(event, id) {

  }

  componentDidMount() {

  }

  render() {
    return (<div>CommentsIndex</div>);
  }
}

CommentsIndex.propTypes = propTypes;
CommentsIndex.defaultProps = defaultProps;

export default CommentsIndex;
