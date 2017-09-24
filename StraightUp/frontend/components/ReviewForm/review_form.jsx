import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AutoComplete from '../Auto/auto';

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
    this.handler = this.handler.bind(this);
  }

  componentDidMount(){
    this.props.fetchReviews();
    this.props.fetchUsers();
    this.props.fetchLocations();
    this.props.fetchDrinks();
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

  handler (input) {
       this.setState({
           drink_id: input
       });
   }

  render(){
    return(
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit} className="review-form-box">
          Leave a review
          <br/>
          {this.renderErrors()}
          <div className="review-form">
            <br/>
            <div className="starRating">
              <label id="rating1">1
                <input id="rating1" type="radio" name="rating" value={this.state.rating=1}/>
              </label>
              <label id="rating2">2
                <input id="rating2" type="radio" name="rating" value={this.state.rating=2}/>
              </label>
              <label id="rating3">3
                <input id="rating3" type="radio" name="rating" value={this.state.rating=3}/>
              </label>
              <label id="rating4">4
                <input id="rating4" type="radio" name="rating" value={this.state.rating=4}/>
              </label>
              <label id="rating5"> 5
                <input id="rating5" type="radio" name="rating" value={this.state.rating=5}/>
              </label>
            </div>


            <AutoComplete action={this.handler} names={this.props.drinks}/>

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
                placeholder="comment"
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




//   <input type="text"
//     placeholder="rating"
//     value={this.state.rating}
//     onChange={this.update('rating')}
//     className="review-input"
//     />
// </label>
