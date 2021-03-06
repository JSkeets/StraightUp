import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    return <Link to="/login"> Already a user? Login!</Link>;
  }

  renderErrors(){
    return(
      <ul className="user-errors">
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to Straight Up
          <br/>

          Create an account
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>
              <input type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                />
            </label>
            <br />
            <label>
              <input type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                />
            </label>
            <br />
              <div className="submit-button">
                <button className="submit-button" type="submit">SIGN UP</button>
              </div>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
