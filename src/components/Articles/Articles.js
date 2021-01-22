import React, { Component } from "react";

import Article from "../Article/Article";
import SearchBar from "../SearchBar/SearchBar";

import "./Articles.css";

const fetchArticles = async (query) => {
  const url =
    "http://newsapi.org/v2/everything?" +
    `q=${query}&` +
    "apiKey=db73b9b5eebb4126b000201a551dbecb";
  const req = new Request(url);
  const response = await fetch(req);
  const data = await response.json();
  const articles = data.articles.slice(0, 10);
  return articles;
};

class Articles extends Component {
  state = {
    articles: [],
    query: "",
    lastQuery: "",
  };

  componentDidMount() {
    this.doSearch('everything');
    if (this.state.query === this.state.lastQuery) return;
    if(this.state.query === '') return;
  }


  doSearch = async (query) => {
    const articles = await fetchArticles(query);
    const updatedArticles = articles.map((article) => {
        if(!article.content) article.content = '';
        return {
          ...article,
          content: article.content.slice(0, 150),
        };
      });
      this.setState({ articles: updatedArticles });
  };

  render() {
    let articles = <p>Articles not found</p>;
    if (!this.state.error || this.articles === null) {
      articles = this.state.articles.map((article) => {
        return (
          <Article
            key={article.title}
            title={article.title}
            author={article.author}
            content={article.content}
          />
        );
      });
    }
    return (
      <div className="Articles">
        <SearchBar
          // parentCallback = {this.callbackFunction}
          query={this.state.query}
          callBack={this.doSearch}
        />
        <div className="articles__container">{articles}</div>
      </div>
    );
  }
}

export default Articles;
