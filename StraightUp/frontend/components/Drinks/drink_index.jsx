import React from 'react';
import { Route } from 'react-router-dom';
import DrinkIndexItem from './drink_index_item';
class DrinkIndex extends React.Component {


  componentDidMount(){
    this.props.fetchDrinks();

  }

  render(){
    return (
      <div className="dashboard">
      <ul id="drink-index">
        <h1> HELLO FROM DRINKS </h1>
        {this.props.drinks.map(drink =>
          <DrinkIndexItem
            key={drink.id}
            drink={drink}
            />
        )}
      </ul>
      </div>
    );
  }
}

export default DrinkIndex;
