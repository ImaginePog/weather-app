import { getLocationData, processAPIData } from "./Fetch";
import Display from "./Display";

// The main App class that holds the current weather data and the selected unit system
// Responsible for fetching data from the weather API
// and also displaying it
const App = (() => {
  let selectedUnitSystem = "metric";
  let weatherData = null;

  // Updates the current weather instance's unit system
  function updateUnitSystem() {
    weatherData.unitSystem = selectedUnitSystem;
  }

  // Toggles the selected unit system and updates the weather instance
  function toggleUnitSystem() {
    if (selectedUnitSystem === "metric") {
      selectedUnitSystem = "imperial";
    } else {
      selectedUnitSystem = "metric";
    }
    updateUnitSystem();
  }

  // Main function for the app
  // Fetches the data from API
  // Processes it
  // Updates the selected unit system
  // and displays the data
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

  // Getters for the weather data and unit system
  function getWeatherData() {
    return weatherData;
  }

  function getSelectedUnitSystem() {
    return selectedUnitSystem;
  }

  return { start, toggleUnitSystem, getWeatherData, getSelectedUnitSystem };
})();

export default App;
