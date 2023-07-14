import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Destinations = () => {
  return (
    <Container>
      <h2 className="text-center">Tourist Destinations</h2>
      <Row>
        {/* Card 1 */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT0-gv37oK3eKDUcG6jBe3KJ2iDvT9HNqLTLW2h7Ta11i0JaLuUyiD_MCtxWWIXGhee" />
            <Card.Body>
              <Card.Title>Manali</Card.Title>
              <Card.Text>
                Manali is a picturesque hill station nestled in the Himalayas, offering breathtaking views, adventure activities, and a serene escape for nature lovers.
              </Card.Text>
              <Card.Text>Price: $500</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTF9OtLxnbxSpLFzyhzXERKiAbnHlG25WfRzxRTNcRiTk0lHvsOXNKH9KNAOvTWi_sS" />
            <Card.Body>
              <Card.Title>London, England</Card.Title>
              <Card.Text>
                London, England, is a vibrant metropolis blending history, culture, and innovation, captivating visitors with its iconic landmarks and diverse cityscape.
              </Card.Text>
              <Card.Text>Price: $700</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRSUt8r4QBplLPw0rG44f2yNQzwz0utUq5ty0lHJLWow-2SFhSIoV5KeEx_SdCPfgpc" />
            <Card.Body>
              <Card.Title>Amsterdam</Card.Title>
              <Card.Text>
                Amsterdam, the capital city of the Netherlands, is a vibrant and cultural hub famous for its historic canals, artistic heritage, and progressive atmosphere.
              </Card.Text>
              <Card.Text>Price: $600</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 4 */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://www.travelcharacter.com/wp-content/uploads/2020/05/bangkok-travel-min.jpg" />
            <Card.Body>
              <Card.Title>Bangkok</Card.Title>
              <Card.Text>
              Glitterati and vibrant is how Bangkok can be described. With lots of floating markets and perfect nightlife, you are about to have the best time of your life at this amazing place. With ladyboys and temples.
              </Card.Text>
              <Card.Text>Price: $550</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 5 */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="http://www.travelcharacter.com/wp-content/uploads/2018/11/goblin-forest-1.jpg" />
            <Card.Body>
              <Card.Title>Great Barrier Reef</Card.Title>
              <Card.Text>
              One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ‘lavish’ and ‘beauty’. So if you want to see this grandeur of nature in Australia.
              </Card.Text>
              <Card.Text>Price: $750</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 6 */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="http://www.travelcharacter.com/wp-content/uploads/2018/11/hunaya-pichu-.jpg" />
            <Card.Body>
              <Card.Title>Machu Picchu</Card.Title>
              <Card.Text>
              Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular. 
              </Card.Text>
              <Card.Text>Price: $650</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Destinations;
