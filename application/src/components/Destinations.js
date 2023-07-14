// components/Destinations.js
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Destinations = () => {
  return (
    <Container>
      <h2>Tourist Destinations</h2>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://example.com/destination-image4.jpg" />
            <Card.Body>
              <Card.Title>Destination 4</Card.Title>
              <Card.Text>
                Explore the wonders of Destination 4, with its breathtaking landscapes and cultural landmarks.
              </Card.Text>
              <Card.Text>Price: $500</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://example.com/destination-image5.jpg" />
            <Card.Body>
              <Card.Title>Destination 5</Card.Title>
              <Card.Text>
                Experience the beauty of Destination 5, with its stunning natural scenery and adventurous activities.
              </Card.Text>
              <Card.Text>Price: $700</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://example.com/destination-image6.jpg" />
            <Card.Body>
              <Card.Title>Destination 6</Card.Title>
              <Card.Text>
                Discover the magic of Destination 6, with its historical landmarks and vibrant cultural traditions.
              </Card.Text>
              <Card.Text>Price: $600</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Destinations;
