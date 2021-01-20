import React from 'react';

import './Article.css';

const Article = (props) => (
    <div className="Article">
        <h4>{props.title}</h4>
        <h5>By {props.author}</h5>
        <p>{props.content.slice(0, 150)}...</p>
    </div>
);

export default Article;