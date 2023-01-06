// Lanuages that could be selected
var languages = [
  {
    Subtag: "es",
    Name: "Spanish"
  },
  {
    Subtag: "fr",
    Name: "French"
  },
  {
    Subtag: "de",
    Name: "German"
  },
  {
    Subtag: "cy",
    Name: "Welsh"
  }
]


// Sets the state of the bot as off.
var activated = false;
// Creates speechrecognition object and sets it properties.
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = speechRecognition.interimResults = true;


const synth = window.speechSynthesis || window.webkitSpeechSynthesis;

let voices = [];
let selectedVoice = synth.getVoices()[0];
var playingAudio = false;

function onClickActivate() {
  document.getElementById("moveTopContainer").style.animationName = "moveTop";
  document.getElementById("whiteBackground").style.animationName = "growTop";
  document.getElementsByClassName("audioColumn")[0].style.display = "block";
  activated = true;
}
function showDarkBackground() {
  document.getElementById("darkBackground").style.animationName = "darkBackgroundAnim";
}

function showDetectionContainer() {
  setTimeout(() => {
    showDarkBackground();
    document.getElementById("line").style.display = "block";
    document.getElementById("detectionContainer").style.animation ="showDetection 2s forwards";
  }, 3000);
}

function speak(text) {
  text = text.replace(/<br>/g, "\n");
  playingAudio = true;
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  const utterThis = new SpeechSynthesisUtterance(text);

  utterThis.onend = function (event) {
    playingAudio = false;
    console.log("SpeechSynthesisUtterance.onend");
  };

  utterThis.onerror = function (event) {
    console.error("SpeechSynthesisUtterance.onerror", event.error);
  };

  utterThis.voice = selectedVoice;

  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}


function outputInterim(message) {
  document.getElementById("interim").innerHTML = message;
}

function outputFinal(message) {
  document.getElementById("final").innerHTML = message;
}

function outputFinalAndInterim(final, interim) {
  outputFinal(final);
  outputInterim(interim);
}

function outputResponse(message) {
  document.getElementById("response").innerHTML = message;
}

function controlAudioColumns() {
  let audioColumn = document.getElementsByClassName("audioColumn");

  let secondCount = 0;
  for (let i = 0; i < audioColumn.length; i++) {
    audioColumn[i].style.animationDelay = secondCount + "s";
    secondCount += 0.1;
  }
}

function showHexagon(randomHexagon) {
  randomHexagon.classList.remove("hexagonHide");
}

function getSmallHexagon() {
  return document.getElementsByClassName("smallHexagon");
}

function hexagonDelay() {
  let hexagons = getSmallHexagon();
  for (let i = 0; i < hexagons.length; i++) {
    hexagons[i].style.animationDelay = Math.random() * 2 + "s";
  }
}
function hideRandomHexagon() {
  let hexagons = getSmallHexagon();
  let randomHexagon = hexagons[Math.floor(Math.random() * (hexagons.length - 1))];
  randomHexagon.classList.add("hexagonHide");
  setTimeout(function () { showHexagon(randomHexagon); }, 1500);
}

function main() {
  hexagonDelay();
  setInterval(() => { hideRandomHexagon(); }, 3000);
  
  document.getElementsByClassName("pushable")[0].addEventListener("click", () => { onClickActivate(); });

  controlAudioColumns();
  activateSpeechRecognition();
}

main();
