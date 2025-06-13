import { Container, Image } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <footer className="pt-4 my-md-5 pt-md-5 border-top text-muted d-flex justify-content-between ">
        <p className="mb-0">Контактная информация - <a href="mailto:andrei.usynin@urfu.ru">andrei.usynin@urfu.me</a></p>
        <div className="d-flex flex-column align-items-center  justify-content-center">
          <p>Социальные сети</p>
          <div className="d-flex flex-row align-items-start gap-3">
            <a href="https://www.google.com">
              <Image style={{ height: '48px', width: '48px' }} roundedCircle src="/public/footer/tg.png"></Image>
            </a>
            <a href="https://www.google.com">
              <Image style={{ height: '48px', width: '48px' }} roundedCircle src="/public/footer/vk.png"></Image>
            </a>
          </div>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
