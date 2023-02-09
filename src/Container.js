import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Container() {
    //create state for results
    const [temp, setTemp] = useState("");
    const [description, setDescription] = useState("");


    useEffect(
        ()=>{
            axios.get("`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`")
            .then(res=>{
                // console.log(res.data.results)
                setTemp(res.data.main.temp)
                setDescription(res.data.weather[0].description)
            })
            .catch(err => console.log(err))
        }, []
    )//end of useEffect

    const getForecast = () => {
        console.log('change')
    }

  return (
    <div className="container">
        <h1>Your Weather Forecast</h1>
        <p>Enter your zipcode to get the weather forecast</p>
        <form>
            <input type="number" placeholder="Enter zipcode" className="zipcode"/>
         </form>
        <button className="getForecast" onClick={() => getForecast()}>Get Forecast</button>
        <div className="results">
            <p>Temp: {temp} </p>
            <p>Description: {description}</p>
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