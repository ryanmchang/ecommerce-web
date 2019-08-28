/*
element - element (class, id, DOM elem) that you want to move
magnitude - higher number will slow down element movement
direction - X or Y
*/
export function parallax (element,magnitude,direction) {
  var movingObj = document.querySelector(element);
  var val  = scrollY;
  movingObj.style.transform = "translate" + direction + "(" + val / magnitude + "px)";
};
