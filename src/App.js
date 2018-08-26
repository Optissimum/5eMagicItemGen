import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './magic-properties.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previous_gen: {},
      current_gen: null
    };
  }

  random(range) {
    return Math.floor(Math.random() * range)
  }

  render() {
    let property = Lists
      .property[this.random(Lists.property.length)]
      .replace("#trigger", Lists.trigger[this.random(Lists.trigger.length)])
      .replace("#trigger", Lists.trigger[this.random(Lists.trigger.length - 2)])
      .replace("#target", Lists.target[this.random(Lists.target.length)])
      .replace("#friendly", Lists.friendly[this.random(Lists.friendly.length)])
      .replace("#damage_type", Lists.damage_type[this.random(Lists.damage_type.length)])
      .replace("#action", Lists.action[this.random(Lists.action.length)])
      .replace("#save", Lists.save[this.random(Lists.save.length)])
      .replace("#distance", Lists.distance[this.random(Lists.distance.length)])
      .replace("#distance", Lists.distance[this.random(Lists.distance.length)])
      .replace("#duration", Lists.duration[this.random(Lists.duration.length)]);
    property = property
      .charAt(0)
      .toUpperCase() + property.substr(1) + ".";
    let item = Lists.weapons[this.random(Lists.weapons.length)];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Magic item generator</h1>
        </header>
        <p className="App-intro">{item}
        </p>
        <p className="App-intro">{property}</p>
      </div>
    );
  }
}
export default App;