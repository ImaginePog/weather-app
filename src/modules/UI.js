import DOMLoader from "./DOMLoader";
import App from "./App";
import Display from "./Display";

// Handles all the events and the interaction of the users
const UI = (() => {
  // Event handler for the submission of the location
  function handleLocationSearch(e) {
    e.preventDefault();

    const location = DOMLoader.getObject("#location-search-bar").value;

    App.start(location);
    e.srcElement.reset();
  }

  // Event handle for handling the behavior of the unit button
  // Toggles the unit system and also displays the current unit
  function handleUnitBtnClick() {
    App.toggleUnitSystem();
    Display.renderUI();
    Display.update();
  }

  // Handles all clicks in "main" for now only flipps the selected card
  function handleMainClick(e) {
    if (!e.target.dataset.action) {
      return;
    }

    Display.flipCard(e.target);
  }

  // Adds all the event listeners to their respective objects
  function listen() {
    DOMLoader.getObject(".search-bar").addEventListener(
      "submit",
      handleLocationSearch
    );
    DOMLoader.getObject(".unit-switch").addEventListener(
      "click",
      handleUnitBtnClick
    );

    DOMLoader.getObject("#main").addEventListener("click", handleMainClick);
  }

  return { listen };
})();

export default UI;
