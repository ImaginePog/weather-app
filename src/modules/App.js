import { getLocationData, processAPIData } from "./Fetch";
import Display from "./Display";

const App = (() => {
  let selectedUnitSystem = "metric";
  let weatherData = null;

  function getSelectedUnitSystem() {
    return selectedUnitSystem;
  }

  function getWeatherData() {
    return weatherData;
  }

  function toggleUnitSystem() {
    if (selectedUnitSystem === "metric") {
      selectedUnitSystem = "imperial";
    } else {
      selectedUnitSystem = "metric";
    }
    weatherData.unitSystem = selectedUnitSystem;
  }

  function updateUnitSystem(weather) {
    weatherData = weather;
    weatherData.unitSystem = selectedUnitSystem;
    return weatherData;
  }

  function start(location) {
    getLocationData(location)
      .then(processAPIData)
      .then(updateUnitSystem)
      .then(Display.update);
  }

  return { start, toggleUnitSystem, getSelectedUnitSystem, getWeatherData };
})();

export default App;
