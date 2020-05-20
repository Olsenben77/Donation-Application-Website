import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar3.css";
import { NavDropdown } from 'react-bootstrap';



class Navbar3 extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
                <Link className="navbar-brand" to="/" style={{ fontWeight: "700" }}>
                    DONATIONALLY
        </Link>
                <button
                    onClick={this.toggleNav}
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                                to="/"
                            >
                                Home
              </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/donateform"
                            >
                                Donate
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/News"
                            >
                                News
              </Link>
                        </li>

                        <li class="nav-item dropdown">
                            <NavDropdown title="Charity Search" id="basic-nav-dropdown">
                                <NavDropdown.Item to="/Map"><Link
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/Map"
                                    style={{ color: "black" }}
                                >By Map</Link></NavDropdown.Item>
                                <NavDropdown.Item to="/Search"><Link
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/Search"
                                    style={{ color: "black" }}
                                >By Name</Link></NavDropdown.Item>
                            </NavDropdown>
                        </li>

                        <li class="nav-item dropdown">
                            <NavDropdown title="Sign-In" id="basic-nav-dropdown">
                                <NavDropdown.Item to="/portal"><Link
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/portal"
                                    style={{ color: "black" }}
                                >Sign-up</Link></NavDropdown.Item>
                                <NavDropdown.Item to="/staff"><Link
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/staff"
                                    style={{ color: "black" }}
                                >Members</Link></NavDropdown.Item>
                                <NavDropdown.Item to="/staff"><Link
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/staff"
                                    style={{ color: "black" }}
                                >Portal</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="/portal"><Link
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/portal"
                                    style={{ color: "black" }}
                                >Logout</Link></NavDropdown.Item>

                            </NavDropdown>
                        </li>


                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/contact"
                            >
                                Contact Us
              </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar3;
