import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: contacts.slice(0, 5),
    };
  }

  addRandomContact = () => {
    if (this.state.people.length === contacts.length) {
      return;
    }
    const randomContact = Math.floor(Math.random() * contacts.length);
    if (this.state.people.includes(contacts[randomContact])) {
      return this.addRandomContact();
    }
    let people = [...this.state.people];
    people.push(contacts[randomContact]);
    this.setState({
      people: people,
    });
  };

  sortByName = () => {
    const people = [...this.state.people];
    const peopleSorted = people.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      people: peopleSorted,
    });
  };

  sortByPopularity = () => {
    const people = [...this.state.people];
    const peopleSorted = people.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      people: peopleSorted,
    });
  };

  delete = (id) => {
    const people = [...this.state.people];
    let index = 0;
    for (let person of people) {
      if (person.id === id) {
        index = people.indexOf(person);
      }
    }
    people.splice(index, 1);
    this.setState({
      people: people,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person) => {
              return (
                <Contact
                  key={person.id}
                  id={person.id}
                  picture={person.pictureUrl}
                  name={person.name}
                  popularity={person.popularity.toFixed(2)}
                  click={this.delete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
