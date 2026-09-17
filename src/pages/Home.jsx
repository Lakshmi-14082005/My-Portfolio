import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/profile.jpeg';
import resume from '../assets/Resume.pdf';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="portfolio-img">
                <img className="portfolio" src={profile} alt="Lakshmi Prasanna Thota" />
            </div>
            <div className="introduction">
                <p className="text-xl text-blue-300 font-semibold mb-1">Hello, It's Me</p>
                <h1>Lakshmi Prasanna Thota</h1>
                <h2>
                    FullStack Web Developer &bull; CSE Student at <br />
                    Mother Teresa Institute of Science and Technology
                </h2>
                <p>
                    Passionate about building clean, scalable, and user-first web applications.
                    From designing responsive front-ends with React and Tailwind to structuring reliable codebases, I bring ideas to life with code.
                </p>

                <div className="home-cta">
                    <Link to="/projects" className="cta-btn-primary">
                        🚀 Explore Projects & Demos
                    </Link>
                    <a href={resume} download="Lakshmi_Prasanna_Resume.pdf" className="cta-btn-secondary">
                        📄 Download Resume
                    </a>
                    <Link to="/contact" className="cta-btn-secondary">
                        💬 Contact Me
                    </Link>
                </div>

                <div className="profile-links">
                    <a
                        href="https://linkedin.com/in/lakshmi-prasanna-thota-88a28740b"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={26} />
                    </a>

                    <a
                        href="https://github.com/Lakshmi-14082005"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={26} />
                    </a>

                    <a
                        href="mailto:thotalakshmiprasanna1408@gmail.com"
                        aria-label="Email Lakshmi Prasanna"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
