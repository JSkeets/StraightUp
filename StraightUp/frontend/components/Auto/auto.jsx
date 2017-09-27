import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class AutoComplete extends React.Component {
	constructor(prop) {
		super(prop);
		this.prop = prop;
		this.state = {
			inputVal: this.prop.inputVal
		};
		this.setInputVal = this.setInputVal.bind(this);
		this.fillInput = this.fillInput.bind(this);
	}

	setInputVal(event) {
		event.preventDefault();
		let val = event.currentTarget.value;
		this.setState({ inputVal: val }, () => {
			this.prop.action(undefined, val);
		});
	}

	click(event) {
		this.fillInput(event);
		this.prop.action(event.target.value);
	}

	filterNames() {
		let that = this;
		let results = [];
		let names = this.prop.names;
		for (let i = 0; i < names.length; i++) {
			if (names[i].name.startsWith(this.state.inputVal)) {
				results.push(names[i]);
			}
		}
		return results;
	}

	fillInput(event) {
		event.preventDefault();
		let val = event.currentTarget.innerHTML;
		this.setState({ inputVal: val });
	}

	render() {
		let names = this.filterNames();
		let content = (
			<div>
				<input
					type="text"
					onChange={this.setInputVal}
					value={this.state.inputVal}
					placeholder={this.prop.type}
					id="review-input"
				/>
				<ul className="autoNames">
					{names.map(name => {
						return (
							<li
								className="autoName"
								onClick={event => this.click(event)}
								value={name.id}
								id="review-input"
							>
								{name.name}
							</li>
						);
					})}
				</ul>
			</div>
		);
		return content;
	}
}

export default AutoComplete;
