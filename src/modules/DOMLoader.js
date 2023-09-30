//Utility module to load most of the objects at the start so that
//DOM doesnt need to be queried multiple times for same object
const DOMLoader = (() => {
  let objects = {};

  //Private function of the module that queries the DOM
  //Queries 'document' object by default
  //Selects one or multiple objects based on type
  function queryObject(query, parent = document, queryType = "single") {
    if (queryType == "single") {
      objects[query] = {
        object: parent.querySelector(query),
        queryType,
        parent,
      };
    } else {
      objects[query] = {
        object: parent.querySelectorAll(query),
        queryType,
        parent,
      };
    }
  }

  //Loads all the objects on the creation of DOM module
  function loadObjects() {
    queryObject(".unit-switch");
  }

  //Reload an object; only if it has been loaded
  function reloadObject(query) {
    if (!objects[query]) {
      console.error("FATAL EROOR WE AINT DEALING WITH THIS SHIT NAH");
      return null;
    }

    queryObject(query, objects[query].parent, objects[query].queryType);
  }

  //Get an object by its css query if only its loaded
  function getObject(query) {
    if (!objects[query]) {
      console.error("Object not loaded");
    }
    return objects[query].object;
  }

  return { loadObjects, getObject, reloadObject };
})();

export default DOMLoader;