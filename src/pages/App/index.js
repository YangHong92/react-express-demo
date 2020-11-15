import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect,
    NavLink
} from 'react-router-dom';
import _ from 'lodash';
import Chart from '../Chart';
import Dashboard from '../Dashboard';

import AOS from 'aos';
import 'aos/dist/aos.css';

import about from "../../assets/img/about.jpg";
import client_1 from "../../assets/img/clients/client-1.png";
import client_2 from "../../assets/img/clients/client-2.png";
import client_3 from "../../assets/img/clients/client-3.png";
import client_4 from "../../assets/img/clients/client-4.png";
import client_5 from "../../assets/img/clients/client-5.png";
import client_6 from "../../assets/img/clients/client-6.png";

import portfolio_1 from "../../assets/img/portfolio/portfolio-1.jpg";
import portfolio_2 from "../../assets/img/portfolio/portfolio-2.jpg";
import portfolio_3 from "../../assets/img/portfolio/portfolio-3.jpg";
import portfolio_4 from "../../assets/img/portfolio/portfolio-4.jpg";
import portfolio_5 from "../../assets/img/portfolio/portfolio-5.jpg";
import portfolio_6 from "../../assets/img/portfolio/portfolio-6.jpg";
import portfolio_7 from "../../assets/img/portfolio/portfolio-7.jpg";
import portfolio_8 from "../../assets/img/portfolio/portfolio-8.jpg";
import portfolio_9 from "../../assets/img/portfolio/portfolio-9.jpg";

import team_1 from "../../assets/img/team/team-1.jpg";
import team_2 from "../../assets/img/team/team-2.jpg";
import team_3 from "../../assets/img/team/team-3.jpg";

