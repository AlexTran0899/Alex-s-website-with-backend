import './App.css';
import profilepic from './IMG_0001.jpeg'
import { ScheduleOutlined, GithubOutlined, LinkedinOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { InlineWidget } from "react-calendly";
import { useState } from 'react';
import Popup from 'react-widget-popup';
import disableScroll from 'disable-scroll';

const data = [{
  image: 'https://i.ibb.co/Tc8RSLp/Screen-Shot-2021-09-01-at-4-15-16-PM-2.png',
  title: 'CodeSignal Cheat',
  link: 'https://codesignalcheat.herokuapp.com',
  description: 'Allows the user to find video solutions to codesignal challenges quickly.',
  roles: ['Create an extremely responsive react app that allows the user to get the correct solution to Codesignal arcade challenge quickly.', 
  'Work with React app to build a fully functional and responsive website for mobile and desktop view.']
},
{
  image: 'https://i.ibb.co/s38D5Wc/Screen-Shot-2021-09-01-at-8-11-11-PM.png',
  title: 'Human Rights First Asylum',
  link: 'https://a.humanrightsfirstasylum.dev',
  description: 'Potluck Planner is an app that allows organizers and attendees to efficiently plan their potluck events.',
  roles: ['Developed seeds and endpoints using Multer to upload asylum case files to Amazon S3, allowing data science server to scrape files and incorporate data regarding human rights asylum cases to be accessed by attorneys via cloud-based app ', 
  'Facilitated authorization between front end and data science server using Okta token, permitting Plotly visualizations of asylum data to be rendered to front end.', 'Built model and endpoints allowing editing of scraped data using Knex and PostgreSQL.  Backend maintained via Node.js', 'Restructured front end using AntDesign to accommodate the possibility of multiple judges per case.  Back end previously to only allow for one judge.  Restructured table design using Knex and PostgreSQL to accommodate new parameters.', 
  'Collaborate with multidisciplinary team of web and data science developers to bring app to final production'
]
},
{
  image: 'https://i.ibb.co/S6jZDL3/Screen-Shot-2021-09-01-at-5-08-25-PM.png',
  title: 'Potluck Planer',
  link: 'https://theonewhoknocks.herokuapp.com',
  description: 'Potluck Planner is an app that allows organizers and attendees to efficiently plan their potluck events.',
  roles: ['Collaborate with a team of 4 front end Web Developers and 2 back end Web Developers to build a fully functional web application in 1 week.','Solely responsible for creating seeds and building endpoints for project’s back end and server side functions.'
]
}]
disableScroll.on()
function App() {
  const [hover, sethover] = useState(false)
  const [cal, setcal] = useState(false)

  return (
    <div className="App">
      <div className="leftside">
        <Popup visible={cal} >
          <InlineWidget url="https://calendly.com/alextran0899/15min" className='cal' />
        </Popup>
        {data.map(project => {
          return (
            <div onClick={() => window.open(project.link)} onMouseEnter={() => sethover(project.title)} onMouseLeave={() => sethover(false)} className='projects' >
              {project.title === hover ? 
              <div>
                {project.roles.map(role => {
                  return(<li className='roles'>{role}</li>)
                })}

              </div> :
              <div className='inner'>
              <img src={project.image} className='photo' alt={project.title} />
              <div className='content'>
                  <h1 className='title'>{project.title}</h1>
                  <p className='description'>{project.description}</p>
                </div>
                </div>
               }
            </div>
          )
        })}
      </div>
      <div className="rightside" >
        <img src={profilepic} className='profilePic' alt='self portrait' />
        <h1 className='name'>Phuong Tran (Alex)</h1>
        <div className='skills'>
          <div className='language'>
            <div className='css'>
              <p>CSS</p>
            </div>
            <div className='javascript'>
              <p>Javascript</p>
            </div>
            <div className='htnl'>
              <p>HTML</p>
            </div>
            <div className='python'>
              <p>Python</p>
            </div>
          </div>

          <div className='storage'>
            <div className='AWS'>
              <p>AWS-S3</p>
            </div>
            <div className='Postgress'>
              <p>Postgress</p>
            </div>
            <div className='MySql'>
              <p>MySql</p>
            </div>
          </div>

          <div className='library'>
            <div className='react'>
              <p>React</p>
            </div>
            <div className='react'>
              <p>Ant Design</p>
            </div>
            <div className='react'>
              <p>Material Ui</p>
            </div>
          </div>





        </div>



        <div className='buttons'>
          <div className='col1'>
            <div className='box' onClick={() => window.open('https://www.linkedin.com/in/alex-tran-20b133b4/')}>
              <LinkedinOutlined style={{ fontSize: '2vw', outline: 'none' }} />
              <p className='clickable'>linkedin</p>
            </div>
            <div className='box' onClick={() => window.open('https://github.com/AlexTran0899')} >
              <GithubOutlined style={{ fontSize: '2vw', outline: 'none' }} />
              <p className='clickable'>Github</p>
            </div>
          </div>
          <div className='col2'>
            <div className='box' onClick={() => {setcal(!cal); window.scrollTo(0,0)}}>
              <ScheduleOutlined style={{ fontSize: '2vw', outline: 'none' }} />
              <p className='clickable'>Booking</p>
            </div>
            <div className='box'>
              <MailOutlined style={{ fontSize: '2vw', outline: 'none' }} />
              <p className='clickable'>Email</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
