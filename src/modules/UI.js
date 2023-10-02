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

  function handleMainClick(e) {
    if (!e.target.dataset.action) {
      return;
    }

    Display.flipCard(e.target);
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

    DOMLoader.getObject("#main").addEventListener("click", handleMainClick);
  }

  return { listen };
})();

export default UI;
