import React from 'react';
import PropTypes from 'prop-types';
import CreatedAt from '../CreatedAt';

const propTypes = {
  user: PropTypes.object.isRequired
};

const AboutBlock = ({ user }) => (
  <div id="about-block" className="sidebar-block">
    <h4 className="block-title">
      <i className="icon-user" /> About
    </h4>
    <div className="row">
      <div className="section">
        <ul className="list-group">
          <li className="list-group-item">
            <i className="icon-back-in-time" />
            {user.created_at ? (<div>Joined <CreatedAt isoTime={user.created_at} format={2} /></div>) : ''}
          </li>
          <li className="list-group-item">
            {user.dob ? (
              <div>
                Celebrates <i className="icon-birthday" /> on <CreatedAt isoTime={user.dob} format={2} />
              </div>) : ''
            }
          </li>
          <li className="list-group-item">
            {user.sex ? (<div><i className="icon-user" />{user.sex}</div>) : ''}
          </li>
          <li className="list-group-item">
            {user.location ? (<div><i className="icon-location-1" /> Lives in {user.location}</div>) : ''}
          </li>
          <li className="list-group-item">
            {user.hometown ? (<div><i className="icon-home" /> From {user.hometown}</div>) : ''}
          </li>
          <li className="list-group-item">
            {user.works_at ? (<div><i className="icon-briefcase" /> Works at {user.works_at}</div>) : ''}
          </li>
          <li className="list-group-item">
            {user.recent_friend ? (<div><i className="icon-users" /> Became friends with {user.recent_friend}</div>) : ''}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

AboutBlock.propTypes = propTypes;

export default AboutBlock;
