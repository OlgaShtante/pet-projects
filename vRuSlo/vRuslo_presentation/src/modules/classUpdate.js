function addClass(className, elements) {
  elements.forEach(function(element) {
    element.classList.add(className);
  });
}

function removeClass(className, elements) {
  elements.forEach(function(element) {
    element.classList.remove(className);
  });
}

function ClassUpdate() {}
ClassUpdate.addClass = addClass;
ClassUpdate.removeClass = removeClass;

export { ClassUpdate };
