import React, { LegacyRef, RefObject } from 'react';

import NewsArticles from '@Components/NewsArticles/NewsArticles';
import {
    createInitialState,
    reducer
} from '@Shared/reducers/NewsReaderMainReducer';

import './NewsReaderMain.scss';

const callNewsApi = (pageNo: number = 1, pageSize: number = 5) => {
    const url =
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=dfa0a70eb0734464874055f05a62381b&page=' +
        pageNo +
        '&pageSize=' +
        pageSize;

    return fetch(url).then(res => res.json());
};

const NewsReaderMain: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(reducer, [], createInitialState);

    React.useEffect(() => getNews(), []);

    const getNews = () => {
        callNewsApi(state.pageNo, 5).then(jsonData => {
            dispatch({
                type: 'FETCH_NEWS',
                payload: jsonData.articles.map((a: any) => {
                    return {
                        title: a.title
                    };
                })
            });
        });
    };
    React.useEffect(() => {
        if (state.pageNo > 1) {
            const target = document.querySelector('#last-article');
            const intersectionObsserverOptions = {
                root: document.querySelector('.nrm-container'),
                rootMargin: '0px',
                threshold: 0
            };
            let observer = new IntersectionObserver(entries => {
                // there will only be one entry as we have given only 1 threshold
                if (entries[0].isIntersecting) {
                    getNews();
                }
            }, intersectionObsserverOptions);

            observer.observe(target);
            return () => {
                observer.disconnect();
            };
        }
    }, [state.pageNo]);
    return (
        <div className="nrm-container">
            Latest News
            <p>Page No: {state.pageNo}</p>
            <NewsArticles news={state.news} />
            <div className="nrm-target" id="target">
                Loading more news ...
            </div>
        </div>
    );
};

export default NewsReaderMain;
