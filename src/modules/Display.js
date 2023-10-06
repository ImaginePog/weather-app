import DOMLoader from "./DOMLoader";
import App from "./App";

// Image sources from webpack
import fullMoon from "../assets/images/moon/full-moon.png";
import firstQuarter from "../assets/images/moon/first-quarter.png";
import lastQuarter from "../assets/images/moon/first-quarter.png";
import newMoon from "../assets/images/moon/first-quarter.png";
import waningGibbous from "../assets/images/moon/first-quarter.png";
import waxingGibbous from "../assets/images/moon/first-quarter.png";
import waningCrescent from "../assets/images/moon/first-quarter.png";
import waxingCrescent from "../assets/images/moon/first-quarter.png";

// Handles all the rendering, updating of the UI and also the app
const Display = (() => {
  // Returns the icon for the current phase
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

  //Constant colors for caution
  const CAUTION_COLORS = {
    low: "#629d68",
    mid: "#ad6b2d",
    high: "#863e3e",
  };

  // Shows the "Loading screen"
  function showLoading() {
    DOMLoader.getObject(".loading-modal").classList.remove("hide");
  }

  // Hides the loading screen and displays the content
  function showContent() {
    window.scrollTo(0, 0);
    DOMLoader.getObject(".loading-modal").classList.add("hide");
  }

  // Renders the UI
  function renderUI() {
    const unitBtn = DOMLoader.getObject(".unit-switch");
    const unit = App.getSelectedUnitSystem();
    if (unit === "metric") {
      unitBtn.innerText = "°C";
    } else {
      unitBtn.innerText = "°F";
    }
  }

  // Creates an hour item based on the data
  function createHourItem(hourData) {
    const item = document.createElement("div");
    item.classList.add("hour-container", "content-card");

    const title = document.createElement("p");
    title.classList.add("hour-title");
    title.textContent = hourData.time;

    const icon = document.createElement("div");
    icon.classList.add("img", "hour-condition-img");
    icon.style.backgroundImage = "url(" + hourData.icon + ")";

    const temp = document.createElement("p");
    temp.classList.add("temperature");
    temp.textContent = hourData.feelsLike;

    if (hourData.current) {
      item.classList.add("current-hour-container");
    }

    item.append(title, icon, temp);

    return item;
  }

  //Fills the hours container with all the created hour items
  function fillHoursContainer(hours) {
    const hoursContainer = DOMLoader.getObject(".hours-container");
    hoursContainer.innerText = "";

    const frag = document.createDocumentFragment();
    hours.forEach((hour) => {
      const item = createHourItem(hour);
      frag.append(item);
    });

    hoursContainer.append(frag);
  }

  // Gets the current weather data and updates everything
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
    DOMLoader.getObject(".uv-index").textContent = weatherData.uv.index;
    DOMLoader.getObject(".uv-front").style.backgroundColor =
      CAUTION_COLORS[weatherData.uv.level];
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
    DOMLoader.getObject(".pollution").textContent = weatherData.pollution.index;
    DOMLoader.getObject(".pollution-front").style.backgroundColor =
      CAUTION_COLORS[weatherData.pollution.level];
    DOMLoader.getObject(".sunrise").textContent = weatherData.sun.rise;
    DOMLoader.getObject(".sunset").textContent = weatherData.sun.set;
    DOMLoader.getObject(".avg-humidity").textContent =
      weatherData.humidity.average;
    DOMLoader.getObject(".max-windspeed").textContent = weatherData.windMax;
    DOMLoader.getObject(".avg-visibility").textContent =
      weatherData.visibilityAvg;

    fillHoursContainer(weatherData.hours);
    showContent();
  }

  // Flips the card that is passed
  function flipCard(card) {
    card.classList.toggle("flip");
  }

  //Unflips all the flipped cards (in case of new search)
  function resetCards() {
    const cards = DOMLoader.getObject(".info-card");

    cards.forEach((card) => {
      if (card.classList.contains("flip")) {
        card.classList.toggle("flip");
      }
    });
  }

  return { renderUI, showLoading, showContent, update, flipCard, resetCards };
})();

export default Display;
