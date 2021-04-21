import React, { Component } from "react";

export default class WeatherDataComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.temp === this.props.temp &&
      nextProps.city === this.props.city
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log("rendering Component");
    return (
      <div>
        <p>
          Feels like {this.props.feelsLike}° in {this.props.city}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${this.props.icon}@4x.png`}
          alt="tasod"
        />
        <div>
          <h3>{this.props.temp}°</h3>
        </div>
        <div>
          <p>Humidity: {this.props.humidity}%</p>
          <p>Pressure: {this.props.pressure}</p>
          <p>Maximum Temperature: {this.props.maxTemp}°</p>
          <p>Minimum Temperature: {this.props.minTemp}°</p>
        </div>
      </div>
    );
  }
}
