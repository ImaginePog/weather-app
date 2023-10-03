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

  const UV_COLORS = {
    low: "#39b939",
    mid: "#ad6b2d",
    high: "#863e3e",
  };

  function update() {
    const weatherData = App.getWeatherData();
    console.log(weatherData);
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

    DOMLoader.getObject(".uv-front").style.backgroundColor =
      UV_COLORS[weatherData.uvLevel];
    DOMLoader.getObject(".cloudiness").textContent = weatherData.cloudCoverage;
    DOMLoader.getObject(".humidity").textContent = weatherData.humidity.current;
    DOMLoader.getObject(".wind-speed").textContent = weatherData.wind.speed;
    DOMLoader.getObject(".wind-direction").textContent =
      weatherData.wind.direction;
    DOMLoader.getObject(".moon-img").style.backgroundImage =
      "url(" + getMoonSrc(weatherData.moon.phase) + ")";
    DOMLoader.getObject(".moon-phase").textContent = weatherData.moon.phase;
    DOMLoader.getObject(".visibility").textContent = weatherData.visibility;
    DOMLoader.getObject(".rain").textContent = weatherData.rain;
    DOMLoader.getObject(".pollution").textContent =
      weatherData.pollution.current;
    DOMLoader.getObject(".sunrise").textContent = weatherData.sun.rise;
    DOMLoader.getObject(".sunset").textContent = weatherData.sun.set;

    DOMLoader.getObject(".avg-humidity").textContent =
      weatherData.humidity.average;
    DOMLoader.getObject(".max-windspeed").textContent = weatherData.windMax;
    DOMLoader.getObject(".avg-visibility").textContent =
      weatherData.visibilityAvg;
    DOMLoader.getObject(".avg-pollution").textContent =
      weatherData.pollution.average;

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
    window.scrollTo(0, 0);
    console.log(document.body.scrollTop);
    DOMLoader.getObject(".loading-modal").classList.add("hide");
  }

  function flipCard(card) {
    card.classList.toggle("flip");
  }

  function resetCards() {
    const cards = DOMLoader.getObject(".info-card");

    cards.forEach((card) => {
      if (card.classList.contains("flip")) {
        card.classList.toggle("flip");
      }
    });
  }

  return { update, renderUI, showLoading, showContent, flipCard, resetCards };
})();

export default Display;
