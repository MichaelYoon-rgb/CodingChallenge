let text = document.getElementById("greeting")

let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=en-GB|de-DE`;
let response = fetch(apiURL)
document.write(response["translation"])
