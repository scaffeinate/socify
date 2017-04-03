//= require_self
//= require react_ujs

window.React = global.React = require('react');
window.ReactDOM = global.ReactDOM = require('react-dom');

window.Moment = require('moment');

window.Avatar = require('./components/avatar.jsx');
window.PostsForm = require('./components/posts/form.jsx');
window.CommentsBlock = require('./components/comments/comments_block.jsx');
window.CreatedAt = require('./components/created_at.jsx');
window.ImagePreview = require('./components/image_preview.jsx');
window.LinkPreview = require('./components/link_preview.jsx');
window.ContentEditable = require('./components/contenteditable.jsx');
window.EventsForm = require('./components/events/form.jsx');
window.EventStatusActions = require('./components/events/status_actions.jsx');
