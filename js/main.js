
//calcul du nombre de jours de RTT 2017 

//DONNEES 

//nombre de jours de l'année
//nombre de samedi et dimanche
//nombre de jours ouvrés de congés payés
//nombre de jours fériés tombant entre le lundi et le vendredi


//prepartion pour envoyer les valeurs

function calcule() {
  document.querySelector("#njo").innerHTML = "360";
  document.querySelector("#njt").innerHTML = "218";
  document.querySelector("#ncp").innerHTML = "25";
  document.querySelector("#rtt").innerHTML = "255";

}


// etape 1 

function joursOvrés(start,end) {
  let first = start;
  let last = end; 
  let days = last * 5 / 7;
  let wfirst = first- start; 
  if(start == 0) --wfirst;  
  let wlast = end - last; 
  if(end == 6) --wlast; 
  return wfirst + days + wlast; 
}
// il faut utiliser DD-MM-YYYY moment pour formaté la date 
var ftest = {date:'2017-01-01',start:1,end:7};
var ltest = {date:'2017-12-31',start:2,end:8};
var f = 'YYYY-MM-DD';
for(var z=ftest.start; z<=ftest.end; ++z) {
  var start = ftest.date + z;
  for(var y=ltest.start; y<=ltest.end; ++y) {
    var end = ltest.date + y;
    var wd = joursOvrés(start,end);
    console.log('from: '+start,'to: '+end,'is '+wd+' day(s)');
  }
}


//etape 2

function jourFérié(an){
let JourAn = new Date(an, "00", "01");
let FeteTravail = new Date(an, "04", "01");
let Victoire1945 = new Date(an, "04", "08");
let FeteNationale = new Date(an,"06", "14");
let Assomption = new Date(an, "07", "15");
let Toussaint = new Date(an, "10", "01");
let Armistice = new Date(an, "10", "11");
let Noel = new Date(an, "11", "25");

let G = an%19;
let C = Math.floor(an/100);
let H = (C - Math.floor(C/4) - Math.floor((8*C+13)/25) + 19*G + 15)%30;
let I = H - Math.floor(H/28)*(1 - Math.floor(H/28)*Math.floor(29/(H + 1))*Math.floor((21 - G)/11));
let J = (an*1 + Math.floor(an/4) + I + 2 - C + Math.floor(C/4))%7;
let L = I - J;
let MoisPaques = 3 + Math.floor((L + 40)/44);
let JourPaques = L + 28 - 31*Math.floor(MoisPaques/4);
let Paques = new Date(an, MoisPaques-1, JourPaques);
let LundiPaques = new Date(an, MoisPaques-1, JourPaques+1);
let Ascension = new Date(an, MoisPaques-1, JourPaques+39);
let Pentecote = new Date(an, MoisPaques-1, JourPaques+49);
let LundiPentecote = new Date(an, MoisPaques-1, JourPaques+50);

return new Array(JourAn, Paques, LundiPaques, FeteTravail, Victoire1945, Ascension, Pentecote, LundiPentecote, FeteNationale, Assomption, Toussaint, Armistice, Noel);
}





