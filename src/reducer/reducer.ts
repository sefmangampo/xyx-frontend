export interface State {
    searchValue: string;
    isValid: boolean;
    apiResult: any;
}

export type Action =
    | { type: 'setSearchValue'; payload: string }
    | { type: 'setIsValid'; payload: boolean }
    | { type: 'setApiResult'; payload: any };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setSearchValue':
            return { ...state, searchValue: action.payload };
        case 'setIsValid':
            return { ...state, isValid: action.payload };
        case 'setApiResult':
            return { ...state, apiResult: action.payload };
        default:
            return state;
    }
};

export default reducer;
