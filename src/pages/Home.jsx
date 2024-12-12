import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { homeSection } from "../data/HomeSection"
import { courseSection } from "../data/CourseSection"
import { tutorsSection, tutorList } from "../data/TutorsSection"
import { partnersSection, partnerList } from "../data/PartnersSection"
import Tutors from "../Components/Tutors"
import Partners from "../Components/Partners"
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
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorList={tutorList} />
            </div>
        </section>
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnerList={partnerList} />
            </div>
        </section>
        </div>
        <Footer />
    </div>
  )
}

export default Home
