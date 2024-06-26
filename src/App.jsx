// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  CssBaseline,
  Box,
  Divider
}
from '@mui/material';
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const technicalSkills = [
  {
    category: 'Test Management Tools',
    skills: ["Jira"]
  },
  {
    category: 'Test Automation',
    skills: [" Cypress, Selenium, Playwright"]
  },
  {
    category: 'Database Skills',
    skills: ["MySql, MongoDB"]
  },
  {
    category: 'API Testing Tools',
    skills: ["PostMan, Insomnia"]
  },
  { 
    category: 'Languages',
    skills: ['JavaScript, HTML, CSS, React ']
  },
  {
    category: 'Other',
    skills: ['XML, JSON']
  }
]
const jobSummaries = [
  {
    Position: "Freelance Manual QA Tester",
    Date: "April 2024-Present",
    company: 'Self-employed',
    Location: "online",
    Bullets: [
       "Currently working for several companies such as Tester Work, Upwork, Utest as a freelance contractor where I perform funstional testing for clients on many types of websites."
    ]
  },
  {
    Position: "Full Stack Coding Program",
    Date: "December of 2023-March 2024",
    company: 'University of Texas at Austin',
    Location: "Austin, Texas",
    Bullets: [
     "An intense hands-on education with a focus on the MERN stack. Where students were tasked with creating over 10 real life applications and working together to simulate a future work environment" 
    ]
  },
  {
    Position: "Manual QA Tester / Consultant",
    Date: "May 2023-December 2023",
    company: 'Precision Camera',
    Location: "Austin, Texas",
    Bullets: ["Testing and incorporating new technologies for the company website and in store products. I helped ensure that our quality both online and in the store was kept to the highest standards, while also providing superior customer service",

      "Tested, researched, and implemented the newest technology of over 50 brands for photography and video software" ,
      "Manually tested functionality of the company site ensuring checkout and payment accuracy" ,
      "Operated and manually tested the POS (Point of Sale) software, including running daily sales and finance reports", 
      "Provided superior customer service and helped increase sales 28% over 6 months" ,
      "Successfully helped over 40 clients achieve proficiency in camera and video software during private consultations",
      
    ]
  },
  {
    Position: "Manual QA Tester",
    Date: "March 2022-March 2023",
    company: 'PaintTube.tv',
    Location: "Austin, Texas",
    Bullets: [
      "I conducted testing on the website for live events, employing functionality, UI, smoke, regression, and acceptance testing. I was also responsible for UI web videos client navigation. My responsibilities also encompassed camera operations, editing, broadcast duties, and helping to create individual artist videos",

"Provided critical software support for live streaming events on the website including client login authentication", 
"Manually tested and executed test cases for the company website using functionality testing, UI testing, regression testing, and user acceptance testing, helping to achieve a 25% faster response time during streaming and live events", 
"Created walk through videos to instruct Users how to navigate the website during live event broadcasts", 
"Assisted in filming and editing over 200 videos for the website",
    ]
  },
  {
    Position: "Consultant",
    Date: "2015-2022",
    company: 'Self-employed',
    Location: "Los Angeles, California",
    Bullets: [
      "Successfully helped over 150 companies achieve website and broadcast video including MTV, FOOD Network, ABC, NBC, ESPN, AMAZON studios, VH1, FOX, SONY, DISCOVERY Channell, VIACOM, and many others",
"Led entire crews in the technical field of video editing, set operations and production departments"
    ]
  },
]
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar 
        mode="light"
        navbarLinks={["Profile", "About","Experience","Projects","Contact"]}
      />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Profile
          name="John Dennis"
          role="QA Engineer"
          githubUrl="https://github.com/JohnDennis2"
        />
        <About
          certifications={[
            'Full Stack Coding Bootcamp – University of Texas at Austin',
            
          ]}
          education={{
            educationOrganization:"University of Texas at Austin",
            degreee:"Professional Certificate",
            date:"2024",
            educationOrganization:"University of North Texas",
            degreee:"B.S. in Communications",
            date:"2005"
          }}
          summary={"Collaborative, flexible, and business-focused Software Quality Specialist with a strong leadership background.  Detail-oriented with the ability to thoroughly analyze systems, identify risks, and formulate testing strategies to satisfy business requirements."}
        />
        <Experience
          technicalSkills={technicalSkills}
          jobSummaries={jobSummaries}
        />
        <Projects
          projects={[
            {
              imgUrl:"",
              projectName:"DaTA Translator App",
              projectDescription: "Translation APP that utilizes API calls",
              linkCta: "Join Now",
              linkUrl: "https://johndennis2.github.io/translateAPP/"
            },
            {
              imgUrl:"",
              projectName:"Culinary Quest",
              projectDescription: "A website that lets Users find culinary bucket checklist and create their own.  The prject utilized API calls.  Both front and back end technolgies were used to make a full application. It is still a work in progess",
              linkCta: "Join Now",
              linkUrl: "https://culinary-quest-ac4ebe5a624a.herokuapp.com/"
            },
            {
              imgUrl:"",
              projectName:"Job Search APP",
              projectDescription: "The idea for this website is a job search app that acts like a dating app. Users are able to like jobs, which are filed under their saved jobs and an email sent to employers that conatians their resume",
              linkCta: "",
              linkUrl: "https://job-dating-app-f25db19353ff.herokuapp.com/login"
            }
          ]}
        />
        <Divider/>
        <Contact
          email={"johnd555@gmail.com"}
          linkedInUrl={"https://www.linkedin.com/in/john-dennis-tech/"}
        />
        
      </Box>
    </>
  )
}

export default App
