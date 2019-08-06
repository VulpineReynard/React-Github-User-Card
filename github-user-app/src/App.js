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
      user: 'VulpineReynard',
      userFollowers: [],
      userData: {}
    }
  }

  componentDidMount() {
    this.getGithubData();
  }

  getGithubData = () => {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        console.log(res);
        this.setState({
          userData: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        console.log(res)
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
          <h1>Github User App</h1>
        </header>
        <GithubForm />
        <GithubUser userData={this.state.userData}/>
        <GithubFollowersContainer followers={this.state.userFollowers}/>
      </div>
    );
  }
}

export default App;
