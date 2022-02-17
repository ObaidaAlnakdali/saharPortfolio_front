import React from 'react'
import Header from '../component/visitor/Header'
import Project from '../component/visitor/Project'
import Skills from '../component/visitor/Skills'
import { FaWhatsapp } from 'react-icons/fa';
import './Style/HomePage.css'

const HomePage = () => {
    return (
        <div>
            <a href='https://wa.me/96170115970' >
                <FaWhatsapp color="green" className="fab fa-whatsapp whatsupp-icon" size="5em" />
            </a>
            <Header />
            <div class="projects" >
                <h1 className='section-title'>Projects</h1>
                <section>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <a href='s' >Explor more...</a>
                </section>

                <div class="skill-section">
                    <h1 className='section-title'>Skills</h1>
                    <div class="skillLineone">
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage