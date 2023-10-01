class Weather {
  #temperature;
  #temperatureMax;
  #temperatureMin;
  #feelsLike;
  #cloudCoverage;
  #humidity;
  #rain;
  #pollution;
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
    this.#cloudCoverage = data.cloudCoverage;
    this.#humidity = data.humidity;
    this.#wind = data.wind;
    this.#visibility = data.visibility;
    this.moon = data.moon;
    this.#rain = data.rain;
    this.sun = data.sun;
    this.#pollution = data.pollution;

    this.unitSystem = "metric";
    this.temperatureUnit = { metric: " °C", imperial: " °F" };
    this.lengthUnit = { metric: " km", imperial: " miles" };
    this.speedUnit = { metric: " km/h", imperial: " mph" };
  }

  set temperature(temperature) {
    this.#temperature = temperature;
  }

  get temperature() {
    if (this.unitSystem === "metric") {
      return this.#temperature.celsius + this.temperatureUnit.metric;
    } else {
      return this.#temperature.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set temperatureMax(temperature) {
    this.#temperatureMax = temperature;
  }

  get temperatureMax() {
    if (this.unitSystem === "metric") {
      return this.#temperatureMax.celsius + this.temperatureUnit.metric;
    } else {
      return this.#temperatureMax.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set temperatureMin(temperature) {
    this.#temperatureMin = temperature;
  }

  get temperatureMin() {
    if (this.unitSystem === "metric") {
      return this.#temperatureMin.celsius + this.temperatureUnit.metric;
    } else {
      return this.#temperatureMin.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set feelsLike(temperature) {
    this.#feelsLike = temperature;
  }

  get feelsLike() {
    if (this.unitSystem === "metric") {
      return this.#feelsLike.celsius + this.temperatureUnit.metric;
    } else {
      return this.#feelsLike.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set cloudCoverage(cloud) {
    this.#cloudCoverage = cloud;
  }

  get cloudCoverage() {
    return this.#cloudCoverage + "%";
  }

  set humidity(humidity) {
    this.#humidity = humidity;
  }

  get humidity() {
    return this.#humidity + "%";
  }

  set rain(rain) {
    this.#rain = rain;
  }

  get rain() {
    return this.#rain + "%";
  }

  set wind(wind) {
    this.#wind = wind;
  }

  get wind() {
    if (this.unitSystem === "metric") {
      return {
        speed: this.#wind.speedKPH + this.speedUnit.metric,
        direction: this.#wind.direction,
      };
    } else {
      return {
        speed: this.#wind.speedMPH + this.speedUnit.imperial,
        direction: this.#wind.direction,
      };
    }
  }

  set visibility(visib) {
    this.#visibility = visib;
  }

  get visibility() {
    if (this.unitSystem === "metric") {
      return this.#visibility.km + this.lengthUnit.metric;
    } else {
      return this.#visibility.miles + this.lengthUnit.imperial;
    }
  }

  get pollution() {
    return this.#pollution + "µg/m3";
  }
}

export default Weather;
