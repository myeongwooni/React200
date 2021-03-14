import React, {Component} from 'react';
import cookie from 'react-cookies';

class R087_cookieRemove extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('Angela', "Meow"
        , {
            path: '/',
            expires,
            //secure: true,
            // httpOnly: true
        });
        setTimeout(function() {
            alert(cookie.remove('Angie'))
        }, 1000);
        setTimeout(function() {
            alert(cookie.load('Angela'))
        }, 2000);
    }

    render() {
        return (
            <h3>react-cookies Load</h3>
        )
    }
}

export default R087_cookieRemove;