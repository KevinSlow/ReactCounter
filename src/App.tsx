import React from 'react';
import {connect, Provider} from 'react-redux';
import './App.css';
import {SettingCounterContainer} from "./Containers/SettingCounter/SettingCounterContainer";
import store from './redux/reduxStore';
import {compose} from "redux";
import {incrementAC, resetAC} from "./redux/counterReducer";



function App(props:any) {
  return (
    <div className="App">
      <SettingCounterContainer
      counter={props.counter}
      setCount={props.incrementAC}
      />
    </div>
  );
}

let mapStateToProps = (state: any) => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        counter: state.counter.counter,
    }
}

export const AppContainer = connect(mapStateToProps, {incrementAC, resetAC})(App)

export const CounterJSApp = () => {
    return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
    );
};

export default App;
