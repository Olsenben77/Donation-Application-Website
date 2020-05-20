import React, { useEffect, useState, Component } from "react";
import { Nav, Form } from "react-bootstrap";
import "./navbar.css";
import "./hero.css";

import video from "../videos/alternate_video2.mp4";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import White from "../images/white.png";


class Hero2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div className="hero_container">
                <header>
                    <Router>

                        <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
                            <MDBNavbarBrand href="/">
                                <strong>Navbar</strong>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Link</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Profile</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>
                </header>
                <header className="hero">
                    <div className="hero__background">
                        <video
                            autoPlay
                            loop
                            muted
                        // poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg"
                        >
                            <source src={video} type="video/mp4"></source>
                        </video>
                    </div>
                    <section className="hero__content hero__content--centered">
                        <h1 className="hero__title"> </h1>
                        <div
                            id="container"
                            style={{
                                position: "relative",
                            }}
                        >
                            <div id="flip">
                                <div>
                                    <div>Search For Charities</div>
                                </div>
                                <div>
                                    <div>Donate To A Chosen Cause</div>
                                </div>
                                <div>
                                    <div>Create Lasting Change</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default Hero2;
