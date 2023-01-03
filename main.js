var responses = [
  {
    Keyword: ["Joke"],
    Response: [
      "Which is faster, hot or cold? Hot, because you can catch cold.",
      "What did one plate say to the other plate? Dinner's on me.",
      "Why do oranges wear sunscreen? So they don't peel.",
      "My wife told me to stop acting like a flamingo, so I had to put my foot down.",
      "What do you call a pig that does karate? A pork chop.",
      "Where does Batman go to the bathroom? The batroom.",
      "What do you call a pony with a sore throat? A little horse.",
      "What did the left eye say to the right eye? Between you and me, something smells."
    ]
  },
  {
    Keyword: ["Weather", "Temperature"],
    Response: []
  },
  {
    Keyword: ["Recipe"],
    Response: [
      "1. heat oven to 375˚F (190˚C).<br>2. In a small bowl, mix together the cake mix and 2 tablespoons of melted butter until the mixture is crumbly.<br>3. Pour 1 tablespoon of melted butter into the bottom of two small cast-iron skillets.<br>4. Arrange the apple slices in each skillet, ensuring the bottom is covered.<br>5. Sprinkle cake mixture over the apples.<br>6. Bake for 20 minutes, or until top appears crispy and edges are bubbling.<br>7. Cool for 10 minutes."
    ]
  },
  {
    Keyword: ["Birthday"],
    Response: [
      "Happy Birthday to you<br>Happy Birthday to you<br>Happy Birthday dear (name)<br>Happy Birthday to you."
    ]
  }
];

var activated = false;
let speechRecognition = new webkitSpeechRecognition();

speechRecognition.continuous = true;
speechRecognition.interimResults = true;

async function getLondonWeather() {
  let tempValue, descValue;
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      "london" +
      "&appid=50a7aa80fa492fa92e874d23ad061374"
  )
    .then((response) => response.json())
    .then((data) => {
      tempValue = data["main"]["temp"];
      descValue = data["weather"][0]["description"];
    });
  return [tempValue, descValue];
}

async function setLondonWeather() {
  let londonWeather = await getLondonWeather();
  responses[1]["Response"].push(
    londonWeather[0] + " Degrees with " + londonWeather[1]
  );
}

setLondonWeather();

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
  document.getElementById("darkBackground").style.animationName =
    "darkBackgroundAnim";
}

function showDetectionContainer() {
  setTimeout(() => {
    showDarkBackground();
    document.getElementById("line").style.display = "block";
    document.getElementById("detectionContainer").style.animation =
      "showDetection 2s forwards";
  }, 3000);
}

function speak(text) {
  text = text.replace(/<br>/g, "");
  if (synth.speaking) {
    playingAudio = true;
    console.error("speechSynthesis.speaking");
    return;
  }
  console.log("text", text);
  playingAudio = true;
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

function activateSpeechRecognition() {
  let final_transcript = "";

  speechRecognition.onresult = async (event) => {
    if (playingAudio == false) {
      let interim_transcript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      document.getElementById("final").innerHTML = final_transcript;
      document.getElementById("interim").innerHTML = interim_transcript;

      if (
        interim_transcript.toLowerCase() == "activate" ||
        final_transcript.toLowerCase().includes("activate")
      ) {
        onClickActivate();
        showDetectionContainer();
        final_transcript = "";
        interim_transcript = "";
        document.getElementById("final").innerHTML = final_transcript;
        document.getElementById("interim").innerHTML = interim_transcript;
      }
      if (activated) {
        showDetectionContainer();
      }
      let handledResponse = handleResponses(final_transcript);

      if (handledResponse.length) {
        document.getElementById("response").innerHTML = handledResponse;
        await speak(handledResponse);
        final_transcript = "";
        interim_transcript = "";
      }
    }
  };

  speechRecognition.start();
}

function handleResponses(input) {
  let newInput = input;

  newInput = newInput.replace(".", " ");
  newInput = newInput.split(" ");

  for (let wordIndex = 0; wordIndex < newInput.length; wordIndex++) {
    let currentWord = newInput[wordIndex];
    for (
      let responseIndex = 0;
      responseIndex < responses.length;
      responseIndex++
    ) {
      let keywords = responses[responseIndex]["Keyword"];
      for (
        let keywordIndex = 0;
        keywordIndex < keywords.length;
        keywordIndex++
      ) {
        if (keywords[keywordIndex].toLowerCase() == currentWord.toLowerCase()) {
          let validResponses = responses[responseIndex]["Response"];

          return validResponses[
            Math.floor(Math.random() * validResponses.length)
          ];
        }
      }
    }
  }
  return "";
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

function hexagonDelay() {
  let hexagons = document.getElementsByClassName("smallHexagon");
  for (let i = 0; i < hexagons.length; i++) {
    hexagons[i].style.animationDelay = Math.random() * 2 + "s";
  }
}
function hideRandomHexagon() {
  let hexagons = document.getElementsByClassName("smallHexagon");
  let randomHexagon =
    hexagons[Math.floor(Math.random() * (hexagons.length - 1))];
  randomHexagon.classList.add("hexagonHide");
  setTimeout(function () {
    showHexagon(randomHexagon);
  }, 1500);
}

function main() {
  hexagonDelay();
  setInterval(() => {
    hideRandomHexagon();
  }, 3000);

  document
    .getElementsByClassName("pushable")[0]
    .addEventListener("click", () => {
      onClickActivate();
    });

  controlAudioColumns();
  activateSpeechRecognition();
}
main();