import '../../styles/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileNavClosed: true
        }
        this.mobileNavToggler = this.mobileNavToggler.bind(this);
    }

    componentDidMount() {
        AOS.init({ duration: 2000 });
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    mobileNavToggler(e){
        e.preventDefault();
        const {isMobileNavClosed} = this.state;
        this.setState({
            isMobileNavClosed: !isMobileNavClosed
        })
    }

    render() {
        const {isMobileNavClosed} = this.state;
        return (
            <div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                        <h1 className="logo mr-auto"><a href="#hero">Day</a></h1>
                        
                        <nav className="mobile-nav d-lg-none" style={isMobileNavClosed ? {} : {visibility: 'visible', opacity: 1}}>
                            <ul>
                                <li className="active">
                                    <a href="#hero">Home</a>
                                </li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li>
                                    <NavLink to="/s">
                                        <i className="fa fa-user-o"></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button type="button" className="mobile-nav-toggle d-lg-none" onClick={this.mobileNavToggler}>
                            <i className={`fa ${isMobileNavClosed ? 'fa-bars' : 'fa-times'}`}></i>
                        </button>
                        <div className="mobile-nav-overly" style={isMobileNavClosed ? {display: 'none'} : {display: 'block'}}></div>

                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li className="active">
                                    <a href="#hero">Home</a>
                                </li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#team">Team</a></li>
                                {/* <li className="drop-down"><a href="">Drop Down</a>
                                    <ul>
                                        <li><a href="#">Drop Down 1</a></li>
                                        <li className="drop-down"><a href="#">Deep Drop Down</a>
                                            <ul>
                                                <li><a href="#">Deep Drop Down 1</a></li>
                                                <li><a href="#">Deep Drop Down 2</a></li>
                                                <li><a href="#">Deep Drop Down 3</a></li>
                                                <li><a href="#">Deep Drop Down 4</a></li>
                                                <li><a href="#">Deep Drop Down 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Drop Down 2</a></li>
                                        <li><a href="#">Drop Down 3</a></li>
                                        <li><a href="#">Drop Down 4</a></li>
                                    </ul>
                                </li> */}
                                <li><a href="#contact">Contact</a></li>
                                <li>
                                    <NavLink to="/s">
                                        <i className="fa fa-user-o"></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>


                <section id="hero" className="d-flex align-items-center">
                    <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
                        <h1>Welcome to Day</h1>
                        <h2>We are team of talanted designers making websites with Bootstrap</h2>
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    </div>
                </section>

                <main id="main">


                    <section id="about" className="about">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                                    <img src={about} className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="why-us" className="why-us">
                        <div className="container">

                            <div className="row">

                                <div className="col-lg-4" data-aos="fade-up">
                                    <div className="box">
                                        <span>01</span>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
                                    <div className="box">
                                        <span>02</span>
                                        <h4>Repellat Nihil</h4>
                                        <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                                    <div className="box">
                                        <span>03</span>
                                        <h4> Ad ad velit qui</h4>
                                        <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    <section id="clients" className="clients">
                        <div className="container" data-aos="zoom-in">

                            <div className="row d-flex align-items-center">

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={client_1} className="img-fluid" alt="" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={client_2} className="img-fluid" alt="" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={client_3} className="img-fluid" alt="" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={client_4} className="img-fluid" alt="" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={client_5} className="img-fluid" alt="" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={client_6} className="img-fluid" alt="" />
                                </div>

                            </div>

                        </div>
                    </section>


                    <section id="services" className="services">
                        <div className="container">

                            <div className="section-title">
                                <span>Services</span>
                                <h2>Services</h2>
                                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <h4><a href="">Lorem Ipsum</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h4><a href="">Sed ut perspiciatis</a></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                                        <h4><a href="">Magni Dolores</a></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-world"></i></div>
                                        <h4><a href="">Nemo Enim</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-slideshow"></i></div>
                                        <h4><a href="">Dele cardo</a></h4>
                                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-arch"></i></div>
                                        <h4><a href="">Divera don</a></h4>
                                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="cta" className="cta">
                        <div className="container" data-aos="zoom-in">

                            <div className="text-center">
                                <h3>Call To Action</h3>
                                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a className="cta-btn" href="#">Call To Action</a>
                            </div>

                        </div>
                    </section>

                    <section id="portfolio" className="portfolio">
                        <div className="container">

                            <div className="section-title">
                                <span>Portfolio</span>
                                <h2>Portfolio</h2>
                                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                            </div>

                            <div className="row" data-aos="fade-up">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-card">Card</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="150">

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <img src={portfolio_1} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <a href={portfolio_1} data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <img src={portfolio_2} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <a href={portfolio_2} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <img src={portfolio_3} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <a href={portfolio_3} data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src={portfolio_4} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <a href={portfolio_4} data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <img src={portfolio_5} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <a href={portfolio_5} data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <img src={portfolio_6} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <a href={portfolio_6} data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src={portfolio_7} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <a href={portfolio_7} data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src={portfolio_8} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <a href={portfolio_8} data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <img src={portfolio_9} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <a href={portfolio_9} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="pricing" className="pricing">
                        <div className="container">

                            <div className="section-title">
                                <span>Pricing</span>
                                <h2>Pricing</h2>
                                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="150">
                                    <div className="box">
                                        <h3>Free</h3>
                                        <h4><sup>$</sup>0<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li className="na">Pharetra massa</li>
                                            <li className="na">Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in">
                                    <div className="box featured">
                                        <h3>Business</h3>
                                        <h4><sup>$</sup>19<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li>Pharetra massa</li>
                                            <li className="na">Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                                    <div className="box">
                                        <h3>Developer</h3>
                                        <h4><sup>$</sup>29<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li>Pharetra massa</li>
                                            <li>Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="team" className="team">
                        <div className="container">

                            <div className="section-title">
                                <span>Team</span>
                                <h2>Team</h2>
                                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                    <div className="member">
                                        <img src={team_1} alt="" />
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                    <div className="member">
                                        <img src={team_2} alt="" />
                                        <h4>Sarah Jhinson</h4>
                                        <span>Product Manager</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                    <div className="member">
                                        <img src={team_3} alt="" />
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="contact" className="contact">
                        <div className="container">

                            <div className="section-title">
                                <span>Contact</span>
                                <h2>Contact</h2>
                                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                            </div>

                            <div className="row" data-aos="fade-up">
                                <div className="col-lg-6">
                                    <div className="info-box mb-4">
                                        <i className="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info-box  mb-4">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>contact@example.com</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info-box  mb-4">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row" data-aos="fade-up">

                                <div className="col-lg-6 ">
                                    <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{ border: 0, width: '100%', height: '384px' }} allowFullScreen></iframe>
                                </div>

                                <div className="col-lg-6">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                <div className="validate"></div>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>

                </main>


                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <div className="footer-info">
                                        <h3>Day</h3>
                                        <p>
                                            A108 Adam Street <br />
                                            NY 535022, USA<br /><br />
                                            <strong>Phone:</strong> +1 5589 55488 55<br />
                                            <strong>Email:</strong> info@example.com<br />
                                        </p>
                                        <div className="social-links mt-3">
                                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action="" method="post">
                                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Day</span></strong>. All Rights Reserved
                        </div>

                    </div>
                </footer>

                <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
                {/* <div id="preloader"></div> */}


            </div>
        );
    }
}