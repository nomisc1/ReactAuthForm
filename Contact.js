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
    return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>
            josh@apple.com
          </li>
          <li>
            036587282
          </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ContactDetails />, 
  document.getElementById('app')
);
