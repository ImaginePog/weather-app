import DOMLoader from "./DOMLoader";
import App from "./App";
import Display from "./Display";

const UI = (() => {
  function handleLocationSearch(e) {
    e.preventDefault();

    const location = DOMLoader.getObject("#location-search-bar").value;

    App.start(location);
    e.srcElement.reset();
  }

  function handleUnitBtnClick() {
    App.toggleUnitSystem();
    Display.renderUI();
    Display.update();
  }

  function listen() {
    DOMLoader.getObject(".search-bar").addEventListener(
      "submit",
      handleLocationSearch
    );
    DOMLoader.getObject(".unit-switch").addEventListener(
      "click",
      handleUnitBtnClick
    );
  }

  return { listen };
})();

export default UI;
