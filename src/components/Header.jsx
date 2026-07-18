import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container" >
                <div className="intro">
                    <span className='text-4xl ...'>Portfolio</span>
                </div>
                <div className="nav-bar">
                    <nav className='Menu-bar'>
                        <Link to='/' className="menu-item">Home</Link>
                        <Link to='/about' className="menu-item ">About Me</Link>
                        <Link to='/projects' className="menu-item ">Projects</Link>
                        <Link to='/skills' className="menu-item ">Skills</Link>
                        <Link to='/contact' className=" menu-item ">Contact Me</Link>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header 