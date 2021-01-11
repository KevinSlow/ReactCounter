const initialState = {
    startValueRender: 0,
    maxValueRender: 0,
    error: ""
}

type StartValueRenderACType = {
    type: 'SET_START_VALUE_RENDER'
    value: number
}
type MaxValueRenderACType = {
    type: 'SET_MAX_VALUE_RENDER'
    value: number
}

type ErrorACType = {
    type: 'ERROR',
    error: string
}

const SET_START_VALUE_RENDER = "SET_START_VALUE_RENDER"
const SET_MAX_VALUE_RENDER = "SET_MAX_VALUE_RENDER"
const ERROR = "ERROR"

type ActionType = StartValueRenderACType | MaxValueRenderACType | ErrorACType

export const settingsCounterReducer = (state: any = initialState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "SET_START_VALUE_RENDER": {
            return {...state, startValueRender: action.value};
        }
        case "SET_MAX_VALUE_RENDER": {
            return {...state, maxValueRender: action.value};
        }
        case "ERROR": {
            return {...state, error: action.error};
        }
        default:
            return state;
    }
};
export const StartValueRenderAC = (value: number): StartValueRenderACType => {
    return {type: "SET_START_VALUE_RENDER", value}
}
export const MaxValueRenderAC = (value: number): MaxValueRenderACType => {
    return {type: "SET_MAX_VALUE_RENDER", value}
}

export const errorAction = (error: string): ErrorACType => {
    return {type: "ERROR", error}
}