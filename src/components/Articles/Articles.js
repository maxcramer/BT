import React, { Component } from 'react';

import Article from '../Article/Article';

import './Articles.css';

class Articles extends Component {
    state = {
        articles: []
    }

    componentDidMount () {
        const url = 'http://newsapi.org/v2/everything?' + 'q=everything&' + 'apiKey=b878ce7c61644b96862ef6d5ca7a3bf9';
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

    render() {
        let articles = <p>Articles not found</p>
        if (!this.state.error) {
            articles = this.state.articles.map(article => {
                return <Article 
                            key={article.title}
                            title={article.title}
                            author={article.author}
                            description={article.description}
                        />
            })
        }
        return (
            <div className="Articles">
                {articles}
            </div>
        )
    }
};

export default Articles;