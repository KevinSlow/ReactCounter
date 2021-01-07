const initState = {
    counter: 0,
    startValue: 0,
    maxValue: 0
};

const SET_NUMBER = "SET_NUMBER";
const RESET = "RESET";

export const counterReducer = (state = initState, action: any): any => {
    switch (action.type) {
        case SET_NUMBER: {
            return {...state, count: action.count + 1};
        }
        case RESET: {
            return {...state, count: 0};
        }

        default: return state;
    }
};

export const incrementAC = (count: number) => ({
    type: SET_NUMBER,
    count,
});
