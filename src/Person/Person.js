import React, {Component} from 'react';

//const person = (props) => {
	//return <p>My name is {props.name}</p>;
//}

class Person extends Component{
	render(){
		return <p>My name is {this.props.name}</p>;
	}

}

export default Person;