import type { PropsWithChildren } from 'react'
import css from './layout.module.css'
import Header from '../Header'
import Footer from '../Footer'

interface IProps {
  isVerticallyCentered?: boolean
}

const Layout = ({ isVerticallyCentered = false, children }: PropsWithChildren<IProps>) => {
  return (
    <div className={css.body + ' ' + css.container} data-isVerticallyCentered={isVerticallyCentered}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
