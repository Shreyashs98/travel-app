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
            src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_230,q_auto,w_305/v1/filestore/ow16k8n3gykav9x3vop581fi9c68_shutterstock_1308414568.jpg"
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
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://www.travelcharacter.com/wp-content/uploads/2020/05/Bora-Bora.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Bora Bora Island</Card.Title>
                <Card.Text>
                  
Bora Bora Island is a breathtaking tropical paradise known for its turquoise waters, white sandy beaches, and luxurious overwater bungalows.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://viatravelers.com/wp-content/uploads/2022/12/Seine-River-Cruise-Paris-France.jpg.webp"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Paris</Card.Title>
                <Card.Text>
                The Eiffel Tower is an iconic symbol of Paris and a masterpiece of engineering, attracting millions of visitors with its elegance and panoramic views.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://hellovisit.in/uploads/0000/1/2021/10/18/delhi-tour-package-1.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Red Fort</Card.Title>
                <Card.Text>
                The Red Fort, a UNESCO World Heritage Site, is an iconic Mughal fortress in Delhi, India, known for its majestic red sandstone walls and intricate architectural details.
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
