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
  var gt = (billamount / peoplecount).toFixed(2);

  if (billamount == "" | billamount <= 0) {
    alert("Invalid entry detected, Please retry");
  } else {
    console.log(gt);
    document.getElementById("final").innerHTML = "Each person should pay" + " " + gt + " " + "₹";
  }
}