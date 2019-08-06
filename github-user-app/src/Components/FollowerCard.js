import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

class FollowerCard extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: '',
      following: '',
      pubRepos: ''
    }
  }

  componentDidMount() {
    this.getFollowerData();
  }

  getFollowerData = () => {
    axios.get(`https://api.github.com/users/${this.props.followerData.login}`)
    .then(res => {
      console.log(res.data);
      this.setState({
        followers: res.data.followers,
        following: res.data.following,
        pubRepos: res.data.public_repos
      })
    })
  }

  render() {
    console.log(this.props.followerData)
    return (
      <div className="follower-card">

        <h3>{this.props.followerData.login}</h3>
        <img className="follower-img" src={this.props.followerData.avatar_url}alt="follower-img"/>

        <div className="follower-socials-container">
          <a href={this.props.followerData.html_url}><FontAwesomeIcon src={this.props.followerData.html_url} className="github-icon" icon={faGithub}/></a>
        </div>

        <div className="follower-stats">
          <p style={{color: 'black'}}>Followers: {this.state.followers}</p>
          <p style={{color: 'black'}}>Following: {this.state.following}</p>
          <p style={{color: 'black'}}>Repositories: {this.state.pubRepos}</p>
        </div>

      </div>
    );
  }
}

export default FollowerCard;