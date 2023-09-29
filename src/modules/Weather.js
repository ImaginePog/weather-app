class Weather {
  constructor(data) {
    this.temperature = data.temperature;
    this.feelsLike = data.feelsLike;
    this.humidity = data.humidity;
    this.uvIndex = data.uvIndex;
    this.day = data.day;
    this.cloudCoverage = data.cloudCoverage;
    this.speed = data.speed;
    this.condition = data.condition;
    this.updatedTime = data.updatedTime;
    this.localTime = data.localTime;
    this.location = data.location;
  }
}

export default Weather;
