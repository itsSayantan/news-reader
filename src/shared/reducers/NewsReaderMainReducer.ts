import { StateType, ActionType } from '@Shared/types';

const createInitialState = (initialState: Array<string>): StateType => {
    return {
        news: initialState,
        pageNo: 1,
        totalResults: -1
    };
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'FETCH_NEWS': {
            return {
                ...state,
                news: [...state.news, ...action?.payload?.news],
                pageNo: state.pageNo + 1,
                totalResults: action?.payload?.totalResults
            };
        }
    }
};

export { createInitialState, reducer, StateType, ActionType };
