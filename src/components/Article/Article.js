import React from 'react';

const Article = (props) => (
    <div>
        Author: {props.author}
        Title: {props.title}
        Description: {props.description}
    </div>
);

export default Article;