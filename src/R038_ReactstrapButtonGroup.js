import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class R038_ReactstrapButtonGroup extends Component {
    constructor(props){
        super(props);
        this.state={ number : 10}
    }

    move = (type, e) => {
        if (type === 'left'){
            this.setState({number:this.state.number -1})
        } else if (type === 'right'){
            this.setState({number:this.state.number +1})
        } else{
            this.setState({number:this.state.number = 10})
        }
    }

    render() {
        return(
            <div style={{padding: "0px"}}>
                <ButtonGroup style={{padding: "0px"}}>
                    <Button onClick={e => this.move('left')}>Left</Button>
                    <Button onClick={e => this.move('middle')}>Middle</Button>
                    <Button onClick={e => this.move('right')}>Right</Button>
                </ButtonGroup>
                <br/>{this.state.number}
            </div>
        )
    }
}

export default R038_ReactstrapButtonGroup;