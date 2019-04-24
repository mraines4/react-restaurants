import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfTypes from './ListOfTypes';
import ListOfRestaurants from './ListOfRestaurants';
import MenuItems from './MenuItems';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: '',
      rest: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ListOfTypes handleInput={this._filterType} />
          {this.state.type ? <ListOfRestaurants type={this.state.type} handleInput={this._filterRest}/> : <></>}
          {this.state.rest ? <MenuItems rest={this.state.rest} type={this.state.type} /> : <></>}
        </header>
      </div>
    );
  }

  _filterType = (e) => {
    console.log(e.target.value)
    this.setState({
      type: e.target.value,
      rest: ''
    })
  }
  _filterRest = (e) => {
    console.log(e.target.value)
    this.setState({
      rest: e.target.value, 
    })
  }

}

export default App;
