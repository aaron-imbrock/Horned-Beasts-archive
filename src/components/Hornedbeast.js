import { Component } from 'react';

class HornedBeast extends Component {
    render() {
        return (
        <>
            <h2>{this.props.title}</h2>
            <img src={this.props.image} alt={this.props.alt} title={this.props.title}></img>
            <p>{this.props.description}</p>
        </>
        )
    }
}

export default HornedBeast;