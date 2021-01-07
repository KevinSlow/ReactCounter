import React from 'react';
import {connect, Provider} from 'react-redux';
import './App.css';
import {SettingCounterContainer} from "./Containers/SettingCounter/SettingCounterContainer";
import store from './redux/reduxStore';
import {compose} from "redux";
import {incrementAC} from "./redux/counterReducer";



function App() {
  return (
    <div className="App">
      <SettingCounterContainer />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
    startValue: state.counter.startValue,
    maxValue: state.counter.maxValue,
});

let AppContainer = compose<any>(
    connect(mapStateToProps, { incrementAC })
)(App);

export const CounterJSApp = () => {
    return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
    );
};

export default App;
