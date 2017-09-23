import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink_id: "",
      location_id: "",
      rating: "",
      body:"",
      user_id:this.props.currentUser
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    this.props.processForm(review).then( () => this.props.history.push('/global'));

  }

  renderErrors(){
    return(
      <ul className="review-errors">
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    console.log(this.props.currentUser);
    return(
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit} className="review-form-box">
          Leave a review
          <br/>
          {this.renderErrors()}
          <div className="review-form">
            <br/>
            <label>
              <input type="text"
                placeholder="drink_id"
                value={this.state.drink_id}
                onChange={this.update('drink_id')}
                className="review-input"
                />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="location_id"
                value={this.state.location_id}
                onChange={this.update('location_id')}
                className="review-input"
                />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="rating"
                value={this.state.rating}
                onChange={this.update('rating')}
                className="review-input"
                />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="body"
                value={this.state.body}
                onChange={this.update('body')}
                className="review-input"
                />
            </label>
            <br />
              <div className="submit-button">
                <button className="submit-button" type="submit">SUBMIT REVIEW</button>
              </div>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
