import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Lists from './magic-properties.json';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      generated: []
    };
  }

  random(range) {
    return Math.floor(Math.random() * range);
  }

  updateList(item){
    this.setState({generated: [...this.state.generated, {"weapon": item.weapon, "property": item.property}]});
  }

  generateItem(){
    let item = {}
    let distance = Lists.distance[this.random(Lists.distance.length)]
    let property = Lists
      .property[this.random(Lists.property.length)]
      .replace("#trigger", Lists.trigger[this.random(Lists.trigger.length)])
      .replace("#trigger", Lists.trigger[this.random(Lists.trigger.length - 2)])
      .replace("#target", Lists.target[this.random(Lists.target.length)])
      .replace("#friendly", Lists.friendly[this.random(Lists.friendly.length)])
      .replace("#damage_type", Lists.damage_type[this.random(Lists.damage_type.length)])
      .replace("#action", Lists.action[this.random(Lists.action.length)])
      .replace("#save", Lists.save[this.random(Lists.save.length)])
      .replace("#distance", distance + "ft")
      .replace("#distance", Math.min(distance,  Lists.distance[this.random(Lists.distance.length)]) + "ft")
      .replace("#duration", Lists.duration[this.random(Lists.duration.length)]);
    property = property
      .charAt(0)
      .toUpperCase() + property.substr(1);
    let weapon = Lists.weapons[this.random(Lists.weapons.length)];
    item = {"weapon": weapon, "property": property}
    return item
  }

  render() {
    let item = this.generateItem();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Magic item generator</h1>
        </header>
        {this.state.generated.map(item => (
          <div className="Item-info">
            <h3 className="App-intro">{item.weapon}</h3>
            <p className="App-description">{item.property}</p>
          </div>
        ))}
        <a className="App-button" onClick={(e) => this.updateList(item)}> {this.state.generated.length == 0 ? "Generate Weapon" : "Another!"} </a>
      </div>
    );
  }
}
export default App;