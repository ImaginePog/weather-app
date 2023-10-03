class UnitDataHolder {
  #temperature;
  #temperatureMax;
  #temperatureMin;
  #feelsLike;
  #cloudCoverage;
  #humidity;
  #rain;
  #wind;
  #visibility;
  #windMax;
  #visibilityAvg;
  #unitSystem;

  constructor(data) {
    this.#temperature = data.temperature;
    this.#temperatureMax = data.temperatureMax;
    this.#temperatureMin = data.temperatureMin;
    this.#feelsLike = data.feelsLike;
    this.#cloudCoverage = data.cloudCoverage;
    this.#humidity = data.humidity;
    this.#wind = data.wind;
    this.#visibility = data.visibility;
    this.#rain = data.rain;
    this.#windMax = data.windMax;
    this.#visibilityAvg = data.visibilityAvg;
    this.temperatureUnit = { metric: " °C", imperial: " °F" };
    this.lengthUnit = { metric: " km", imperial: " miles" };
    this.speedUnit = { metric: " km/h", imperial: " mph" };
    this.#unitSystem = "metric";
  }

  set unitSystem(unit) {
    this.#unitSystem = unit;
  }

  set temperature(temperature) {
    this.#temperature = temperature;
  }

  get temperature() {
    if (this.#unitSystem === "metric") {
      return this.#temperature.celsius + this.temperatureUnit.metric;
    } else {
      return this.#temperature.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set temperatureMax(temperature) {
    this.#temperatureMax = temperature;
  }

  get temperatureMax() {
    if (this.#unitSystem === "metric") {
      return this.#temperatureMax.celsius + this.temperatureUnit.metric;
    } else {
      return this.#temperatureMax.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set temperatureMin(temperature) {
    this.#temperatureMin = temperature;
  }

  get temperatureMin() {
    if (this.#unitSystem === "metric") {
      return this.#temperatureMin.celsius + this.temperatureUnit.metric;
    } else {
      return this.#temperatureMin.fahrenheit + this.temperatureUnit.imperial;
    }
  }

  set feelsLike(temperature) {
    this.#feelsLike = temperature;
  }

  get feelsLike() {
    if (this.#unitSystem === "metric") {
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
    return {
      current: this.#humidity.current + "%",
      average: this.#humidity.average + "%",
    };
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
    if (this.#unitSystem === "metric") {
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
    if (this.#unitSystem === "metric") {
      return this.#visibility.km + this.lengthUnit.metric;
    } else {
      return this.#visibility.miles + this.lengthUnit.imperial;
    }
  }

  set windMax(wind) {
    this.#windMax = wind;
  }

  get windMax() {
    if (this.#unitSystem === "metric") {
      return this.#windMax.speedKPH + this.speedUnit.metric;
    } else {
      return this.#windMax.speedMPH + this.speedUnit.imperial;
    }
  }

  set visibilityAvg(visib) {
    this.#visibilityAvg = visib;
  }

  get visibilityAvg() {
    if (this.#unitSystem === "metric") {
      return this.#visibilityAvg.km + this.lengthUnit.metric;
    } else {
      return this.#visibilityAvg.miles + this.lengthUnit.imperial;
    }
  }
}

export default UnitDataHolder;
