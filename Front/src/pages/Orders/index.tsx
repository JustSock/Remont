import { useState, type FormEvent } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import useHttpLoader from '../../shared/hooks/useHttpLoader'
import Layout from '../../shared/Layout'
import ordersApi from './orders.api'

const Orders = () => {
  const [formSub, setFormSub] = useState<boolean | null>()
  const { wait } = useHttpLoader()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries()) as any
    wait(ordersApi.addOrder(data), (resp) => {
      console.log(resp)
      if (resp) {
        setFormSub(Boolean(resp))
        form.reset()
      }
    })
  }

  return (
    <Layout isVerticallyCentered>
      <Container style={{ flex: '1 1 0' }}>
        <div className="row g-3">
          <div className="col-md-5 col-lg-4 order-md-last d-flex justify-content-center align-items-center">
            {formSub == true && <p className="text-success display-6 text-center">Заявка успешно отправлена</p>}
            {formSub == false && <p className="text-danger display-6 text-center">Заявка не отправлена</p>}
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Создать заявку</h4>
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
                <Form.Label>Тип услуги</Form.Label>
                <Form.Control placeholder="Введите тип услуги" name="type" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>Время</Form.Label>
                <input className="form-control" type="date" name="date" />
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

export default Orders
