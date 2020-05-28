
import React from 'react';

function ForecastCityWeather({forecast}){
    return <div> <h3>{forecast.main}</h3> <p>{forecast.description}</p> <br/> </div>
};

export default function ForecastCity({forecast}){
    return (<li>
        <h2>{forecast.name+', '+forecast.sys.country}</h2> <br/>
        {forecast.weather.map((data,indx)=><ForecastCityWeather key={indx} forecast={data}/>)}
        <table><tbody>
            <tr><td><strong>Temperature:</strong></td></tr>
            <tr><td>Minimum</td><td>{forecast.main.temp_min}</td></tr>
            <tr><td>Maximum</td><td>{forecast.main.temp_max}</td></tr>
            <tr><td></td></tr>
            <tr><td><strong>Location:</strong></td></tr>
            <tr><td>Longitude</td><td>{forecast.coord.lon}</td></tr>
            <tr><td>Lattitude</td><td>{forecast.coord.lat}</td></tr>
        </tbody></table>
    </li>)
};

;

