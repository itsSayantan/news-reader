import React from 'react';

import { NewsArticleType, NewsArticlePropsType } from './NewsArticleTypes';

import './NewsArticle.scss';

const NewsArticle: NewsArticleType = (props: NewsArticlePropsType) => {
    return (
        <>
            <div
                className="news-article-container"
                id={props.isLastArticle ? 'last-article' : ''}
            >
                {props.title}
            </div>
        </>
    );
};

export default NewsArticle;
