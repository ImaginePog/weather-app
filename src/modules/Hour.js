import UnitDataHolder from "./UnitDataHolder";

class Hour extends UnitDataHolder {
  constructor(data) {
    super(data);
    this.time = data.time;
    this.icon = data.icon;
    this.current = data.current;
  }
}

export default Hour;
