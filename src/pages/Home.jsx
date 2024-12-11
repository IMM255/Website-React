import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { homeSection } from "../data/HomeSection"
import { courseSection } from "../data/CourseSection"
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
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>
        </div>
        <Footer />
    </div>
  )
}

export default Home
