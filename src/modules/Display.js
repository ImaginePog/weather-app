import DOMLoader from "./DOMLoader";
import App from "./App";

import fullMoon from "../assets/images/moon/full-moon.png";
import firstQuarter from "../assets/images/moon/first-quarter.png";
import lastQuarter from "../assets/images/moon/first-quarter.png";
import newMoon from "../assets/images/moon/first-quarter.png";
import waningGibbous from "../assets/images/moon/first-quarter.png";
import waxingGibbous from "../assets/images/moon/first-quarter.png";
import waningCrescent from "../assets/images/moon/first-quarter.png";
import waxingCrescent from "../assets/images/moon/first-quarter.png";

const Display = (() => {
  let displayUnit = {};

  function getMoonSrc(phase) {
    switch (phase) {
      case "Full Moon":
        return fullMoon;
      case "First Quarter":
        return firstQuarter;
      case "Last Quarter":
        return lastQuarter;
      case "New Moon":
        return newMoon;
      case "Waning Gibbous":
        return waningGibbous;
      case "Waxing Gibbous":
        return waxingGibbous;
      case "Waning Crescent":
        return waningCrescent;
      case "Waxing Crescent":
        return waxingCrescent;
    }
  }

  function update() {
    const weatherData = App.getWeatherData();
    DOMLoader.getObject(".location").textContent =
      weatherData.location.name + ", " + weatherData.location.country;
    DOMLoader.getObject(".temperature-main").textContent =
      weatherData.temperature;
    DOMLoader.getObject(".temperature-max").textContent =
      weatherData.temperatureMax;
    DOMLoader.getObject(".temperature-min").textContent =
      weatherData.temperatureMin;
    DOMLoader.getObject(".temperature-feels-like").textContent =
      weatherData.feelsLike;
    DOMLoader.getObject(".condition-text").textContent =
      weatherData.condition.text;
    DOMLoader.getObject(".condition-img").style.backgroundImage =
      "url(" + weatherData.condition.icon + ")";
    DOMLoader.getObject(".uv-index").textContent = weatherData.uvIndex;
    DOMLoader.getObject(".cloudiness").textContent = weatherData.cloudCoverage;
    DOMLoader.getObject(".humidity").textContent = weatherData.humidity;
    DOMLoader.getObject(".wind-speed").textContent = weatherData.wind.speed;
    DOMLoader.getObject(".wind-direction").textContent =
      weatherData.wind.direction;
    DOMLoader.getObject(".moon-img").style.backgroundImage =
      "url(" + getMoonSrc(weatherData.moon.phase) + ")";
    DOMLoader.getObject(".moon-phase").textContent = weatherData.moon.phase;

    DOMLoader.getObject(".visibility").textContent = weatherData.visibility;
    DOMLoader.getObject(".rain").textContent = weatherData.rain;
    DOMLoader.getObject(".sunrise").textContent = weatherData.sun.rise;
    DOMLoader.getObject(".sunset").textContent = weatherData.sun.set;

    showContent();
  }

  function renderUI() {
    const unitBtn = DOMLoader.getObject(".unit-switch");
    const unit = App.getSelectedUnitSystem();
    if (unit === "metric") {
      unitBtn.innerText = "°C";
    } else {
      unitBtn.innerText = "°F";
    }
  }

  function showLoading() {
    DOMLoader.getObject(".loading-modal").classList.remove("hide");
  }

  function showContent() {
    DOMLoader.getObject(".loading-modal").classList.add("hide");
  }

  return { update, renderUI, showLoading, showContent };
})();

export default Display;
