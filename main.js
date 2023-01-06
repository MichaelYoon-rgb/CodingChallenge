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

// All responses to user input. The function searches for the key (Keyword) in the input and outputs the value (in Response).
var responses = [
  {
    Keyword: ["joke"],
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
    Keyword: ["weather", "temperature"],
    Response: []
  },
  {
    Keyword: ["recipe"],
    Response: [
      "Shakshuka<br><br>" +
        "Ingredients:<br>3 tbsp olive oil<br>2 large onions thinly sliced<br>2 red peppers cut into long slices<br>2 green peppers cut into long slices<br>4 garlic cloves finely chopped<br>½ tsp cumin seeds<br>½ tsp caraway seeds<br>½ tsp cayenne pepper<br>1 tbsp tomato or red pepper purée<br>2 400 grams tins tomatoes<br>1 small bunch fresh coriander roughly chopped<br>1 small bunch fresh parsley roughly chopped<br>8 free-range eggs<br>85 grams crumbled feta<br>8 tbsp thick natural yoghurt or labneh<br>salt and freshly ground black pepper.<br><br>" +
        "Steps:<br>1. Heat the olive oil in a large, lidded frying pan. Add the onions and peppers and season with salt and pepper. Cook on a medium heat until just softened. Add the garlic and cook for a further 2 minutes. Sprinkle in the cumin and caraway seeds and the cayenne pepper. Stir in the tomato or red pepper purée and cook for a couple more minutes until the paste starts to separate. Add the tomatoes with a splash of water.<br>2. Simmer for 10 minutes, uncovered, until reduced a little. Taste after 5 minutes and add a little sugar if you think the tomatoes need it. Keep an eye on the texture – you don’t want it runny, but it mustn’t get too dry either. Add another splash of water if necessary. When the sauce is reduced, stir in the herbs.<br>3. Make 8 small wells in the sauce. Break an egg into a cup and drop carefully into a well, repeat with the remaining eggs. Cook for a few more minutes until the whites are just set and the yolks are still runny. Sprinkle over the crumbled feta. Serve with yogurt or labneh on the side.",
      "Banana Bread<br><br>" +
        "Ingredients:<br>285 grams plain flour<br>1 tsp bicarbonate of soda<br>½ tsp salt<br>110 grams butter, plus extra for greasing<br>225 grams caster sugar<br>2 free-range eggs<br>4 ripe bananas, mashed<br>85ml buttermilk (or normal milk mixed with 1½ tsp lemon juice or vinegar)<br>1 tsp vanilla extract<br><br>" +
        "Steps:<br>1. Preheat the oven to 180 Celcius/350 Fahrenheit/Gas 4.<br>2. Sift the flour, bicarbonate of soda and salt into a large mixing bowl.<br>3. In a separate bowl, cream the butter and sugar together until light and fluffy.<br>4. Add the eggs, mashed bananas, buttermilk and vanilla extract to the butter and sugar mixture and mix well. Fold in the flour mixture.<br>5. Grease a 20cm x 12.5cm loaf tin and pour the banana bread mixture into the tin.<br>6. Transfer to the oven and bake for about an hour, or until well-risen and golden-brown.<br>7. Remove from the oven and cool in the tin for a few minutes, then turn out onto a wire rack to cool completely before serving.",
      "Perfect Chocoloate Chip Cookies<br><br>" +
        "Ingredients:<br>250 grams plain flour<br>½ tsp baking powder<br>½ tsp bicarbonate of soda<br>½ tsp sea salt flakes, plus extra for sprinkling<br>110 grams unsalted butter, diced and at room temperature<br>110 grams light brown sugar<br>110 grams caster sugar<br>1 large free-range egg<br>½ tsp vanilla extract<br>250 grams chocolate<br><br>" +
        "Steps:<br>1. To make the cookie dough, whisk together the flour, baking powder, bicarbonate of soda and salt in a large bowl. Place the butter and sugars in a separate large bowl and, using an electric hand-held mixer, beat together for about 4 to 5 minutes until light. Add the egg, beating until fully combined, then briefly mix in the vanilla.<br>2. Add the flour mixture and mix just until a dough is formed. Add the chocolate and mix until evenly distributed.<br>3. Chill the dough for 24 to 48 hours before baking. This process helps the flour to hydrate and makes for a better tasting cookie that is more likely to caramelise as it bakes. You can skip this process but the dough will still need refrigerating for a few hours so that it can be rolled into balls and will bake without spreading too much.<br>4. Preheat the oven to 180 celcius/160 celcius Fan/Gas 4 and line two baking trays with baking paper. Use your hands or an ice cream scoop to form balls of dough (about 60 to 70 grams per cookie). Sprinkle with a little sea salt and place onto the prepared baking trays, leaving 2.5 to 5cm between each cookie.<br>5. Bake, in batches of six, for about 16 to 18 minutes or until golden around the edges but still slightly pale in the middle. Leave to cool for a few minutes before transferring to a wire rack to cool completely. Serve immediately or keep in a sealed container for up to 4 days.",
      "Easy slow cooker spaghetti Bolognese<br><br>" +
        "Ingredients:<br>500 grams beef mince<br>1 medium onion, finely chopped<br>2 garlic cloves, crushed<br>200 grams mushrooms, any kind, sliced<br>400 grams tin chopped tomatoes<br>275ml hot beef stock, made with 1 beef stock cube<br>3 tbsp tomato purée<br>1 tsp dried oregano<br>2 dried bay leaves, or 1 fresh<br>salt and freshly ground black pepper<br>freshly cooked spaghetti, grated cheese and basil, to serve<br><br>" +
        "Steps:<br>1. Put the mince and onion in a large non-stick frying pan and fry together over a medium–high heat for about 4 minutes, stirring and squishing against the side of the pan with a couple of wooden spoons to break up the mince as much as possible.<br>2. Add the garlic and cook for 1 minute more.<br>3. Tip the mince and onions into the slow cooker and add the mushrooms, tomatoes, stock, tomato purée and herbs. Season with salt and lots of freshly ground black pepper.<br>4. Cover the slow cooker with its lid and cook on high for 4 to 5 hours or low for 6 to 8 hours.<br>5. When ready, serve the Bolognese sauce with freshly cooked spaghetti, some grated cheese and basil, if you like."
    ]
  },
  {
    Keyword: ["birthday"],
    Response: ["Happy Birthday to you<br>Happy Birthday to you<br>Happy Birthday to you...<br>Happy Birthday to you."]
  },
  {
    Keyword: ["hello"],
    Response: ["Hello, I am Pasham. What would you like me to do?"]
  },
  {
    Keyword: ["coffee turkish or greek"],
    Response: ["It is indeed Turkish Coffee"]
  }
];
// Sets the state of the bot as off.
var activated = false;
// Creates speechrecognition object and sets it properties.
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = speechRecognition.interimResults = true;

