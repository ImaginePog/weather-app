import "./styles/style.css";
import DOMLoader from "./modules/DOMLoader";
import Display from "./modules/Display";
import UI from "./modules/UI";
import App from "./modules/App";

DOMLoader.loadObjects();
App.start();
Display.renderUI();
UI.listen();
