"use strict";

function dec() {
  document.querySelector(".getpeople").stepDown(1);
}

function inc() {
  document.querySelector(".getpeople").stepUp(1);
}

function result() {
  var billamount = document.getElementById("billval").value;
  var peoplecount = document.getElementById("cvalue").value;
  var gt = billamount / peoplecount;
  console.log(gt);
  document.getElementById("final").innerHTML = gt;
}