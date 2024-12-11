import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { homeSection } from "../data/HomeSection"
import '../styles/Home.css'

import parse from 'html-react-parser'

function Home() {
  return (
    <div>
        <Navbar />
        <div className="wrapper">
        <section id="home">
            <img src={homeSection.image} />
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        </div>
        <Footer />
    </div>
  )
}

export default Home
