import React from 'react';
import { Container, Carousel, Card, Row, Col, Button, Breadcrumb } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn1.tripoto.com/media/filter/tst/img/2245490/Image/1659818510_friends_cover.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore the World</h3>
            <p>Discover new destinations and make lasting memories.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://travel.usnews.com/dims4/USNEWS/615d5f7/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLingxiao_XieGetty_Images_u6g9f3F.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Adventure Awaits</h3>
            <p>Embark on thrilling adventures and adrenaline-pumping experiences.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Explore</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Welcome to our Travel Website!</h2>
        <Row>
          <Col sm={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://www.travelcharacter.com/wp-content/uploads/2020/05/Bora-Bora.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Destination 1</Card.Title>
                <Card.Text>
                  Explore the beauty of Destination 1 with its mesmerizing landscapes and rich cultural heritage.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://viatravelers.com/wp-content/uploads/2022/12/Seine-River-Cruise-Paris-France.jpg.webp"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Destination 2</Card.Title>
                <Card.Text>
                  Experience the wonders of Destination 2 with its breathtaking natural attractions and vibrant city life.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://hellovisit.in/uploads/0000/1/2021/10/18/delhi-tour-package-1.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Destination 3</Card.Title>
                <Card.Text>
                  Immerse yourself in the charm of Destination 3, known for its serene beaches and delightful cuisine.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white mt-5 py-3">
        <Container>
          <p className="text-center mb-0">&copy; 2023 Travel Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
