var bathroom = 0;
var beerM = 0;
var Marco = false;
var Gus = false;

function verificador() {
  if (bathroom == 0 && Marco == false && Gus == true) {
    console.log("Baño ocupado por Gus");
  } else if (bathroom == 0 && Marco == false) {
    entraMarco();
    console.log("Entro marco");
  } else if (bathroom == 1 && Gus == false && Marco == true) {
    console.log("Baño ocupado por Marco");
  } else if (bathroom == 1 && Gus == false) {
    entraGus();
    console.log("Entro gus");
  }
}

function entraMarco() {
  Marco = true;
  timerBathroom();
}

function entraGus() {
  Gus = true;
  timerBathroom();
}

function timerBathroom() {
  var timeup = 0;
  var upLoadtime = setInterval(function() {
    timeup++;
    document.getElementById("countuptimer").textContent = timeup;
    if (timeup == 4 && Marco == true && Gus == false) {
      timeup = 0;
      console.log("Salio marco");
      bathroom = 1;
      console.log("Bathroom esta libre" + bathroom);
      drink();
      clearInterval(upLoadtime);
    } else if (timeup == 6 && Gus == true && Marco == false) {
      timeup = 0;
      console.log("Salio Gus");
      bathroom = 0;
      console.log("Bathroom esta libre" + bathroom);
      drink();
      clearInterval(upLoadtime);
    }
  }, 1000);
}

function drink() {
  if (Marco == true) {
    Marco = false;
    drinkTimerM();
  } else if (Gus == true) {
    Gus = false;
    drinkTimerG();
  }
}

function drinkTimerM() {
  var beerM = 0;
  var upLoadbeerM = setInterval(function() {
    beerM++;
    document.getElementById("countupbeerM").textContent = beerM;
    if (beerM == 6 && Marco == false) {
      beerM = 0;
      Marco = false;
      console.log("Marco termino cerveza");
      verificador();
      clearInterval(upLoadbeerM);
    } else {
      verificador();
    }
  }, 1000);
}6

function drinkTimerG() {
  var beerG = 0;
  var upLoadbeerG = setInterval(function() {
    beerG++;
    document.getElementById("countupbeerG").textContent = beerG;
    if (beerG == 4 && Gus == false) {
      beerG = 0;
      Gus = false;
      // verificador();
      console.log("Gustavo termino cerveza");
      clearInterval(upLoadbeerG);
    } else {
      verificador();
    }
  }, 1000);
}
