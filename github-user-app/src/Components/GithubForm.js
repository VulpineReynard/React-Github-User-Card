import React from 'react';

class GithubForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }3

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    this.props.getGithubData(this.state.username);
  }

  render() {
    return (
      <div className="github-form-container">
        <form onSubmit={this.submitForm} className="github-form">
          <h3>Search GitHub Username:</h3>
          <input onChange={this.handleChange} placeholder="Github Username"/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default GithubForm;