// Variables usedfor the weather searching function. With the url as the open weather api.
const zeroKelvin = -273.15;
const LONDON_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=50a7aa80fa492fa92e874d23ad061374";

// Function used to fetch current weather in London and output temprature and description.
async function setLondonWeather() {
  let londonWeather = await getLondonWeather();
  responses[1]["Response"].push(londonWeather[0] + " degrees celcius with " + londonWeather[1]);

  async function getLondonWeather() {
    let tempValue, descValue;

    const response = await fetch(LONDON_WEATHER_URL);
    const data = await response.json();
    tempValue = (data["main"]["temp"] + zeroKelvin).toFixed(2);
    descValue = data["weather"][0]["description"];
    

    return [tempValue, descValue];
  }
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

function handleLanguage(interim_transcript, final_transcript, translatedInput, translatedText) {
  if (interim_transcript.toLowerCase() == "spanish" || final_transcript.toLowerCase().includes("spanish")){
    
    speechRecognition.lang="es";
    translatedText = await translate(final_transcript, "es");
    translatedInput = true;
    final_transcript = interim_transcript = "";
    
    let successfulSwitch = "I have switched the language";
    outputResponse(successfulSwitch);
    await speak(successfulSwitch);
    
  }
  
  if (interim_transcript.toLowerCase() == "english" || final_transcript.toLowerCase().includes("english")){
    
    translatedInput = false;
    speechRecognition.lang="en";
    final_transcript = interim_transcript = "";
    
    let successfulSwitch = "I have switched the language";
    outputResponse(successfulSwitch);
    await speak(successfulSwitch);
  }
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

const activateCommand = "activate";

function handleActivation(final_transcript,interim_transcript) {
  if (interim_transcript.toLowerCase() == activateCommand || final_transcript.toLowerCase().includes(activateCommand)) {
    onClickActivate();
    showDetectionContainer();
    final_transcript = interim_transcript = "";
    outputFinalAndInterim(final_transcript, interim_transcript);
    
  }
}

function onResult(final_transcript, translatedInput, translatedText) {
  let final_transcript = "";
  let interim_transcript = "";
  
  let translatedText = "";
  let translatedInput = false;
  
  console.log(synth.speaking, event.results)
  
  if (!synth.speaking) {
    
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        
      } else {
        interim_transcript += event.results[i][0].transcript;
        
      }
    }
    
    outputFinalAndInterim(final_transcript, interim_transcript);
    
    handleActivation(final_transcript,interim_transcript);
    
    handleLanguage(interim_transcript, final_transcript, translatedInput, translatedText);
    
    if (activated) { showDetectionContainer(); }
    
    let handledResponse;
    
    if (translatedInput && translatedText.length){
      translatedText = await translate(final_transcript, "es");
      handledResponse = handleResponses(translatedText);
    } else {
      handledResponse = handleResponses(final_transcript);
    }
    
    if (handledResponse.length) {
      document.getElementById("response").innerHTML = handledResponse;

      await speak(handledResponse);
      final_transcript = interim_transcript = "";
      
    }
  }
}

function activateSpeechRecognition() {
  speechRecognition.onresult = async (event) => { onResult(); };

  speechRecognition.start();
}


async function translate(source, sourceLang, targetLang="en"){
  
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(source);
  return await fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0][0][0])
    return data[0][0][0]
  });
}

function handleResponses(input) {
  let newInput = input.replace(".", " ").toLowerCase();

  for (let responseIndex = 0; responseIndex < responses.length; responseIndex++) {
    if (responses[responseIndex]["Keyword"].some((keyword) => newInput.includes(keyword))) {
      let validResponses = responses[responseIndex]["Response"];
      return validResponses[Math.floor(Math.random() * validResponses.length)];
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
