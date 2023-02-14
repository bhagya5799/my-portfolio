import { Component } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMenuOpen } from 'react-icons/md'
import { ImCancelCircle } from 'react-icons/im'
import { Button } from 'react-bootstrap';
import './index.css'

class Header extends Component {
    state = {
        showMenu: false,
    }

    toggleMenu = () => {
        this.setState(prevState => ({ showMenu: !prevState.showMenu }))
    }

    CancelBtn = () => {
        this.setState({ showMenu: false })
    }

    render() {
        const { showMenu } = this.state
        return (
            <div className="headder-menu">
                <nav className="desktop">
                    <Link to="/" className="link-logo">
                        <div className="logo">
                            <img src='https://thumbs.dreamstime.com/b/letter-b-beauty-women-face-logo-design-vector-luxury-hair-treatment-logo-letter-b-beauty-women-face-logo-design-vector-195397026.jpg'
                                height="120px" />
                            MY<span className="india">PROFILE</span>
                        </div>

                    </Link>
                    <ul className="nav-list">
                        <Link to="/" className="link-home">
                            <li>
                                <button className="home" type="button">
                                    HOME
                                </button>
                            </li>
                        </Link>
                        <Link to="/about" className="link-about">
                            <li>
                                <button className="about" type="button">
                                    ABOUT
                                </button>
                    
                            </li>
                        </Link>
                        <Link to="/projects" className="link-route">
                            <li>
                                <button className="link-route" type="button">
                                    Projects
                                </button>
                            </li>
                        </Link>
                        <Link to="/contact" className="link-route">
                            <li>
                                <button className="link-route" type="button">
                                    Contact
                                </button>
                            </li>
                        </Link>
                    
                    </ul>
                    <button
                        className="Mobile-view"
                        onClick={this.toggleMenu}
                        type="button"
                    >
                        <MdOutlineMenuOpen />
                    </button>
                </nav>
                {showMenu ? (
                    <nav className="desktop">
                        <ul className="nav-list-mobile">
                            <Link to="/" className="link-home">
                                <li>
                                    <button className="home" type="button">
                                        HOME
                                    </button>
                                </li>
                            </Link>
                            <Link to="/about" className="link-about">
                                <li>
                                    <button className="about" type="button">
                                        ABOUT
                                    </button>
                                </li>
                            </Link>
                            <Link to="/projects" className="link-route">
                                <li>
                                    <button className="link-route" type="button">
                                        Projects
                                    </button>
                                </li>
                            </Link>
                            <Link to="/contact" className="link-route">
                                <li>
                                    <button className="link-route" type="button">
                                        Contact
                                    </button>
                                </li>
                            </Link>

                     

                        </ul>

                        <button
                            className="Mobile-view"
                            onClick={this.CancelBtn}
                            type="button"
                        >
                            <ImCancelCircle />
                        </button>
                    </nav>
                ) : null}
            </div>
        )
    }
}

export default Header
