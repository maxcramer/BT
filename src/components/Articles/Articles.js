import React, { Component } from 'react';



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
                //  const updatedArticles 
                })
            .then(response => {
                // const articles = response.data.slice(0, 10);
                // console.log(articles)
            })
    }

    render() {
        return (
            <div>
                <h1>Artilces</h1>
            </div>
        )
    }
};

export default Articles;