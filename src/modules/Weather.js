import UnitDataHolder from "./UnitDataHolder";

class Weather extends UnitDataHolder {
  constructor(data) {
    super(data);
    this.location = data.location;

    this.condition = data.condition;
    this.uv = data.uv;

    this.moon = data.moon;
    this.sun = data.sun;
    this.pollution = data.pollution;

    this.unitSystem = "metric";
    this.temperatureUnit = { metric: " °C", imperial: " °F" };
    this.lengthUnit = { metric: " km", imperial: " miles" };
    this.speedUnit = { metric: " km/h", imperial: " mph" };

    this.hours = [];
  }
}

export default Weather;
