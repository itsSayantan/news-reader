export type NewsType = {
    title: string;
};

export type StateType = {
    news: Array<string>;
    pageNo: number;
};

export type ActionType = {
    type: string;
    payload?: any;
};
