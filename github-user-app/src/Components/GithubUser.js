import React from 'react';

class GithubUser extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div className="github-user">
        <img className="user-img" src={this.props.userData.avatar_url} alt="user-img"/>
        <h2>{this.props.userData.name}</h2>
        <p className="user-handle">{this.props.userData.login}</p>
        <p>Followers: {this.props.userData.followers}</p>
        <p>Following: {this.props.userData.followers}</p>
        <p>Public Repositories: {this.props.userData.public_repos}</p>
      </div>
    );
  }
}

export default GithubUser;