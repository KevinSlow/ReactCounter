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
            const incNumber = state.counter + 1
            return {...state, count: incNumber};
        }
        case RESET: {
            return {...state, count: state.startValue};
        }

        default: return state;
    }
};

export const incrementAC = () => ({
    type: SET_NUMBER,
});

export const resetAC = () => ({
    type: SET_NUMBER,
});