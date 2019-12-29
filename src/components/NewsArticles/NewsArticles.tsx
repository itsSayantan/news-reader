import React from 'react';

import NewsArticle from '@Components/NewsArticle/NewsArticle';

import { NewsArticlesType, NewsArticlesPropsType } from './NewsArticlesTypes';

import './NewsArticles.scss';

const NewsArticles: NewsArticlesType = (props: NewsArticlesPropsType) => {
    let listOfNews = props.news.map((n, idx) => (
        <NewsArticle
            key={n.title}
            title={n.title}
            isLastArticle={idx === props.news.length - 1}
        />
    ));
    return <>{listOfNews}</>;
};

export default NewsArticles;
