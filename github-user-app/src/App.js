import React from 'react';
import './App.css';
import axios from 'axios';
import GithubForm from './Components/GithubForm';
import GithubUser from './Components/GithubUser';
import GithubFollowersContainer from './Components/GithubFollowersContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userFollowers: [],
      userData: {}
    }
  }

  componentDidMount() {
    this.getGithubData();
  }

  getGithubData = (username) => {
    if(username === undefined) {username = 'justsml'}
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        this.setState({
          userData: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => {
        this.setState({
          userFollowers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User Finder</h1>
        </header>
        <GithubForm getGithubData={this.getGithubData}/>
        <GithubUser userData={this.state.userData}/>
        <GithubFollowersContainer followers={this.state.userFollowers}/>
      </div>
    );
  }
}

export default App;
