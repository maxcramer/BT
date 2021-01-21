import React from 'react';

import './Article.css';



const Article = (props) => {

    var content = props.content;
    console.log('Content', content)
    var reduceContent = content.slice(0, 150);
    
    return (
    <div className="Article">
        <h4>{props.title}</h4>
        <h5>By {props.author}</h5>
        <p>{reduceContent}...</p>
        <p>{props.publisher}</p>
    </div>
    )
};

export default Article;