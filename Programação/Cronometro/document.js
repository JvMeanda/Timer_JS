const startCronometro = document.querySelector("#start");
const stopCronometro = document.querySelector("#stop");
const resetCronometro = document.querySelector("#reset");

let MS = 0;
let S = 0;
let M = 0;
let H = 0;
let interval;

// CRONÔMETRO

startCronometro.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(clock, 10);
});

resetCronometro.addEventListener("click", () => {
  clearInterval(interval);

  MS = "0";
  S = "0";
  M = "0";
  H = "0";

  document.querySelector(".tempo").innerHTML = "00:00:00:00";
});

stopCronometro.addEventListener("click", () => {
  clearInterval(interval);
});

function clock() {
  MS++;
  if (MS == 100) {
    S++;
    MS = 0;
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
    (H < 10 ? "0" + H : H) +
    ":" +
    (M < 10 ? "0" + M : M) +
    ":" +
    (S < 10 ? "0" + S : S) +
    ":" +
    (MS < 10 ? "0" + MS : MS);

  document.querySelector(".tempo").innerHTML = formatar;
}

// TIMER

const horasValue = document.querySelector("#horas");
const minutosValue = document.querySelector("#minutos");
const segundosValue = document.querySelector("#segundos");
const btn_stop = document.querySelector("#stop_timer");
const btn_start = document.querySelector("#start_timer");
const btn_reset = document.querySelector("#reset_timer");
let input_interval;
let resetValue = 0;

btn_start.addEventListener("click", () => {
  const hours = parseInt(horasValue.value);
  const minutes = parseInt(minutosValue.value);
  const seconds = parseInt(segundosValue.value);

  const total_de_Segundos = hours * 60 * 60 + minutes * 60 + seconds;

  startTimer(total_de_Segundos);
});

function startTimer(total_de_Segundos) {
  input_interval = setInterval(() => {
    total_de_Segundos--;
    atualizarInputs(total_de_Segundos);

    if (total_de_Segundos <= 0) {
      input_interval = clearInterval(input_interval);
    }
  }, 1000);
}

btn_reset.addEventListener("click", () => {
  clearInterval(input_interval);

  document.querySelector('input[name="horas"]').value = "00";
  document.querySelector('input[name="minutos"]').value = "00";
  document.querySelector('input[name="segundos"]').value = "00";
});

btn_stop.addEventListener("click", () => {
  clearInterval(input_interval);
});

function atualizarInputs(totalSeconds) {
  const horas = parseInt(Math.floor(totalSeconds / 60 / 60));
  const minutos = parseInt(Math.floor((totalSeconds / 60) % 60, 10));
  const segundos = parseInt(totalSeconds % 60, 10);

  hrs = horas < 10 ? "0" + horas : horas;
  min = minutos < 10 ? "0" + minutos : minutos;
  seg = segundos < 10 ? "0" + segundos : segundos;

  horasValue.value = hrs;
  minutosValue.value = min;
  segundosValue.value = seg;
}

// MUDAR O CRONÔMETRO PELO TIMER

const btn_left_cronometro = document.querySelector("#arrow_left_cronometro");
const btn_right_cronometro = document.querySelector("#arrow_right_cronometro");
const btn_left_timer = document.querySelector("#arrow_left_timer");
const btn_right_timer = document.querySelector("#arrow_right_timer");
const timer_body = document.querySelector(".timer");
const cronometro_body = document.querySelector(".cronometro");

btn_left_cronometro.addEventListener("click", () => {
  cronometro_body.style.display = "none";
  timer_body.style.display = "block";
});

btn_right_cronometro.addEventListener("click", () => {
  cronometro_body.style.display = "none";
  timer_body.style.display = "block";
});

btn_left_timer.addEventListener("click", () => {
  timer_body.style.display = "none";
  cronometro_body.style.display = "block";
});

btn_right_timer.addEventListener("click", () => {
  timer_body.style.display = "none";
  cronometro_body.style.display = "block";
});
