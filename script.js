const monthEl = document.querySelector(".month");
const weekEl = document.querySelector(".weekday");
const dayEl = document.querySelector(".day");
const yearEl = document.querySelector(".year");

var date = new Date();
var month = date.getMonth();
monthEl.innerHTML = date.toLocaleString("en", { month: "long" });

var week = date.getDay();
weekEl.innerHTML = date.toLocaleString("en", {
  weekday: "long",
});

dayEl.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
