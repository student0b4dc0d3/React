
import React from 'react';
import ForecastCity from './ForecastCity';

export default function ForecastList({forecast}){
    return (<ul> {forecast.map((data,indx)=><ForecastCity key={indx} forecast={data}/>)} </ul>)
};

;

