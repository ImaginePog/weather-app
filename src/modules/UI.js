import DOMLoader from "./DOMLoader";
import App from "./App";
import Display from "./Display";

const UI = (() => {
  function handleUnitBtnClick() {
    App.toggleUnitSystem();
    Display.renderUI();
    Display.update();
  }

  function listen() {
    DOMLoader.getObject(".unit-switch").addEventListener(
      "click",
      handleUnitBtnClick
    );
  }

  return { listen };
})();

export default UI;
