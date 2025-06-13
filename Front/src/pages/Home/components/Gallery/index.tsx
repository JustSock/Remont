import { Container, Row, Col, Image } from 'react-bootstrap'
import type { IGallery } from './gallery.types'

interface IProps {
  gallery: IGallery[]
}

const Gallery = (props: IProps) => {
  return (
    <div className="album py-5">
      <Container>
        <h2 className="text-center mb-4">Галерея предоставляемых услуг</h2>
        <Row className="d-flex justify-content-center">
          {props.gallery.map((item) => (
            <Col className="d-flex justify-content-center " xs={4} key={item.id}>
              <Image style={{ width: '100%' }} src={item.image} rounded />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Gallery
