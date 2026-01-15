import '../../components/AboutPage/AboutP'
import AboutP from '../../components/AboutPage/AboutP'
import OurStory from '@/components/AboutPage/OurStory'
import CoreValue from '@/components/AboutPage/CoreValue'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import OurTeam from '@/components/AboutPage/OurTeam'
import Success from '@/components/AboutPage/Success'
import Trusted from '@/components/AboutPage/Trusted'
const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <AboutP/>
    <OurStory/>
    <CoreValue/>
    <OurTeam/>
    <Success/>
    <Trusted/>
    <Footer/>
    </>
  )
}

export default AboutPage
