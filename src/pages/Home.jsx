import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import profile from '../assets/profile.jpeg'
import './home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <div className="portfolio-img">
                <img className="portfolio" src={profile} alt="profile-img" />
            </div>
            <div className="introduction">
                <h2 className="text-3xl ...">Hello, It's Me</h2>
                <h1 className="text-6xl ...">Lakshmi Prasanna Thota</h1>
                <h2 className="text-3xl ...">And I'm a FullStack Web Developer | CSE Student at  <br />Mother Teresa Institute of Science and Technology </h2>
                <p className="text-xl ...">who builds clean, scalable, and user-first web applications.</p>
                <p className="text-xl ..."> From designing responsive front-ends to structuring robust back-ends,<br /> I bring ideas to life with code.</p>
                <div className="profile-links flex gap-10 mt-6 justify-center md:center">
                    <a
                        href="https://linkedin.com/in/lakshmi-prasanna-thota-88a28740b"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-10 text-white hover:text-sky-400 transition-colors duration-300"
                    >
                        <FaLinkedin size={32} />
                    </a>

                    <a
                        href="https://github.com/Lakshmi-14082005"
                        target="_blank"
                        rel="noreferrer"
                        className=" mt-10 text-white hover:text-gray-400 transition-colors duration-300"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Home
