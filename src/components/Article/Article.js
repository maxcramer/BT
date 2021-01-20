import React from 'react';

import './Article.css';

const Article = (props) => (
    <div className="Article">
        Author: {props.author}
        Title: {props.title}
        Description: {props.description}
    </div>
);

export default Article;