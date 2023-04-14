import { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
            <Card style={{ width: '18rem' }}>
                <div onClick={this.handleClick}>
                    <Row>
                        <Col md="auto"><p>{this.state.count}</p></Col>
                        <Col xs={5}><p>{this.props.info.title}</p></Col>
                    </Row>

                    <Image src={this.props.info.image_url} alt='some horned beast' rounded fluid />
                    <Col><p>{this.props.info.description}</p></Col>
                </div>
            </Container>
        );
    }
}

export default HornedBeast;