import React from 'react'
import ReactLogo from './animation/ReactLogo'
import {FaQuestion} from 'react-icons/fa'

export default function About() {
  return (
    <main id="about">
      <div className='shadow'>
        ABOUT
        <h1>ABOUT <span>ME</span></h1>
      </div>

      <section className='about-me'>
        <article className='paragraph'>
          <h1>Background</h1>
          <p>
            I am a web developer specializing in front-end development. I am experienced with React Native and 
            have built multiple sites with it. The most common core concepts I have demonstrated in my sites include: 
            CRUD operations, react hooks, and react router. I've also learned to incorporate third-party apps such as
            firebase to add more utility to my projects.
            <br/>
            <br/>
            I am also proficient with using HTML, CSS to design and create a UI that is easy for the users to 
            navigate through. Additionally, I can add animation and other cool effects to make the site more stylish.
          </p>
        </article>
        <div className='anime-container'>
          <ReactLogo/>
        </div>
      </section>

      <section className='about-me'>
        <article className='paragraph'>
          <h1>Why Pick Me?</h1>
          <p>
            Besides the knowledge and skills that I currently have, I am also a very fast learner. On the journey of
            building my portoflio, I've encountered difficulties and things I don't know. But I was able to research,
            as a programmer should, and resolve the issues. I can quickly learn and adapt to new frameworks in this fast-paced,
            ever-evolving technology industry.
            <br/><br/>
            I am also a strong team player. I've worked on projects with several other members under a strict deadline.
            We were able to cooperate and communicate with each other's idea and finish the work in a professional and 
            timely manner. 
          </p>
        </article>
        <div className='anime-container'>
          <FaQuestion className='question-mark'/>
        </div>
      </section>
    </main>
  )
}
