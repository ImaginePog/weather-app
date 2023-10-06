import "./styles/style.css";
import DOMLoader from "./modules/DOMLoader";
import Display from "./modules/Display";
import UI from "./modules/UI";
import App from "./modules/App";

// Load objects from the DOM and setup display
DOMLoader.loadObjects();
Display.showLoading();
Display.renderUI();

// Requests the coordinates from the browser and return as a promise
function getCoordinates() {
  return new Promise(function (resolve, reject) {
    if (!navigator.geolocation) {
      Promise.reject("No geolocation API");
    }

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Starts the App and starts listening to events
async function start(currPosition) {
  await App.start(currPosition);
  UI.listen();
}

// Setups the app and the site
async function setup() {
  try {
    const pos = await getCoordinates();
    const currPosition = pos.coords.latitude + "," + pos.coords.longitude;
    start(currPosition);
  } catch (error) {
    console.error(error);
    const defaultPos = "Canada";
    start(defaultPos);
  }
}

setup();
