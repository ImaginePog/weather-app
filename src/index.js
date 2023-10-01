import "./styles/style.css";
import DOMLoader from "./modules/DOMLoader";
import Display from "./modules/Display";
import UI from "./modules/UI";
import App from "./modules/App";

DOMLoader.loadObjects();
Display.showLoading();

function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getCoordinates()
  .then((pos) => {
    const currPosition = pos.coords.latitude + "," + pos.coords.longitude;
    return currPosition;
  })
  .catch((currPosition) => {
    currPosition = "Canada";
    return currPosition;
  })
  .then((currPosition) => {
    App.start(currPosition);
    Display.renderUI();
    UI.listen();
  });
