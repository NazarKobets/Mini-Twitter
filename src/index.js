import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';

/*
class WhoAmI extends Component  {

	constructor(props){
		super(props);
		this.state = {
			years: 26
		}

		//1 способ привязки контекста
		//this.nextYear = this.nextYear.bind(this);

		//2 способ привязки контекста
		// this.nextYear = () => {
		// 	this.setState(state => ({
		// 		years: ++state.years
		// 	}));
		// }
	}

	nextYear = () => {
		this.setState(state => ({
			years: ++state.years
		}));
	}

	render() {
		return (
			<>
				<button onClick={this.nextYear}>++</button>
				<h1>My name is {this.props.name}, surname - {this.props.surname}, years={this.state.years}</h1>
				<a href={this.props.link}>My profile</a>
			</>
		);
	}
}
*/

// ******************************************
// function WhoAmI({name, surname, link}) {
// 	//const {name, surname, link} = props;
// 	//let years = 27;
	
// 	const [years, setYears] = useState(26);

// 	return (
// 		<>
// 			<button onClick={() => {setYears(years + 1)}}>++</button>
// 			<h1>My name is {name}, surname - {surname}, years={years}</h1>
// 			<a href={link}>My profile</a>
// 		</>
// 	);
// }
// ******************************************


// function All() {
// 	return (
// 		<>
// 			<WhoAmI name="John" surname="Smith" link="facebook.com"/>
// 			<WhoAmI name="Alex" surname="Fox" link="instargam.com"/>
// 			<WhoAmI name="James" surname="Bond" link="google.com"/>
// 		</>
// 	);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
// 		<All/>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
		<App/>
  </React.StrictMode>
);
