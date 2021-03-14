import React, {Component} from 'react';

class R070_onMouseOut extends Component {
    Mouseout(tag) {
        console.log ('TAG: '+tag);
    }

    render() {
        return(
            <>
            <div onMouseOut = {e =>this.Mouseout("div")}>
                <h3>DIV on MouseOut</h3>
            </div>

            <input type="text" onMouseOut = {e =>this.Mouseout("input")}/>

            <select onMouseOut = {e=>this.Mouseout("select")}>
                <option value ="react">react</option>
                <option value ="200">200</option>
            </select>
            </>
        )
    }
}

export default R070_onMouseOut;