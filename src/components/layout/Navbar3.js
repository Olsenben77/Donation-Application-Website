import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar3.css";

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
                <Link className="navbar-brand" to="/">
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
                                to="/about"
                            >
                                About Us
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/donate"
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
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/Map"
                            >
                                Serarch by Map
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/Search"
                            >
                                Search by Name
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/portal"
                            >
                                Sign-up
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/staff"
                            >
                                Members
              </Link>
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
