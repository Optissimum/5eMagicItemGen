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
    console.log(item);
    this.setState({generated: [...this.state.generated, {"weapon": item.weapon, "property": item.property}]});
    console.log(this.state);
  }

  generateItem(){
    let item = {}
    let property = Lists
      .property[this.random(Lists.property.length)]
      .replace("#trigger", Lists.trigger[this.random(Lists.trigger.length)])
      .replace("#trigger", Lists.trigger[this.random(Lists.trigger.length - 2)])
      .replace("#target", Lists.target[this.random(Lists.target.length)])
      .replace("#friendly", Lists.friendly[this.random(Lists.friendly.length)])
      .replace("#damage_type", Lists.damage_type[this.random(Lists.damage_type.length)])
      .replace("#action", Lists.action[this.random(Lists.action.length)])
      .replace("#save", Lists.save[this.random(Lists.save.length)])
      .replace("#distance", Lists.distance[this.random(Lists.distance.length)] + "ft")
      .replace("#distance", Math.min([Lists.distance[this.random(Lists.distance.length)], Lists.distance[this.random(Lists.distance.length)]]) + "ft")
      .replace("#duration", Lists.duration[this.random(Lists.duration.length)]);
    property = property
      .charAt(0)
      .toUpperCase() + property.substr(1);
    let weapon = Lists.weapons[this.random(Lists.weapons.length)];
    item = {"weapon": weapon, "property": property}
    console.log(item)
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
        <button onClick={(e) => this.updateList(item)}>Another!</button>
        {this.state.generated.map(item => (
          <div className="Item-info">
            <h2 className="App-intro">{item.weapon}
            </h2>
            <p className="App-description">{item.property}</p>
          </div>
        ))}
        <button onClick={(e) => this.updateList(item)}>Another!</button>
      </div>
    );
  }
}
export default App;