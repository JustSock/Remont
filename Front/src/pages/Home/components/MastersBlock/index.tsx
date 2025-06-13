import { Container, Row, Col, Card } from 'react-bootstrap'
import type { IMaster } from '../../home.types'

interface IProps {
  masters: IMaster[]
}

const MastersBlock = (props: IProps) => {
  return (
    <div className="album py-5">
      <Container>
        <h2 className="text-center mb-4">Наши мастера</h2>
        <Row xs={1} md={4} className="g-4">
          {props.masters.map((item) => (
            <Col key={item.id}>
              <Card style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                transform: 'scale(1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MastersBlock
