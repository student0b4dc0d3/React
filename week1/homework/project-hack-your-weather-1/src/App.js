
import React from 'react';
import './App.css';
import ForecastList from './components/ForecastList';

export default class App extends React.Component {
    state={forecastData:require('./city-weather.json')}
    render() {
        return <div className="App">
            <h2>Weather</h2>
            <ForecastList forecast={this.state.forecastData} />
        </div>
    }
}

;

