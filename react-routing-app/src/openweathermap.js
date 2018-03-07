import axios from 'axios';
import React from 'react';

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=dceedfaf22fc0d7279dd4e219823de75&unit=metric';

//dceedfaf22fc0d7279dd4e219823de75

class openweathermap extends React.Component{

        getTemp (location) {
            var encodedLocation = encodeURIComponent(location);
            var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

            return axios.get(requestUrl).then(function (res) {
                    if(res.data.cod && res.data.message){
                        throw new Error(res.data.message);
                    } else{
                        return res.data.main.temp;
                    }
                },
                function (res) {
                    throw new Error(res.data.message);
                });
        }

}

export default openweathermap;