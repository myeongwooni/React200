import React, {Component} from 'react';
import {add} from './actions';

class StrAddbutton extends Component {
    render() {
        return(
            <input value='Add200' type="button" onClick={this.addString}/>
        )
    }

    addString = () => {
        this.props.store.dispatch(add());
    }
}

export default StrAddbutton;