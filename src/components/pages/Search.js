import React, { Component } from "react";
import Heading from "../Heading";
import SearchBar from "../SearchBar";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import Results from "../Results";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import CharityDB from "../../models"
import './style.css';

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  searchrapidapi = (query) => {
    let query1 = query.replace(" ", "+");
    console.log("1. " + query1);
    API.search(query1)
      .then((res) => this.setState({ results: res.data, search: "" }))
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
    this.searchrapidapi(this.state.search);
  };

  handleCharitySave = (event) => {
    API.saveCharity({
      name: event.charityName,
      description: event.tagLine,
      cause: event.cause.causeName,
      imageurl: event.currentRating.ratingImage.large,
      url: event.websiteURL,
    })
      .then((res) => this.setState({ search: "" }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="page_inner_div" >
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Heading>
                <h1> Charity Search</h1>
                <h3>Search for and Save Charities of interest</h3>
              </Heading>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <SearchBar>
                <h3>Search by Charity Title</h3>
                <form>
                  <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Enter the title of the charity you are looking for"
                  />
                  <FormBtn
                    disabled={!this.state.search}
                    onClick={this.handleCharitySearch}
                  >
                    Search
                </FormBtn>
                </form>
              </SearchBar>
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
                            <SaveBtn
                              onClick={() => this.handleCharitySave(result)}
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
      </div>
    );
  }
}

export default Search;
