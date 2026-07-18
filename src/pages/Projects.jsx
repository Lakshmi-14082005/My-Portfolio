import React from 'react'
import './projects.css'
import Noto from '../assets/NoTo-Website.mp4';
import college from '../assets/College.mp4';
import ToDo from '../assets/Student-ToDo List.mp4';
import Calculator from '../assets/Calculator.mp4';

const Projects = () => {
    return (
        <div className="projects-page">

            <section className="projects-container">

                {/* Project 1 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={Noto}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>NoTo - Student Material</h3>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                        </div>
                        <p>NoTo, Student Material <br />
                            Excited to share one of my projects — NOTO (Student Material Website)! <br />
                            I built a responsive frontend platform using HTML and CSS to organize and present student learning materials. The site features structured layouts, intuitive navigation, and responsive design, ensuring accessibility and consistent performance across desktops, tablets, and mobile devices.</p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/NoTo-website.git"
                                target="_blank"
                                rel="noreferrer"
                                className="github-btn"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://lakshmi-14082005.github.io/NoTo-website/"
                                target="_blank"
                                rel="noreferrer"
                                className="demo-btn"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={ToDo}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>Student To‑Do List</h3>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">React JS</span>
                        </div>
                        <p>✨ Excited to share my project Student To‑Do App — a web application designed to help students organize tasks and subtasks efficiently.
                            📌 Built with HTML, CSS, and JavaScript, the app supports:
                            Creating main tasks with deadlines
                            Adding subtasks for structured study planning
                            Visual hierarchy and clean UI for better focus
                            🚀 This project reflects my interest in web development and problem‑solving, turning everyday student needs into practical digital solutions.</p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/Student_To_Do_app.git"
                                target="_blank"
                                rel="noreferrer"
                                className="github-btn"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://lakshmi-14082005.github.io/Student_To_Do_app/"
                                target="_blank"
                                rel="noreferrer"
                                className="demo-btn"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={college}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>College Canteen Survey</h3>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">React JS</span>
                        </div>
                        <p>Thrilled to share that I have successfully completed Phase 1 of my latest project: a College Canteen Survey App built using React! 🍔🎒
                            For this initial phase, I focused heavily on building a robust, secure, and user-friendly authentication system. A seamless onboarding experience is crucial for any application, and I wanted to ensure the frontend logic handles it beautifully.
                            *Note: I'm currently keeping the Git repository private while the application is actively under development, but the complete source code will be made fully public as soon as the entire project is completed!*
                        </p>
                    </div>
                </div>
                {/* Project 4 */}
                <div className="project-card">
                    <div className="project-image">
                        <video
                            src={Calculator}
                            muted
                            autoPlay
                            loop
                            playsInline
                        />
                    </div>
                    <div className="project-info">
                        <h3>Calculator</h3>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">React JS</span>
                        </div>
                        <p>Excited to share my project "Calculator App with React I built a calculator app from scratch to get my hands dirty with React components, props, and state management.
                            It was a fantastic learning experience—from structuring the custom button layout to troubleshooting state updates and adding features like a backspace button. It’s not perfect, but it’s mine, and I’m proud of the progress made in just 72 hours!
                        </p>
                        {/* Example for one of your projects */}
                        <div className="project-links">
                            <a
                                href="https://github.com/Lakshmi-14082005/Calculator-App-with-React.git"
                                target="_blank"
                                rel="noreferrer"
                                className="github-btn"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://lakshmi-14082005.github.io/Calculator-App-with-React/"
                                target="_blank"
                                rel="noreferrer"
                                className="demo-btn"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Projects