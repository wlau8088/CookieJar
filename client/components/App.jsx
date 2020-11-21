import React, { Component } from 'react';
import { render } from 'react-dom';
import CookieJar from './CookieJar';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div>
            <h2>Welcome to the Cookie Jar</h2>
            <CookieJar />
        </div>
        );
    }
}

export default App;
