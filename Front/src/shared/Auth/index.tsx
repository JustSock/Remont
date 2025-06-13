import { useState, type FormEvent } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import useHttpLoader from '../hooks/useHttpLoader'
import authApi from './auth.api'

interface IProps {
  onClose: () => void
  open: boolean
}

const AuthModal = (props: IProps) => {
  const [valid, setValid] = useState(true)
  const { wait } = useHttpLoader()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries()) as any
    wait(authApi.auth(data), (resp) => {
      if (resp) {
        setValid(true)
        localStorage.setItem('token', resp.token)
        props.onClose()
        form.reset()
      } else {
        setValid(false)
        form.reset()
      }
    })
  }

  return (
    <Modal show={props.open} onHide={props.onClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Авторизоваиться</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control type="username" placeholder="Введите ваше имя" name="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Пароль пользователя</Form.Label>
            <Form.Control type="password" placeholder="••••••••" name="password" />
          </Form.Group>
          {!valid && <p className="text-danger">Не верные данные</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onClose}>Закрыть</Button>
          <Button variant="primary" type="submit">
            Авторизоваиться
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AuthModal
