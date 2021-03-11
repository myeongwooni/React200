import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';

class R045_ReactstrapinputGroup extends Component {
    render(){
        return(
            <>
            <InputGroup>
                <Input placeholder="userId"/>
                <InputGroupAddon addonType="append">
                    <InputGroupText>@myeongwoon.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button>버튼</Button>
                </InputGroupAddon>
                <Input placeholder="010-0000-0000"/>
            </InputGroup>
            </>
        )
    }
}

export default R045_ReactstrapinputGroup;