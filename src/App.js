import React, { Component } from 'react';
import './App.css';

import Person from './person/Person'
import UserInput from './users/UserInput'
import UserOutput from './users/UserOutput'

import Validation from './assignment2/validation';
import CharComponent from './assignment2/char-component';

class App extends Component {

  state = {
    person: {name: "Prashant", age: 29},
    input: "",
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: {name: newName, age: 30},
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      person: {name: event.target.value, age:30}
    })
  }

  deletePersonHandler = () => {
    this.setState({person: null});
  }

  changeInputTextHandler = (event) => {
    this.setState({input: event.target.value});
  }

  deleteCharAt = (index) =>{
    console.log(index);
    let str = new String (this.state.input);
    console.log(str);
    str = str.slice(parseInt(index), 1)
    this.setState({input: str});
  }

  render() {
    // inline styling. Webpack will convert these into CSS properties.
    const style={
      backgroundColor: 'grey', // background-color
      fontSize: '18px' // font-size
    }

    let chars = [];
    return (
      <div className="App">
	<h1>Hi! I am a React App</h1>
	<button style={style} onClick={() => this.switchNameHandler('Gaurav Parashar')}>Switch Name</button>
	<Person name={this.state.person.name} age={this.state.person.age} change={this.changeNameHandler} click={this.deletePersonHandler}/>
	<UserInput name={this.state.person.name} change={this.changeNameHandler} />
	<UserOutput name={this.state.person.name} />
	<UserOutput name={this.state.person.name} />

	<input type="text" onChange={this.changeInputTextHandler} />
	<p>{this.state.input}</p>

	<Validation length={this.state.input.length} />
	
	{
	  this.state.input.split("").map((charc, index) => { chars.push(<CharComponent index={index} character={charc} click={() => this.deleteCharAt(index)}/>)} )
	}
	{chars}

      </div>
    );
  }
}

export default App;
