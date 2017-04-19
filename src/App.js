import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';
import UserRepo from './UserRepo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
		user: {},
		repos: [],
		showIntro: true
	}
  }
  
  getUserInformation() {
    fetch(`https://api.github.com/users/firedeathz`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          user: data,
		  showIntro: false
        })
	  })
	fetch(`https://api.github.com/users/firedeathz/repos`)
	  .then(data => data.json())
	  .then(data => {
	    this.setState({
		  repos: data
	    })
	  })
  }

  render() {
	const { avatar_url, name, url, location } = this.state.user;
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        { this.state.showIntro ? 
			<div>
				<div className="App-intro">
				  To get started, edit <code>src/App.js</code> and save to reload.
				</div>
				<div className="App-intro">
					<hr />
					<p>Click on the button to fetch the user information</p>
					<button onClick={this.getUserInformation.bind(this)}>
						Fetch User Info
					</button>
				</div>
			</div>
			: 
	        <div>
				<div className="UserInfoTitle">
					<h1>User Information</h1>
				</div>
				<UserInformation avatar_url={avatar_url} name={name} url={url} location={location} />
				<div className="UserRepos">
					{ this.state.repos.length > 0 ?
						<div className="ReposTitle">
							<h1>Repositories</h1>
						</div>
						: null
					}
					{this.state.repos.map((repo) => {
						return (
							<UserRepo key={repo.id} name={repo.name} desc={repo.description} />
						)
					})}
				</div>
			</div>
		}

      </div>
    );
  }
}

export default App;
