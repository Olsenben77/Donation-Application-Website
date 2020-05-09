import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron1";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

class Charities extends Component {
  state = {
    Charities: [],
    name: "",
    cause: "",
    description: "",
    link: "",
    image: "",
  };

  componentDidMount() {
    this.loadCharities();
  }

  loadCharities = () => {
    API.getCharities()
      .then((res) =>
        this.setState({
          charities: res.data,
          name: "",
          cause: "",
          description: "",
          link: "",
          image: "",
        })
      )
      .catch((err) => console.log(err));
  };

  deleteCharity = (id) => {
    API.deleteCharity(id)
      .then((res) => this.loadCharities())
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.charities && this.state.name) {
      API.saveCharity({
        charities: this.state.charities,
        name: this.state.name,
        description: this.state.description,
      })
        .then((res) => this.loadCharities())
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Charities Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.Charity}
                onChange={this.handleInputChange}
                name="charity"
                placeholder="Charity (required)"
              />
              {/* <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              /> */}
              <FormBtn
                disabled={!this.state.charity}
                onClick={this.handleFormSubmit}
              >
                Submit Charity
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Charities On My List</h1>
            </Jumbotron>
            {this.state.charities.length ? (
              <List>
                {this.state.charities.map((charity) => (
                  <ListItem key={charity._id}>
                    <Link to={"/charities/" + charity._id}>
                      <strong>{charity.name}</strong>
                    </Link>
                    <DeleteBtn
                      onClick={() => this.deleteCharity(charity._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Charities;
