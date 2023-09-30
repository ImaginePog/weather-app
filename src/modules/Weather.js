class Weather {
  #temperature;
  #temperatureMax;
  #temperatureMin;
  #feelsLike;
  #wind;
  #visibility;
  constructor(data) {
    this.location = data.location;
    this.#temperature = data.temperature;
    this.#temperatureMax = data.temperatureMax;
    this.#temperatureMin = data.temperatureMin;
    this.#feelsLike = data.feelsLike;
    this.condition = data.condition;
    this.uvIndex = data.uvIndex;
    this.cloudCoverage = data.cloudCoverage;
    this.humidity = data.humidity;
    this.#wind = data.wind;
    this.#visibility = data.visibility;
    this.moon = data.moon;
    this.rain = data.rain;
    this.sun = data.sun;
    this.pollution = data.pollution;
    this.unitSystem = "metric";
  }

  set temperature(temperature) {
    this.#temperature = temperature;
  }

  get temperature() {
    if (this.unitSystem === "metric") {
      return this.#temperature.celsius;
    } else {
      return this.#temperature.fahrenheit;
    }
  }

  set temperatureMax(temperature) {
    this.#temperatureMax = temperature;
  }

  get temperatureMax() {
    if (this.unitSystem === "metric") {
      return this.#temperatureMax.celsius;
    } else {
      return this.#temperatureMax.fahrenheit;
    }
  }

  set temperatureMin(temperature) {
    this.#temperatureMin = temperature;
  }

  get temperatureMin() {
    if (this.unitSystem === "metric") {
      return this.#temperatureMin.celsius;
    } else {
      return this.#temperatureMin.fahrenheit;
    }
  }

  set feelsLike(temperature) {
    this.#feelsLike = temperature;
  }

  get feelsLike() {
    if (this.unitSystem === "metric") {
      return this.#feelsLike.celsius;
    } else {
      return this.#feelsLike.fahrenheit;
    }
  }

  set wind(wind) {
    this.#wind = wind;
  }

  get wind() {
    if (this.unitSystem === "metric") {
      return { speed: this.#wind.speedKPH, direction: this.#wind.direction };
    } else {
      return { speed: this.#wind.speedMPH, direction: this.#wind.direction };
    }
  }

  set visibility(visib) {
    this.#visibility = visib;
  }

  get visibility() {
    if (this.unitSystem === "metric") {
      return this.#visibility.km;
    } else {
      return this.#visibility.miles;
    }
  }
}

export default Weather;
