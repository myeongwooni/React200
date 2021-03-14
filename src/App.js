import React, {Component} from 'react';
// import './App.css';
import StrAddbutton from './StrAddbutton';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span><br/>
        <StrAddbutton store={this.props.str}/>
      </div>
    );
  }
}

export default App;