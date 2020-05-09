import React, { useState } from "react";
import API from "../.././utils/API";
import 'antd/dist/antd.css';
import './test.css';
import { Carousel } from 'antd';
import './style.css'

function SearchNews() {
  const [result, setResults] = useState([]);
  const [search, setSearch] = useState("Corona Virus");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!search) {
      return;
    }

    API.searchnews(search).then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res.data.articles);
      setResults(res.data.articles);
    });
  };

  function imgLink(newsLink) {
    window.open(newsLink, "_blank")
  }

  return (
    <div className="container">
      <div className="page_inner_div_news">
        <h1>Search Current News</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              placeholder="Corona Virus"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            style={{ marginBottom: "20px" }}
          >
            Search
        </button>
        </form>
        <Carousel autoplay>
          {result.map(reports => (
            <div>
              <img
                style={{ height: '450px', width: '800px', margin: 'auto', fontFamily: 'Raleway Alternates Medium' }}
                key={reports.title}
                src={reports.urlToImage}
                alt={reports.title}
                onClick={() => imgLink(reports.url)}
              />
              <h2 style={{ color: "black" }}>{reports.title}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SearchNews;
