import React from 'react';
import { ActionType } from '@Shared/types';
export type NewsArticleType = (props: NewsArticlePropsType) => JSX.Element;

export type NewsArticlePropsType = {
    title: string;
    isLastArticle: boolean;
};
