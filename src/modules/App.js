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
    updateUnitSystem();
  }

  function updateUnitSystem() {
    weatherData.unitSystem = selectedUnitSystem;
  }

  async function start(location) {
    Display.resetCards();
    Display.showLoading();

    try {
      const rawData = await getLocationData(location);
      weatherData = processAPIData(rawData);
      updateUnitSystem();
      Display.update();
    } catch (error) {
      Display.showContent();
      alert(error);
    }
  }

  return { start, toggleUnitSystem, getSelectedUnitSystem, getWeatherData };
})();

export default App;
