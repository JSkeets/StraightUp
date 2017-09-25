import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class DrinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchDrinks();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const drink = this.state;
    this.props.processForm(drink).then( () => this.props.history.push('/checkin'));

  }

  renderErrors(){
    return(
      <ul className="drink-errors">
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
      <div className="drink-form-container">
        <form onSubmit={this.handleSubmit} className="drink-form-box">
          Leave a drink
          <br/>
          {this.renderErrors()}
          <div className="drink-form">

            <label>
              <input type="text"
                placeholder="New Drink"
                value={this.state.name}
                onChange={this.update('name')}
                className="drink-input"
                />
            </label>
            <br />
              <div className="submit-button">
                <button className="submit-button" type="submit">SUBMIT DRINK</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DrinkForm);
