import React from 'react';
import ReactDOM from 'react-dom';
import ComponentBase from './components/ComponentBase.js';

global.React = React;
global.ReactDOM = ReactDOM;
global.Avatar = ComponentBase.Avatar;
global.CreatedAt = ComponentBase.CreatedAt;
global.LinkPreview = ComponentBase.LinkPreview;
global.ImagePreview = ComponentBase.ImagePreview;
global.DateTimePickerModal = ComponentBase.DateTimePickerModal;
global.Location = ComponentBase.Location;
global.ContentEditable = ComponentBase.ContentEditable;

// window.Moment = require('moment');
//
// window.Avatar = require('./components/avatar.jsx');
// window.CreatedAt = require('./components/created_at.jsx');
// window.ImagePreview = require('./components/image_preview.jsx');
// window.LinkPreview = require('./components/link_preview.jsx');
// window.ContentEditable = require('./components/contenteditable.jsx');
// window.InputFileField = require('./components/input_file_field/input_file_field.jsx');
// window.DateTimePickerModal = require('./components/datetimepickermodal.jsx');
// window.Places = require('./components/places.jsx');
// window.DropzoneUpload = require('./components/dropzone_upload.jsx');
// window.CommentsIndex = require('./components/comments/index.jsx');
//
// window.PostsForm = require('./containers/posts/form.jsx');
//
window.Events = require('./containers/events/index.jsx');
window.EventsForm = require('./containers/events/_form.jsx');
window.EventStatusActions = require('./containers/events/_status_actions.jsx');
window.EventTabs = require('./containers/events/_tabs.jsx');
