import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from './actions';

class StrAddbutton extends Component {
    render() {
        return(
            // <input value='Add200' type="button" onClick={this.addString}/>
            <input value='Add200' type="button" onClick={this.props.addString}/>
        )
    }

    // addString = () => {
    //     this.props.store.dispatch(add());
    // }
}

let mapDispatchtoProps = (dispatch, props) => {
    console.log('Props from App.js : ' +props.AppProp);

    return {
        addString: () => dispatch(add())
    };
};

StrAddbutton = connect(null,mapDispatchtoProps)(StrAddbutton);

export default StrAddbutton;