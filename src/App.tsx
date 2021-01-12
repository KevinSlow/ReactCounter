import React from 'react';
import {connect, Provider} from 'react-redux';
import './App.css';
import store from './redux/reduxStore';
import {incrementAC, MaxValueAC, resetAC, StartValueAC} from "./redux/counterReducer";
import {errorAction, MaxValueRenderAC, StartValueRenderAC} from "./redux/settingCounterReducer";
import { SettingCounterContainer } from './Containers/SettingCounter/SettingCounterContainer';



function App(props:any) {
  return (
    <div className="App">
      <SettingCounterContainer
          startValue={props.startValue}
          setStartValue={props.setStartValue}
          maxValue={props.maxValue}
          setMaxValue={props.setMaxValue}
          counter={props.counter}
          reset={props.reset}
          setCount={props.increment}
          startValueRender={props.startValueRender}
          maxValueRender={props.maxValueRender}
          setError={props.SetError}
          error={props.error}
      />
    </div>
  );
}

let mapStateToProps = (state: any) => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        counter: state.counter.counter,
        startValueRender: state.settingsCounter.startValueRender,
        maxValueRender: state.settingsCounter.maxValueRender,
        error: state.settingsCounter.error
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        setStartValueRender: (value: number) => dispatch(StartValueRenderAC(value)),
        setMaxValueRender: (value: number) => dispatch(MaxValueRenderAC(value)),
        increment: () => {
            dispatch(incrementAC())
        },
        setStartValue: (value: number) => dispatch(StartValueAC(value)),
        setMaxValue: (value: number) => dispatch(MaxValueAC(value)),
        setDisplay: (value: number) => dispatch(MaxValueAC(value)),
        reset: () => dispatch(resetAC()),
        SetError: (error: string) => (dispatch(errorAction(error)))
    }
}
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export const CounterJSApp = () => {
    return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
    );
};

export default App;
