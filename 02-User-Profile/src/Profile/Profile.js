import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, Button } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <Button
              bsStyle="primary"
              className="btn-margin"
            >
              View Surveys
            </Button>
            <Button
              bsStyle="primary"
              className="btn-margin"
            >
              Create Survey
            </Button>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
