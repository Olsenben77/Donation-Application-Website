import React, { Component } from "react";
import Heading from "../Heading";
import SearchBar from "../SearchBar";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import Results from "../Results";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";

class Saved extends Component {
  state = {
    search: "",
    results: [],
  };

  searchDB = () => {
    API.getCharities()
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCharitySearch = (event) => {
    event.preventDefault();
    this.searchDB(this.state.search);
  };

  handleCharityRemove = (event) => {
    API.deletecharity(event)
      .then((res) => this.searchDB(this.state.search))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Heading>
              <h1>Saved Charities</h1>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Results>
              <ul className="list-group">
                {this.state.results &&
                  this.state.results.map((result) => (
                    <li className="list-group-item" key={result.ein}>
                      <Row>
                        <Col size="md-2">
                          {result.currentRating ? (
                            <img
                              alt="rating stars"
                              className="img-fluid"
                              src={result.currentRating.ratingImage.large}
                            />
                          ) : (
                            <p>No image</p>
                          )}
                        </Col>
                        <Col size="md-9" className="text-justify">
                          <b>{result.charityName}</b>
                          <br />
                          {result.cause && result.cause.causeName}
                          <br />
                          {result.tagLine}
                        </Col>
                        <Col size="md-1">
                          <ViewBtn
                            onClick={() => window.open(result.websiteURL)}
                          />
                          <DeleteBtn
                            onClick={() => this.handleCharityRemove(result._id)}
                          />
                        </Col>
                      </Row>
                    </li>
                  ))}
              </ul>
            </Results>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Saved;
