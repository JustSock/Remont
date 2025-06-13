import { useEffect, useState, type FormEvent } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import useHttpLoader from '../../shared/hooks/useHttpLoader'
import reviewsApi from './reviews.api'
import type { IReview } from './reviews.types'
import Layout from '../../shared/Layout'

const Reviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([])
  const { wait } = useHttpLoader()
  useEffect(() => {
    wait(reviewsApi.getReviews(), (resp) => {
      setReviews(resp.results)
    })
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries()) as any
    wait(reviewsApi.addReview(data), (resp) => {
      console.log(resp)
      if (resp) {
        setReviews((prev) => [...prev, resp])
        form.reset()
      }
    })
  }

  return (
    <Layout isVerticallyCentered>
      <Container style={{ flex: '1 1 0' }}>
        <div className="row g-3">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="mb-3">Отзывы клиентов</h4>
            <div className="d-flex flex-column gap-3">
              {reviews &&
                reviews.map((item) => (
                  <Card key={item.id}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      {item.email && <Card.Subtitle className="mb-2 text-muted">{item.email}</Card.Subtitle>}
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Добавить отзыв</h4>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Введите email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="tel" placeholder="Введите телефон" name="phone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>Отзыв</Form.Label>
                <Form.Control as="textarea" type="textarea" placeholder="Введите отзыв" name="text" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Отправить
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Reviews
