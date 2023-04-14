import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HornedBeast from './Hornedbeast';

class Main extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        <Container>
          <Row>
              {
                this.props.imageUrls.map(imageInfo => <HornedBeast info={imageInfo} />)
              }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;