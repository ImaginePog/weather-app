import UnitDataHolder from "./UnitDataHolder";
import Hour from "./Hour";

// Represents the current weather instance
// Also holds all the hour forecasts
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

  // Sets unit system for self and also for all it's Hour objects
  set unitSystem(unit) {
    super.unitSystem = unit;
    this.hours.forEach((hour) => {
      hour.unitSystem = unit;
    });
  }

  // Add all the hours and also set their unit system based on weather
  addHours(hours) {
    this.hours = hours.map((hour) => {
      hour.unitSystem = this.unitSystem;
      new Hour(hour);
    });
  }
}

export default Weather;
