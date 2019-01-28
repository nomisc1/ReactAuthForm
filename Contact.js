import React from 'react';
import ReactDOM from 'react-dom';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'react',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    // display login form when auth=false  
    const login = (
    	<form action="#" 
      onSubmit="{this.authorize}">
      <input
      type="password"
      placeholder="password"/>
      <input
      type="submit"/>
      </form>
    );
    
    // display contact information when auth=true
    const contactInfo = (
          <ul>
          <li>
            josh@apple.com
          </li>
          <li>
            036587282
          </li>
          </ul>
    );
    
    return (
      <div id="authorization">
      // the operation displays Login for default state (false)
        <h1>{this.state.authorized ? 'Login' : 'Enter the Password'</h1>
      {this.state.authorized ? login : contactInfo}
      </div>
    );
  }
}

// render ContactDetails instance
ReactDOM.render(
  <ContactDetails />, 
  document.getElementById('app')
);
