import React from 'react';
import Children from './contextChildren.js';

const {Provider, Consumer } = React.createContext()
export {Consumer}

class R067_ContextApi extends React.Component {
    render() {
        return (
            <Provider value='react200'>
                <Children />
            </Provider>
        )
    }
}

export default R067_ContextApi;