import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Image from '../pages/image/charity.png';
import './navbar.css';
class Header extends Component {
    render() {
        return (

            <Jumbotron fluid style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover' }} id="head">
                <Container id="head">
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <p>
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </Container>
            </Jumbotron>




        );
    }
}

export default Header;