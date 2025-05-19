import { useState, useEffect } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import JsonData from './data/data.json'
import Navigation from './pages/navigation/Navigation'
import Header from './pages/header/Header'
import Features from './pages/features/Features'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Gallery from './pages/gallery/Gallery'
import Testimonials from './pages/testimonials/Testimonials'
import Team from './pages/team/Team'
import Contact from './pages/contact/Contact'
import ScrollToTop from './components/scrollToTop/ScrollToTop'

function App() {
  const [landingPageData, setLandingPageData] = useState(null)

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])


  return (
    <>
    {
      landingPageData && (
        <>
        <Navigation title={landingPageData.navigation.title} navItems={landingPageData.navigation.navigationItems} />
        <Header title={landingPageData.header.title} subtitle={landingPageData.header.subtitle} button={landingPageData.header.button} />
        <Features title={landingPageData.features.title} subtitle={landingPageData.features.subtitle} features={landingPageData.features.features} />
        <About title={landingPageData.about.title} description={landingPageData.about.description} whyChooseUs={landingPageData.about.whyChooseUs} listItems={landingPageData.about.listItems} image={landingPageData.about.image} />
        <Services title={landingPageData.services.title} subtitle={landingPageData.services.subtitle} services={landingPageData.services.services} />
        <Gallery title={landingPageData.gallery.title} subtitle={landingPageData.gallery.subtitle} images={landingPageData.gallery.images} />
        <Testimonials title={landingPageData.testimonials.title} subtitle={landingPageData.testimonials.subtitle} testimonials={landingPageData.testimonials.testimonials} />
        <Team title={landingPageData.team.title} subtitle={landingPageData.team.subtitle} members={landingPageData.team.members} />
        <Contact title={landingPageData.contact.title} subtitle={landingPageData.contact.subtitle} info={landingPageData.contact.info} />
        <ScrollToTop />
        </>
      )
    }
    </>
  )
}

export default App
