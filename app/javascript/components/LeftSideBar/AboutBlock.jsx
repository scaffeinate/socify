import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import CreatedAt from '../CreatedAt';
import ListGroupWithIcon from '../ListGroupWithIcon';

const propTypes = {
  user: PropTypes.object.isRequired
};

const getListItems = user => (
  [
    { icon: 'icon-back-in-time',
      afterIconText: 'Joined',
      key: 0,
      value: (user.created_at ? <CreatedAt isoTime={user.created_at} format={2} /> : null)
    },
    {
      icon: 'icon-birthday',
      beforeIconText: 'Celebrates',
      afterIconText: 'on',
      key: 1,
      value: (user.dob ? (<CreatedAt isoTime={user.dob} format={2} />) : null)
    },
    {
      icon: 'icon-location-1',
      afterIconText: 'Lives in',
      key: 2,
      value: user.location
    },
    {
      icon: 'icon-home',
      afterIconText: 'From',
      key: 3,
      value: user.hometown
    },
    {
      icon: 'icon-briefcase',
      afterIconText: 'Works at',
      key: 4,
      value: user.works_at
    },
    {
      icon: 'icon-user',
      afterIconText: 'Became friends with',
      key: 5,
      value: user.recent_friend
    }
  ]
);

const AboutBlock = ({ user }) => (
  <div className="sidebar-block">
    <h4 className="block-title">
      <i className="icon-user" /> About
    </h4>
    <Row>
      <div className="section">
        <ListGroupWithIcon listItems={getListItems(user)} />
      </div>
    </Row>
  </div>
);

AboutBlock.propTypes = propTypes;
export default AboutBlock;
