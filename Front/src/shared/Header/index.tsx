import { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthModal from '../Auth'

const Header = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuth(Boolean(token))
  }, [])

  const handleClose = () => {
    const token = localStorage.getItem('token')
    setIsAuth(Boolean(token))
    setOpenAuthModal(false)
  }

  const handleExit = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
  }

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              ВсемРемонт
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link className="nav-link" to={'/reviews'}>
                  Оставить отзыв
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to={'/orders'}>
                  Создать заявку
                </Link>
              </Nav.Item>
            </Nav>
            {!isAuth ? (
              <Button variant="outline-primary" onClick={() => setOpenAuthModal(true)}>
                Вход
              </Button>
            ) : (
              <Button variant="outline-danger" onClick={handleExit}>
                Выход
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AuthModal onClose={handleClose} open={openAuthModal} />
    </>
  )
}

export default Header
