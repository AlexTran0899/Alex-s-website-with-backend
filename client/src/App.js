import './App.css';
import profilepic from './IMG_0001.jpeg'
import { ScheduleOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { InlineWidget } from "react-calendly";
import { useState } from 'react';
import Popup from 'react-widget-popup';

const data = [{
  image: 'https://i.ibb.co/Tc8RSLp/Screen-Shot-2021-09-01-at-4-15-16-PM-2.png',
  title: 'CodeSignal Cheat',
  link: 'https://codesignalcheat.herokuapp.com',
  description: 'Allows the user to find video solutions to codesignal challenges quickly.',
},
{
  image: 'https://i.ibb.co/S6jZDL3/Screen-Shot-2021-09-01-at-5-08-25-PM.png',
  title: 'Potluck Planer',
  link: 'https://theonewhoknocks.herokuapp.com',
  description: 'Potluck Planner is an app that allows organizers and attendees to efficiently plan their potluck events.',
},
{
  image: 'https://i.ibb.co/s38D5Wc/Screen-Shot-2021-09-01-at-8-11-11-PM.png',
  title: 'Human Rights First Asylum',
  link: 'https://a.humanrightsfirstasylum.dev',
  description: 'Potluck Planner is an app that allows organizers and attendees to efficiently plan their potluck events.',
}
]
function App() {
  const [hover, sethover] = useState(false)
  const [cal, setcal] = useState(false)

  return (
    <div className="App">
      <div className="rightside" >
        <img src={profilepic} className='profilePic' alt='self portrait' />
        <div className='info'>
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
              <p>PostgreSQL</p>
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
              <p>Okta</p>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <div className='col1'>
            <div className='box' onClick={() => window.open('https://www.linkedin.com/in/alex-tran-20b133b4/')}>
              <LinkedinOutlined className='icon' style={{ }} />
              <p className='clickable'>linkedin</p>
            </div>
            <div className='box' onClick={() => window.open('https://github.com/AlexTran0899')} >
              <GithubOutlined className='icon'/>
              <p className='clickable'>Github</p>
            </div>
          </div>
          <div className='col2'>
            <div className='box' onClick={() => { setcal(!cal); window.scrollTo(0, 0) }}>
              <ScheduleOutlined className='icon'  />
              <p className='clickable'>Booking</p>
            </div>
            <a href="mailto: alextran0899@gmail.com" className='box'>

              <MailOutlined className='icon' />
              <p className='clickable'>Email</p>
            </a>
          </div>
        </div>

        </div>
      </div>
      <div className="leftside">
        <Popup visible={cal} >
          <InlineWidget url="https://calendly.com/alextran0899/15min" className='cal' />
        </Popup>
        {data.map(project => {
          return (
            <div onClick={() => window.open(project.link)} onMouseEnter={() => sethover(project.title)} onMouseLeave={() => sethover(false)} className='projects' >
                <div className='inner'>
                  <img src={project.image} className='photo' alt={project.title} />
                  <div className='content'>
                    <h1 className='title'>{project.title}</h1>
                    <p className='description'>{project.description}</p>
                  </div>
                </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
