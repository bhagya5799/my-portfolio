import React from 'react'
import Header from '../Header'

import { FaArrowCircleDown, FaArrowCircleRight } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import './index.css'
import Footer from '../Footer'

const Projects = () => {
    return (
        <div className='projects-container'>
            <Header />
            
            <div className='project-card'>
                
                <h3>My projects <i><FaArrowCircleDown /></i></h3>
                <div className='d-flex flex-wrap justify-content-between'>
                <div className='card'>
                    <div className='Details'>
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png" height="100%" width="100%"  alt="banner" />
                    </div>
                    <div className='button-cart'>
                        <Button variant="dark">
                            <a href="https://github.com/bhagya5799/food-resturant-project" alt="image"><i> github<AiFillGithub /></i></a>
                        </Button>{' '}
                        <Button variant="dark">
                            <a href="https://chimerical-alfajores-d2e4b9.netlify.app/"><i>FoodMuch site<FaArrowCircleRight /></i></a>
                        </Button>{' '}
                    </div>
                </div>
                <div className='card'>
                    <div className='Details'>
                            <img src="https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b" height="100%" width="100%"  alt="gitImage"/>
                    </div>
                    <div className='button-cart'>
                        <Button variant="dark">
                                <a href="hhttps://github.com/bhagya5799/assinment-nexttrends-cart"><i> github<AiFillGithub /></i></a>
                        </Button>{' '}
                        <Button variant="dark">
                                <a href="https://ecommerceweb230.ccbp.tech/"><i>E-commerce site<FaArrowCircleRight /></i></a>
                        </Button>{' '}
                    </div>
                </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://www.oflox.com/blog/wp-content/uploads/2020/09/WhatsApp-Chat-Design-Template.png" height="100%" width="100%" alt="chatImage" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/exact-space-chat-app-assinmnet"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://beautiful-kelpie-ab3b4d.netlify.app/"><i>ChatBoot site<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qdgmb80lrLYFaldRbLeSJfFAr8ONGoLMJsnEFju993Ojd7hDG3e8VZn6BTplrGhCU28&usqp=CAU" height="100%" width="100%"  alt="covid"/>
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/covid-dashboard"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://coviddash234.ccbp.tech/"><i>Covid19 site<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>

                    <div className='card'>
                        <div className='Details'>
                            <img src="https://img.freepik.com/premium-vector/cartoon-math-chalkboard-background_23-2148154590.jpg?w=2000" height="100%" width="100%" alt="Mern" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/spirtle-front-end-assignment"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://astonishing-dasik-376319.netlify.app"><i>Mern site<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp" height="100%" width="100%" alt="todo" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/covid-dashboard"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://bhagyatodo.ccbp.tech/"><i>Todo Application site<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://play-lh.googleusercontent.com/B_wM_AK9epBhYhAJNnXhsGsZVLnsa_1AD_r_4QWaqH7Nt22TRe7RQGGw7MVily2vzA" height="100%" width="100%" alt="jobby" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/joby-app"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://appjobyy.ccbp.tech/"><i>JobbyApp  site<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" height="100%" width="100%" alt="wiki" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/joby-app"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://wkl.ccbp.tech/"><i>Wiki Search  site<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg" height="100%" width="100%" alt="calcualtor" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/calculator-react"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://mellow-gecko-c6c90a.netlify.app/"><i>Calculator<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://res.cloudinary.com/bhagya/image/upload/v1678942916/Screenshot_44_vwfxev.png" height="100%" width="100%" alt="static" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/wiztric-responsive-website"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://poetic-kitten-3099e5.netlify.app/"><i>static website<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://res.cloudinary.com/bhagya/image/upload/v1678943418/Screenshot_45_wmbutq.png" height="100%" width="100%" alt="login-img"  />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/finlock-frontend--assignment"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="hhttps://hilarious-khapse-bbd1de.netlify.app/login"><i> signup Form<FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Details'>
                            <img src="https://res.cloudinary.com/bhagya/image/upload/v1680757469/Screenshot_48_hpcpf3.png" height="100%" width="100%" alt="login-img" />
                        </div>
                        <div className='button-cart'>
                            <Button variant="dark">
                                <a href="https://github.com/bhagya5799/Incometax-calculation"><i> github<AiFillGithub /></i></a>
                            </Button>{' '}
                            <Button variant="dark">
                                <a href="https://spiffy-rabanadas-24a18c.netlify.app/"><i> Tax Calculation <FaArrowCircleRight /></i></a>
                            </Button>{' '}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Projects

