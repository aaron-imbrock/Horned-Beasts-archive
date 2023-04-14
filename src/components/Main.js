import { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Main extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        {
          this.props.imageUrls.map(imageInfo => <HornedBeast info={imageInfo} />)
        }
      </div>
    );
  }
}

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // NOTE: use arrow functions for event handlers to retain proper contextual "this"
  handleClick = () => {
    // want to flip the yay to nay or vice versa
    // in other words update state
    // It's a rule - you set state using the following method:
    const incrementCount = this.state.count + 1;
    
    this.setState({
      count: incrementCount
    });
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.count}</p>
        <p>{this.props.info.title}</p>
        <Image src={this.props.info.image_url} alt='some horned beast' rounded fluid />
        <p>{this.props.info.description}</p>

      </div>
    );
  }
}
export default Main;