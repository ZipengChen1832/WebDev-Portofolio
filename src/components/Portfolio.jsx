import React from 'react'

export default function Portfolio() {
  return (
    <main id="portfolio">
        <div className='shadow'>
            PORTFOLIO
            <h1>MY <span>WORKS</span></h1>
        </div>
        <section className="projects">
            <article className='project'>
                <div className='img-container' onClick={()=>{window.open("https://brandonchenreactecommerce.netlify.app")}}>
                    <img src='/images/ecommerce.png' alt='Ecommerce Site'></img>
                </div>
                <div className='desc'>
                    <div className='title'>E-Commerce Website</div>
                    <div className='skills'>
                        <span>React</span>
                        <span>Firebase Auth</span>
                        <span>React-Router-Dom v6</span>
                    </div>
                    <ul className='features'>
                        <li>Create accessible fitness e-commerce website with responsive design</li>
                        <li>Allow users to navigate through different pages by using react-router-dom v6</li>
                        <li>Categorize products and allows user to view selected category</li>
                        <li>Implemented user authentication by using firebase, each account stores its own data</li>
                        <li>Store user data such as shopping list and user info using firebase realtime database</li>
                    </ul>
                    <div className='links'>
                        <span onClick={()=>{window.open("https://brandonchenreactecommerce.netlify.app")}}>Visit Site</span>
                        <span onClick={()=>{window.open("https://github.com/ZipengChen1832/React-Ecommerce-Project")}}>View Code</span>
                    </div>
                </div>
            </article>
        </section>
    </main>
  )
}
