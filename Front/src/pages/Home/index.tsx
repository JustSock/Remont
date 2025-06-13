import ServiceBlock from './components/ServiceBlock'
import Gallery from './components/Gallery'
import { useEffect, useState } from 'react'
import homeApi from './home.api'
import useHttpLoader from '../../shared/hooks/useHttpLoader'
import MastersBlock from './components/MastersBlock'
import type { IMaster } from './home.types'
import Layout from '../../shared/Layout'
import type { IGallery } from './components/Gallery/gallery.types'

const Home = () => {
  const [masters, setMasters] = useState<IMaster[]>([])
  const [gallery, setGallery] = useState<IGallery[]>([])
  const { wait } = useHttpLoader()

  useEffect(() => {
    wait(homeApi.getMasters(), (resp) => {
      setMasters(resp.results)
    })
    wait(homeApi.getGallery(), (resp) => {
      setGallery(resp.results)
    })
  }, [])
  return (
    <Layout>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="font-weight-light">Ремонт. Успех. Надежность. </h1>
            <p className="lead text-muted">Качественный ремонт и отличное обслуживание ваших квартир.</p>
          </div>
        </div>
      </section>
      <ServiceBlock />
      <Gallery gallery={gallery} />
      <MastersBlock masters={masters} />
    </Layout>
  )
}

export default Home
