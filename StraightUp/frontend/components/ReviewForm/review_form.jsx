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
    this.handleDrink = this.handleDrink.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
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

  handleDrink (input) {
       this.setState({
           drink_id: input
       });
   }

   handleLocation (input) {
        this.setState({
            location_id: input
        });
    }

  handleOptionChange(event) {
    this.setState({
      rating: event.target.value
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
                <input id="rating1" type="radio" name="rating" value="1"
                  checked={this.state.rating === "1"}
                  onChange={this.handleOptionChange}/>
              </label>
              <label id="rating2">2
                <input id="rating2" type="radio" name="rating" value="2"
                  checked={this.state.rating === "2"}
                  onChange={this.handleOptionChange}/>
              </label>
              <label id="rating3">3
                <input id="rating3" type="radio" name="rating" value="3"
                  checked={this.state.rating === "3"}
                  onChange={this.handleOptionChange}/>
              </label>
              <label id="rating4">4
                <input id="rating4" type="radio" name="rating" value="4"
                  checked={this.state.rating === "4"}
                  onChange={this.handleOptionChange}/>
              </label>
              <label id="rating5"> 5
                <input id="rating5" type="radio" name="rating" value="5"
                  checked={this.state.rating === "5"}
                  onChange={this.handleOptionChange}/>
              </label>
            </div>


            <AutoComplete action={this.handleDrink} names={this.props.drinks} type={"drink"}/>

            <br />
            <AutoComplete action={this.handleLocation} names={this.props.locations} type={"location"}/>
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
