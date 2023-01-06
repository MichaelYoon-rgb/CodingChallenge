let text = document.getElementById("greeting")

const apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=en-GB|de-DE`;
const response = await fetch(apiURL)
const data = await response.json();
document.write(data["responseData"]["translatedText"])
