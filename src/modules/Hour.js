import UnitDataHolder from "./UnitDataHolder";

class Hour extends UnitDataHolder {
  constructor(data) {
    super(data);
    this.icon = data.icon;
  }
}

export default Hour;
