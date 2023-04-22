import observer from "./intersectionObserver.js"

$(document).ready(() => {
  console.log("ready!");
  observer.observe($("#heading")[0]);
  observer.observe($("#about")[0]);
})