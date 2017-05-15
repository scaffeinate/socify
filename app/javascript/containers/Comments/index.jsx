import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

/* global FormData */

const propTypes = {
  userSignedIn: PropTypes.bool, // TODO: Remove this and use global state
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

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCommentDelete = this.onCommentDelete.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  onFormSubmit(event, params) {
    event.preventDefault();
    if (params) {
      const self = this;
      const authenticityToken = this.props.authenticityToken;
      const formData = new FormData();
      formData.append('commentable_type', this.props.commentableType);
      formData.append('commentable_id', this.props.commentableId);
      fetch('/comments', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': authenticityToken
        },
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then((data) => {
        const comments = self.state.comments.append(data);
        self.setState({ comments });
      })
      .catch(e => console.error(e));
    }
  }

  onCommentDelete(event, commentId) {
    event.preventDefault();
    if (commentId) {
      const self = this;
      const authenticityToken = this.props.authenticityToken;
      fetch(`/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': authenticityToken
        },
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then((data) => {
        const comments = self.state.data.filter(({ comment }) => (comment.id !== data.id));
        self.setState({ comments });
      })
      .catch(e => console.error(e));
    }
  }


  getComments() {
    const self = this;
    const authenticityToken = this.props.authenticityToken;
    const formData = new FormData();
    formData.append('commentable_type', this.props.commentableType);
    formData.append('commentable_id', this.props.commentableId);

    fetch('/comments', {
      method: 'GET',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': authenticityToken
      },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => self.setState({ comments: data }))
    .catch(e => console.error(e));
  }

  render() {
    // TODO: authenticate user and hide/show
    const clsName = (this.props.userSignedIn || this.state.comments.length !== 0) ? 'comments-block' : '';
    return (
      <div className={clsName}>
        <div className="row">
          <CommentsForm
            authenticityToken={this.props.authenticityToken}
            userLinkTo={this.props.userLinkTo}
            userAvatar={this.props.userAvatar}
            onSubmit={this.onFormSubmit}
          />
        </div>
        <div className="row">
          <div className="comments">
            <CommentsList data={this.state.comments} onDelete={this.onCommentDelete} />
          </div>
        </div>
      </div>
    );
  }
}

Comments.propTypes = propTypes;
Comments.defaultProps = defaultProps;

export default Comments;
