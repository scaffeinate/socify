import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const propTypes = {
  onCommentDelete: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.onCommentDelete = this.onCommentDelete.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  onCommentDelete(event, id) {
    this.props.onCommentDelete(event, id);
  }

  getComments() {
    const self = this;
    return this.props.data.map(([comment, index]) => (
      <Comment
        key={index}
        comment={comment}
        user={comment.user}
        onCommentDelete={self.onCommentDelete}
        shouldRenderActions={comment.belongs_to_current_user || false}
      />
    ));
  }

  render() {
    return (
      <div>{this.getComments}</div>
    );
  }
}

CommentsList.propTypes = propTypes;

export default CommentsList;
