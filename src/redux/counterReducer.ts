const getStartValue = () => {
    return localStorage["start"] ? Number(localStorage["start"]) : 0
}
const getMaxValue = () => {
    return localStorage["Max"] ? Number(localStorage["Max"]) : 0
}
const initialState = {
    startValue: getStartValue(),
    maxValue: getMaxValue(),
    counter: getStartValue(),
    startValueRender: 0,
    maxValueRender: 0,
    error: ""
}
type Statetype = {
    startValue: number,
    maxValue: number,
    counter: number
    startValueRender: number,
    maxValueRender: number,
    error: string
}
type NumUpACType = {
    type: 'NUM-UP'
}
type ResetACType = {
    type: 'RESET'
}
type MaxValueACType = {
    type: 'SET_MAX'
    value: number
}
type StartValueACType = {
    type: 'SET_START'
    value: number
}
const SET_NUMBER = "SET_NUMBER"
const SET_MAX = "SET_MAX_VALUE"
const RESET = "RESET"
const SET_START = "SET_START"
const SET_START_VALUE_RENDER = "SET_START_VALUE_RENDER"
const SET_MAX_VALUE_RENDER = "SET_MAX_VALUE_RENDER"
const ERROR = "ERROR"


type ActionType = NumUpACType | ResetACType | MaxValueACType | StartValueACType | StartValueRenderACType | MaxValueRenderACType | ErrorACType

export const counterReducer = (state: Statetype = initialState, action: ActionType): Statetype => {
    switch (action.type) {
        case "NUM-UP": {
            const newValue = state.counter + 1
            return {
                ...state,
                counter: newValue
            };
        }
        case "RESET": {
            return {...state, counter: state.startValue};
        }
        case "SET_START": {
            localStorage["start"] = action.value
            return {...state, startValue: action.value};
        }
        case "SET_MAX": {
            localStorage["Max"] = action.value
            return {...state, maxValue: action.value};
        }
        case "SET_START_VALUE_RENDER": {
            return {...state, startValueRender: state.startValue};
        }
        case "SET_MAX_VALUE_RENDER": {
            return {...state, maxValueRender: state.maxValue};
        }
        case "ERROR": {
            return {...state, error: action.error};
        }
        default:
            return state;
    }
};

export const incrementAC = (): NumUpACType => {
    return {type: "NUM-UP"}
}
export const resetAC = (): ResetACType => {
    return {type: "RESET"}
}
export const MaxValueAC = (value: number): MaxValueACType => {
    return {type: "SET_MAX", value}
}
export const StartValueAC = (value: number): StartValueACType => {
    return {type: "SET_START", value}
}

interface StartValueRenderACType {
    type: "SET_START_VALUE_RENDER",
    value: number
}
interface MaxValueRenderACType {
    type: "SET_MAX_VALUE_RENDER",
    value: number
}
interface MaxValueRenderAC {
    type: "SET_MAX_VALUE_RENDER",
    value: number
}
interface ErrorACType {
    type: "ERROR",
    error: string
}
export const StartValueRenderAC = (value: number): StartValueRenderACType => {
    return {type: "SET_START_VALUE_RENDER", value}
}
export const MaxValueRenderAC = (value: number): MaxValueRenderAC => {
    return {type: "SET_MAX_VALUE_RENDER",
        value}
}
export const errorAction = (error: string): ErrorACType => {
    return {type: "ERROR", error}
}