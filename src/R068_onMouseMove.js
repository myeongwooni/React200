import React, {Component} from 'react';

class R069_onMouseMove extends Component {
    MouseMove(tag) {
        console.log('TAG: '+tag);
    }

    render() {
        return (
            <>
            <div onMouseMove={e => this.MouseMove("div")}>DIV onMouseMove</div>
            <input type="text" onMouseMove={e => this.MouseMove("input")}></input>
            <select onMouseMove={e => this.MouseMove("select")}>
                <option value="react">react</option>
                <option value="200">200</option>
            </select>
            </>

)
    }
}

export default R069_onMouseMove;