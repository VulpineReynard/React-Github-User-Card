import React from 'react';
import FollowerCard from './FollowerCard';

class GithubFollowersContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="github-follower-container">
        <h2 className="followers-title">Followers</h2>
        <div className="followers">
          {this.props.followers.map((follower, index) => {
            return <FollowerCard followerData={follower} key={index}/>
          })}
        </div>
      </div>
    );
  }
}

export default GithubFollowersContainer;