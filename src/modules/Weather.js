import UnitDataHolder from "./UnitDataHolder";
import Hour from "./Hour";

class Weather extends UnitDataHolder {
  constructor(data) {
    super(data);
    this.location = data.location;

    this.condition = data.condition;
    this.uv = data.uv;

    this.moon = data.moon;
    this.sun = data.sun;
    this.pollution = data.pollution;

    this.hours = [];
  }

  set unitSystem(unit) {
    super.unitSystem = unit;
    this.hours.forEach((hour) => {
      hour.unitSystem = unit;
    });
  }

  addHours(hours) {
    this.hours = hours.map((hour) => {
      hour.unitSystem = this.unitSystem;
      new Hour(hour);
    });
  }
}

export default Weather;
