import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Container() {
    const [zipcode, setZipcode] = useState("");
    const [weatherData, setWeatherData] = useState();
    // const [temp, setTemp] = useState("");
    // const [description, setDescription] = useState("");

    const apiKey = "acc785dd4ef0fe813c807aa2818b9994";
    

    const getForecast = () => {
        //I need the zipcode in order to get the forecast
        console.log('click', zipcode)
        //use zipcode in API call to get data 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`)
            .then(res=>{
                console.log(res.data)
                // now store this into state
                setWeatherData(res.data)
                // setTemp(res.data.main.temp)
                // setDescription(res.data.weather[0].description)
            })
            .catch(err => console.log(err))
    }



  return (
    <div className="container">
        <h1>Your Weather Forecast</h1>
        <p>Enter your zipcode to get the weather forecast</p>
        <form>
            <input type="number" placeholder="Enter zipcode" className="zipcode"
            onChange={(e)=>setZipcode(e.target.value)}
            />
         </form>
        <button className="getForecast" onClick={getForecast}>Get Forecast</button>
        <div className="results">
            <p>City: {weatherData?.name}</p>
            <p>Temp: {weatherData?.main.temp} </p>
            {/* <p>Description: {description}</p> */}
            </div>
        {/* <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select> */}
    </div>
  )
}

export default Container


// const apiKey = "acc785dd4ef0fe813c807aa2818b9994";
// const testiurl = "https://api.openweathermap.org/data/2.5/weather?zip=77057&units=imperial&appid=cb12bd7f8b15c38bbb55e949e857a5f5"