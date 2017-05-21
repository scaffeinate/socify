import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import CreatedAt from '../CreatedAt';

const propTypes = {
  user: PropTypes.object.isRequired
};

const AboutBlock = ({ user }) => (
  <div className="sidebar-block">
    <h4 className="block-title">
      <i className="icon-user" /> About
    </h4>
    <Row>
      <div className="section">
        <ul className="list-group">
          {
            user.created_at ?
              (
                <li className="list-group-item">
                  <i className="icon-back-in-time" /> Joined <CreatedAt isoTime={user.created_at} format={2} />
                </li>
              ) : ''
          }
          {
            user.dob ?
              (
                <li className="list-group-item">
                  Celebrates <i className="icon-birthday" /> on <CreatedAt isoTime={user.dob} format={2} />
                </li>
              ) : ''
          }
          {user.sex ? (<li className="list-group-item"><i className="icon-user" />{user.sex}</li>) : ''}
          {
            user.location ?
              (
                <li className="list-group-item">
                  <i className="icon-location-1" /> Lives in {user.location}
                </li>
              ) : ''
          }
          {user.hometown ? (<li className="list-group-item"><i className="icon-home" /> From {user.hometown}</li>) : ''}
          {user.works_at ?
              (
                <li className="list-group-item">
                  <i className="icon-briefcase" /> Works at {user.works_at}
                </li>
              ) : ''
          }
          {user.recent_friend ?
            (
              <li className="list-group-item">
                <i className="icon-users" /> Became friends with {user.recent_friend}
              </li>
            ) : ''
          }
        </ul>
      </div>
    </Row>
  </div>
);

AboutBlock.propTypes = propTypes;

export default AboutBlock;
