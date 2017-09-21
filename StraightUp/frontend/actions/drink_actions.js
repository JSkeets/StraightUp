export const RECEIVE_DRINK = "RECEIVE_DRINK";
export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_DRINK_ERRORS = "RECEIVE_DRINK_ERRORS";

import * as DrinksUtil from '../util/drinks_api_util';

const receiveDrinks = (drinks) => ({
  type: RECEIVE_DRINKS,
  drinks
});

const receiveDrinkErrors = (errors) => ({
  type: RECEIVE_DRINK_ERRORS,
  errors
});

const receiveDrink = (drink) => ({
  type: RECEIVE_DRINK,
  drink
});

export const fetchDrink = (drink) => dispatch => (
  DrinksUtil.fetchDrink(drink).then(res =>
    dispatch(receiveDrink(res))
  ), err => (
    dispatch(receiveDrinkErrors(err.responseJSON))
  )
);

export const fetchDrinks = () => dispatch => (
  DrinksUtil.fetchDrinks().then(drinks => dispatch(receiveDrinks(drinks)))
);

export const createDrink = drink => dispatch => (
  DrinksUtil.createDrink(drink).then(res => (
    dispatch(receiveDrink(res))
  ), err => (
    dispatch(receiveDrinkErrors(err.responseJSON))
  ))
);
