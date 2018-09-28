var bathroom = 0;
var beer = 0;
var Marco = false;
var Gus = false;

function verificador() {
  if (bathroom == 0 && Marco == false) {
    entraMarco();
    console.log("Entro marco");
  } else if (bathroom == 1 && Gus == false) {
    entraGus();
    console.log("Entro gus");
  }else if(bathroom == 0 && Marco == false && Gus == true){
    console.log("Gus esta en el baño");
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
      verificador();
      clearInterval(upLoadtime);
    } else if (timeup == 6 && Gus == true && Marco == false) {
      timeup = 0;
      console.log("Salio Gus");
      bathroom = 0;
      console.log("Bathroom esta libre" + bathroom);
      drink();
      verificador();
      clearInterval(upLoadtime);
    }
  }, 1000);
}

function drink() {
    if (Marco == true && Gus == false) {
        Marco = false;
    }else if(Gus == true && Marco == false){
        Gus = false;
    }
  alert(Marco * Gus);
}
