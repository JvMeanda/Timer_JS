let MS = 0
let S = 0;
let M = 0;
let H = 0;
let interval;

function start() {
  clearInterval(interval);
  interval = setInterval(clock, 10);
}

function reset() {
  clearInterval(interval);

  MS = "0"
  S = "0"
  M = "0"
  H = "0"

  document.querySelector(".tempo").innerHTML = "00:00:00:00";

}

function stop() {
  clearInterval(interval);
}

function clock() {
  MS++;
  if(MS == 100){
    S++;
    MS = 0
  }

  if (S == 60) {
    M++;
    S = 0;
  }

  if (M == 60) {
    H++;
    M = 0;
  }

  const formatar =
    (H < 10 ? "0" + H : H) + ":" +(M < 10 ? "0" + M : M) + ":" +(S < 10 ? "0" + S : S) + ":" +(MS < 10 ? "0" + MS : MS);

    document.querySelector(".tempo").innerHTML = formatar;
}