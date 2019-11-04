import React from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            persons: [
                {id:1, name: 'ap', age: 30},
                {id:2, name: 'pa', age: 31}
            ],
            showPersons :false
        }
    }


    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons =[...this.state.persons];
        persons[personIndex]= person;
        this.setState({
            persons: persons
        });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }
    
    render(){
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div >
                    {this.state.persons.map((person, index) => {
                           return <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name ={person.name}
                                    age ={person.age}
                                    key ={person.id}
                                    changed={(event) => this.nameChangeHandler(event, person.id)}>
                                  </Person>
                    })}
                </div>
            );

            style.backgroundColor = 'red';
        }

        let classes =[];
        if(this.state.persons.length <=2){
            classes.push('red');
        }
        if(this.state.persons.length<=1){
            classes.push('bold');
        }

        return (
            <div className = "App">
                <h1>Hi, I'm  a React App</h1>
                <p className= {classes.join(' ')}>This is really working!</p>
                <button 
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}     
            </div>
        );
    }
}

export default App;




