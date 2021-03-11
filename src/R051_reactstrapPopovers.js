import React, {Component} from 'react';
import {Button, UncontrolledPopover ,PopoverHeader, PopoverBody} from 'reactstrap';

class R051_reactstrapPopovers extends Component {
    render(){
        return(
            <>
            <Button id="Popover_id" type="button" color="warning">
                Popover button
            </Button>
            <UncontrolledPopover placement="right" target="Popover_id">
                <PopoverHeader>Hello!</PopoverHeader>
                <PopoverBody>This is Angie!</PopoverBody>
            </UncontrolledPopover>
            
            <h5 id="Popover_2">Pop!</h5>
            <UncontrolledPopover placement="right" target="Popover_2">
                <PopoverHeader>Hi!</PopoverHeader>
                <PopoverBody>THis is ME!</PopoverBody>
            </UncontrolledPopover>

            </>
        )
    }
}

export default R051_reactstrapPopovers;