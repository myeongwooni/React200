import React, {Component} from 'react';
import {Button, Fade} from 'reactstrap';

class R034_ReactstrapAlerts extends Component {
    constructor(props){
        super(props);
        this.state = {fadeInOut:true}
    }

    toggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut})
    }

    render(){
        return(
            <div>
                <Button color="sucess" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    Hello World! This is ME!
                </Fade>
            </div>
        )
    }
}

export default R034_ReactstrapAlerts;