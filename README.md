# STRAIGHT UP


## Introduction
Straight Up is a full stack web application where individuals can come and rate cocktails as well as their locations. It was built using react, redux, and rails. The website can be seen at <https://straightup.herokuapp.com/#/>

## Technologies Used
* Ruby
* Rails
* Javascript
* React.js
* Redux
* PostgreSQL


## Features and Implementation
 Straight up contains the following features
 * User authentication and creation
 * Creating, editing, and deleting check-ins
 * Viewing reviews associated with a location
 * Viewing reviews associated with an individual
 * A global feed of most recent reviews

## User Authentication
![
  Authentication takes place in the backend of the project by creating hashed, and salted passwords using BCrypt. Authentication on the front end takes place through protected routes, and the use of bootstrapping the user to maintain their session token.

## Creating Editing and Deleting Check-ins
  All logged-in users have the ability to create a check-in, a unique feature of the check-in is that if the drink or location doesn't exist the form will effortlessly create the drink and/or location before submitting the review to the back-end. The feature is so effortless that the user doesn't even realize they are creating a new drink or location. It was also the most challenging part of the project. A sample of the code can be seen below.

    else if (!this.state.location_id && !this.state.drink_id) {
      this.props
        .createDrink({ name: this.state.drinkName })
        .then(action => {
          review.drink_id = action.drink.id;
          delete review.drinkName;
          this.setState({ drink_id: action.drink.id });
        })
        .then(() => {
          this.props
            .createLocation({ name: this.state.locationName })
            .then(action => {
              review.location_id = action.location.id;
              delete review.locationName;
              this.setState({ location_id: action.location.id });
            })
            .then(() => {
              this.props
                .processForm(review)
                .then(() => this.props.history.push("/the-bar"));
            });
        });

  The feature was accomplished by checking to see if the location or drink id did not exist and if so the drink was created, and by the use of promise objects the location was then created and followed by the entire review itself. A review of course can not be created if the drink and location do not exist.

  Another unique feature of the review form is the autocompletion. As a user types in a drink or location. If the item has already been created the field below will begin to autocomplete, and show drinks or locations matching the users input.

    filterNames() {
  		let that = this;
  		let results = [];
  		let names = this.prop.names;
  		let inputLow = this.state.inputVal.toLowerCase();
  		for (let i = 0; i < names.length; i++) {
  			if (names[i].name.toLowerCase().startsWith(inputLow)) {
  				results.push(names[i]);
  			}
  		}
  		return results;
  	}

	fillInput(event) {
		event.preventDefault();
		let val = event.currentTarget.innerHTML;
		this.setState({ inputVal: val });

  An important aspect of the autocomplete is that it is reusable. The same code is used for the location, and drink autocomplete feature. The only variable between the two is the different props passed down to the component. This made great use of the reusability of a react component.
 (https://github.com/JSkeets/StraightUp/blob/master/Screen%20Shot%202017-09-29%20at%202.53.48%20PM.png)

## Viewing of associated reviews
  A user has the ability to click on a user's username or a location which is listed in a review on the feed known as "The Bar", which is a global feed, and view all the reviews by location. Although I had originally intended to do this via a backend association, the information was already present on the front-end. The application runs much faster and smoother by sorting through the information on the front end and providing the user with the information they requested in a fast and efficient manner.


## Future of the Application
 * The largest single improvement that could be made would the use of the foursquare API to allow users to check-in to a venue.

 * A ranked page which would show the top ranked locations, and drinks globally.

 * Ability for the users to upload pictures of their cocktails.

 * General refactoring of the code to improve reusability of components
