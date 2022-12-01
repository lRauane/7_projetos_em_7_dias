const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

timer = [0, 0, 0, 0];
var Interval;
var TimerRunning = false;

// Adiciona zero inicial aos números <= 9 
function leadingzero(time){
  if(time <= 9){
    time = `0 ${time}`
  };
  return time;
}

// Executa um timer padrão de minuto/ segundo / centessimo
function runTimer(){
  let currentTimer = `${leadingzero(timer[0])} : ${leadingzero(timer[1])} : ${leadingzero(timer[2])}`
  theTimer.innerHTML = currentTimer;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Verifica se texto digitado com o fornecido na página:
function spellCheck(){
  let textEntered = testArea.value
  let textOrigin = originText.substring(0, textEntered.length);
  if ( textEntered == originText){
    clearInterval(Interval);
    testWrapper.style.borderColor = '#429890';
  } else{
    if(textEntered == textOrigin){
      testWrapper.style.borderColor = '#65ccf3';
    } else{
      testWrapper.style.borderColor = '#e95d0f';
    };
  };
};

// Inicia o cronometro
function start(){
  let textEnteredLenght = testArea.value.length;
  if (textEnteredLenght === 0 && !TimerRunning){
    TimerRunning = true;
    Interval = setInterval(runTimer, 10);
  };
};
// Função de recomeçar
function reset(){
  clearInterval(Interval);
  Interval = null;
  timer = [0, 0, 0 , 0];
  TimerRunning = false;

  testArea.value = '';
  theTimer.innerHTML = '00:00:00';
  testWrapper.style.borderColor = "grey";
};

// Executa um timer padraão de minuto/ segundo / centesimio


// Listener de eventos para entrada de teclado e o botão de recomeçar
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
