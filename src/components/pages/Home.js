import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "./image/logo.PNG";
import "../../index.css";
import { Input } from "reactstrap";
import "./Donate.css";

function Home() {
  return (
    <div>
      <h2>TEST MAIN PAGE</h2>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
      </p>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <p>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </p>
      <Card style={{ width: "rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={Image} />
        <a>
          <div className="service-head1 text-center">
            <h2>
              {" "}
              How to Donate
              <div className="comment1"> </div>
            </h2>
            <h3>
              {" "}
              <span className="line">
                {" "}
                <div className="border1"></div>
              </span>
            </h3>
          </div>
        </a>
        <Card.Body>
          <Card.Text>
            <div className="flexbox">
              <div className="search">
                <h1>Search for a charity of your choice:</h1>
                {/* <h3>Click on search icon, then type your keyword.</h3> */}
                <div>
                  <input
                    type="text"
                    placeholder="       Search . . ."
                    required
                  />
                </div>
              </div>
            </div>
          </Card.Text>
          <div className="donation-buttons">
            <Button
              variant="outline-success"
              variant="color-success"
              style={{
                marginLeft: "20px",
                backgroundColor: "green",
                border: "white",
                color: "white",
              }}
            >
              $10
            </Button>
            <Button
              variant="outline-success"
              variant="color-success"
              style={{
                marginLeft: "20px",
                backgroundColor: "green",
                border: "white",
                color: "white",
              }}
            >
              $25
            </Button>
            <Button
              variant="outline-success"
              variant="color-success"
              style={{
                marginLeft: "20px",
                backgroundColor: "green",
                border: "white",
                color: "white",
              }}
            >
              $50
            </Button>
            <Button
              variant="outline-success"
              variant="color-success"
              style={{
                marginLeft: "20px",
                backgroundColor: "green",
                border: "white",
                color: "white",
              }}
            >
              $100
            </Button>
          </div>
          <Button
            variant="outline-success"
            variant="color-success"
            style={{
              marginTop: "15px",
              marginLeft: "20px",
              backgroundColor: "green",
              border: "white",
              color: "white",
            }}
          >
            $
          </Button>
          <Input
            variant="primary"
            style={{
              width: "225px",
              marginLeft: "60px",

              height: "35px",
              borderRadius: "30px",
              border: "3px solid black",
              padding: "15px",
            }}
          ></Input>
          <Button
            variant="outline-success"
            variant="color-success"
            style={{
              marginTop: "15px",
              marginLeft: "20px",
              backgroundColor: "green",
              border: "white",
              color: "white",
            }}
          >
            Give Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
