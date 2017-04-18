import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
		user: {},
		showIntro: true
	}
  }

  getUserInformation(user) {
    fetch(`https://api.github.com/users/firedeathz`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          user: data,
		  showIntro: false
        })
	})
  }

  render() {
	const { avatar_url, name, url, bio, location } = this.state.user;
  
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
			: null
		}
        <UserInformation avatar={avatar_url} name={name} url={url} bio={bio} location={location} />
      </div>
    );
  }
}

export default App;
