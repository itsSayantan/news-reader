import { StateType, ActionType } from '@Shared/types';

const createInitialState = (initialState: Array<string>): StateType => {
    return {
        news: initialState,
        pageNo: 1
    };
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'FETCH_NEWS': {
            return {
                news: [...state.news, ...action.payload],
                pageNo: state.pageNo + 1
            };
        }
    }
};

export { createInitialState, reducer, StateType, ActionType };
