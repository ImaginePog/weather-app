import UnitDataHolder from "./UnitDataHolder";

// Represents the forecast of an hour
// Inherits all the unit data from UnitDataHolder clas
class Hour extends UnitDataHolder {
  constructor(data) {
    super(data);
    this.time = data.time;
    this.icon = data.icon;
    this.current = data.current;
  }
}

export default Hour;
