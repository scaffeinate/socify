import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentActions from './CommentActions';
import Avatar from '../Avatar';
import CreatedAt from '../CreatedAt';

const propTypes = {
  onCommentDelete: PropTypes.func.isRequired,
  shouldRenderActions: PropTypes.boolean.isRequired,
  user: PropTypes.obj.isRequired,
  comment: PropTypes.obj.isRequired
};


class Comment extends Component {
  constructor(props) {
    super(props);
    this.onCommentDelete = this.onCommentDelete.bind(this);
    this.getUserPath = this.getUserPath.bind(this);
  }

  onCommentDelete(event) {
    event.preventDefault();
    this.props.onCommentDelete(event, this.props.comment.id);
  }

  getUserPath() {
    return `/users/${this.props.user.id}/`;
  }

  render() {
    let commentActions = '';
    if (this.props.shouldRenderActions) {
      commentActions = <CommentActions onCommentDelete={this.onCommentDelete} />;
    }
    return (
      <div className="comment">
        <div className="row">
          <div className="comment-user-info">
            <Avatar linkTo={this.getUserPath()} avatar={this.props.user.avatar_url} />
            <h4 className="name">
              <a href={this.getUserPath()}>{this.props.user.name}</a>
            </h4>
          </div>
          <div className="comment-actions">
            {commentActions}
          </div>
        </div>
        <div className="row">
          <div className="comment-content">
            <div className="text" dangerouslySetInnerHTML={{ __html: this.props.comment.comment }} />
          </div>
        </div>
        <div className="row">
          <div className="comment-created-at">
            <CreatedAt isoTime={this.props.comment.created_at} />
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
