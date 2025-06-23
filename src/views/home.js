import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Contact10 from '../components/contact10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rusty Normal Grasshopper</title>
        <meta property="og:title" content="Rusty Normal Grasshopper" />
      </Helmet>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text10">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Enroll Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text12">Empower Your Learning Journey</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text13">
              Discover a world of knowledge with our comprehensive courses and
              resources. Enroll now to unlock your potential!
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text14">Access to Resources</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text15">Resource Center</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text16">Enrollment Details</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text17">Course Details</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text18">
              Detailed course information including syllabus, schedule, and
              instructors.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text19">Enrollment Process</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        content1={
          <Fragment>
            <span className="home-text20">
              Explore our courses and start your learning journey today.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text21">Enroll Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text22">
              Explore a variety of resources such as study materials, videos,
              and interactive tools to enhance learning.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text23">
              Access detailed information about courses offered, including
              descriptions, schedules, and prerequisites.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text24">Easy Enrollment Process</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text25">
              Comprehensive Course Information
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text26">
              Simple and straightforward enrollment process for students
              interested in joining courses.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text27">Rich Learning Resources</span>
          </Fragment>
        }
      ></Features25>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text29">
              123 Education Street, Cityville, ABC 12345
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text30">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text31">
              456 Enrollment Avenue, Townsville, XYZ 67890
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text32">Main Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text33">Admissions Office</span>
          </Fragment>
        }
      ></Contact10>
    </div>
  )
}

export default Home
