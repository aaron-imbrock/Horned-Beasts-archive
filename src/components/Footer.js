import { Component } from 'react';

class Footer extends Component {
    render() {
        return <h1>Created by {this.props.creator}</h1>
    }
}

export default Footer;