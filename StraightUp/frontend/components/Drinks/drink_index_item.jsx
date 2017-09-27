import React from "react";
import { Link } from "react-router-dom";

const DrinkIndexItem = ({ drink }) => (
	<li className="drink-index-item">
		<h1>{drink.name}</h1>
		<img src={drink.image_url} />
	</li>
);

export default DrinkIndexItem;
