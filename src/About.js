import React, { Component } from 'react';
import qs from "stringquery";

class About extends Component {
    render() {

        console.log("Props: ", this.props);

        const params = qs(this.props.location.search);
        console.log(params);
        return (
            <div>
                <h1>I am the About</h1>
            </div>
        );
    }
}

export default About;