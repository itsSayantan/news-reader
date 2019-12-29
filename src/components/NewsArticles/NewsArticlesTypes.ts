import { NewsType, ActionType } from '@Shared/types';
import React from 'react';
export type NewsArticlesType = (props: NewsArticlesPropsType) => JSX.Element;

export type NewsArticlesPropsType = {
    news: Array<NewsType>;
};
