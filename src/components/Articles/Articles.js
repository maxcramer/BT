import React, { Component } from 'react';

import Article from '../Article/Article';
import SearchBar, { query } from '../SearchBar/SearchBar';

import './Articles.css';

class Articles extends Component {
    state = {
        articles: [],
        query: '',
    }

    callbackFunction = ( childData ) => {
        this.setState({query: childData})
    }


    componentDidUpdate () {
        const url = 'http://newsapi.org/v2/everything?' + `q=${this.state.query}&` + 'apiKey=a531269e2e2c4336980825d4d78c8e11';
        const req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                 const articles = data.articles.slice(0 ,10);
                 console.log(articles);
                 const updatedArticles = articles.map(article => {
                     return {
                         ...article
                     }
                 });
                 this.setState({articles: updatedArticles})
                })
                .catch(error => {
                    console.log(error);
                });
    }

    // handleSearch = () => {
    //     this.setState({query: this.props.query})
    // }

    render() {
        let articles = <p>Articles not found</p>
        if (!this.state.error || this.articles === null) {
            articles = this.state.articles.map(article => {
                return <Article 
                            key={article.title}
                            title={article.title}
                            author={article.author}
                            content={article.content}
                        />
            })
        }
        return (
            <div className="Articles">
                <SearchBar 
                    parentCallback = {this.callbackFunction}
                    query={console.log('Articles | The current this.state.query is', this.state.query)}
                />
                {articles}
            </div>
        )
    }
};

export default Articles;