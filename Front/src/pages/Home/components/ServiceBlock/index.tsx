import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ServiceBlock = () => {
  const body = [
    {
      title: 'Стены',
      imageSrc: '../../../../../public/service/walls.png',
      to: '/walls',
    },
    {
      title: 'Полы и потолки',
      imageSrc: '../../../../../public/service/floor.png',
      to: '/floor',
    },
    {
      title: 'Сантехника и электрика',
      imageSrc: '../../../../../public/service/plumbing.png',
      to: '/plumbing',
    },
  ]

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Наши услуги по ремонту</h2>
        <Row xs={1} md={3} className="g-4">
          {body.map((item, index) => (
            <Col key={index}>
              <Card className="text-center">
                <Card.Header>
                  <Card.Title style={{ margin: '8px 0' }}>{item.title}</Card.Title>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  style={{
                    borderRadius: 0,
                    maxWidth: '356px',
                    maxHeight: '220px',
                    objectFit: 'cover',
                    alignSelf: 'center',
                  }}
                  src={item.imageSrc}
                />
                <Card.Body>
                  <Card.Text>
                    <Link to={item.to}>
                      <Button variant="secondary">Узнать больше</Button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ServiceBlock
