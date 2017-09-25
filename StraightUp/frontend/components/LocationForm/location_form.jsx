import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchLocations();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const location = this.state;
    this.props.processForm(location).then( () => this.props.history.push('/checkin'));

  }

  renderErrors(){
    return(
      <ul className="location-errors">
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
      <div className="location-form-container">
        <form onSubmit={this.handleSubmit} className="location-form-box">
          Leave a location
          <br/>
          {this.renderErrors()}
          <div className="location-form">

            <label>
              <input type="text"
                placeholder="New Location"
                value={this.state.name}
                onChange={this.update('name')}
                className="location-input"
                />
            </label>
            <br />
              <div className="submit-button">
                <button className="submit-button" type="submit">SUBMIT LOCATION</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LocationForm);
