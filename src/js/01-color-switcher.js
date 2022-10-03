const delayInterval = 1000;
let timerId = 0

const refs = {
    body: document.body,
    startBtn: document.querySelector('[data-start]'),
    stopBtn:document.querySelector('[data-stop]')
}

refs.startBtn.addEventListener('click', onStartClick)
refs.stopBtn.addEventListener('click', onStopClick)

function onStartClick() {
    refs.startBtn.disabled = true
    refs.stopBtn.disabled = false
   timerId =  setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, delayInterval);
}


function onStopClick() {
    refs.startBtn.disabled = false
    refs.stopBtn.disabled = true
    clearInterval(timerId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}