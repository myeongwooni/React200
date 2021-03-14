import React, {Component} from 'react';
// import './App.css';
// import {connect} from 'react-redux';
// import StrAddbutton from './StrAddbutton';
import CookieRemove from './R087_cookieRemove';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <CookieRemove />
    </div>
  )
}

// class App extends Component {
//   render(){
//     return (
//       <div>
//         <h1>Start React 200!</h1>
//         {/* <span>{this.props.store.getState().data.str}</span><br/> */}
//         <span>{this.props.str}</span><br/>
//         {/* <StrAddbutton store={this.props.str}/> */}
//         <StrAddbutton AppProp="200"/>
//       </div>
//     );
//   }
// }

// let mapStateToProps = (state, props) => {
//   console.log('Props from index.js : ' + props.indexProp);
//   return {
//     str: state.data.str,
//   };
// };

// App = connect(mapStateToProps, null)(App);

export default App;