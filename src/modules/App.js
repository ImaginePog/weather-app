import { getLocationData, processAPIData } from "./Fetch";

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

  function start() {
    getLocationData("test").then(processAPIData).then(updateUnitSystem);
  }

  return { start, toggleUnitSystem, getSelectedUnitSystem, getWeatherData };
})();

export default App;
