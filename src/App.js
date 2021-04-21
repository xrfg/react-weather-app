import React, { Component } from "react";
import WeatherDataComponent from "./WeatherDataComponent";

/* let apiKey = "81bfc0657764996ce2ed462fc44ded6a";
console.log(process); */

export default class App extends Component {
  state = {
    cityName: "",
    weatherData: null,
  };

  getUserCity = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  formSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(this.state.cityName);
    if (this.state.cityName.trim() !== "")
      // if there is nothing in the input, do nothing, otherwise fetch the data according to the input
      this.fetchWeatherData(this.state.cityName);
  };

  fetchWeatherData = (city) => {
    // fetching weather info from openweathermap api
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ weatherData: data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    //onload
    this.fetchWeatherData("berlin");
  }

  render() {
    console.log("rendering APP");
    let data = this.state.weatherData; // destructuring

    return (
      <div>
        <h1>Weather App</h1>

        <form onSubmit={this.formSubmission}>
          <input
            type="text"
            placeholder="Enter Your City Name"
            onChange={this.getUserCity}
          />
          <button>Get Weather Data</button>
        </form>

        {data && (
          <WeatherDataComponent
            city={this.state.cityName}
            temp={data.main.temp}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
            humidity={data.main.humidity}
            feelsLike={data.main.feels_like}
            pressure={data.main.pressure}
            icon={data.weather[0].icon}
          />
        )}
      </div>
    );
  }
}
