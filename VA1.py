import speech_recognition as sr
import pyttsx3
import random
import requests

jokes = ["Why should you never fight a dinosaur? Because you'll get jurasskicked. Hahahahahaha", ""]

def init_engine():
    engine = pyttsx3.init()
    voices = engine.getProperty("voices")
    engine.setProperty("rate", 150)
    engine.setProperty("voice", voices[1].id)

    return engine

def get_current_weather(city):
    api_key = "e6060d7f0ba818f039bc37878ad0c029"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    url = base_url + "appid=" + api_key + "&q=" + city
    
    response = requests.get(url)
    results = response.json()

    if results["cod"] != "404":
        results_main = results["main"]
        
        results_main_temperature = results_main["temp"]
        results_main_pressure = results_main["pressure"]
        results_main_humidity = results_main["humidity"]

        results_weather = results["weather"]
        results_weather_description = results_weather[0]["description"]

        return f"""The temperature is {round(results_main_temperature-272.15,2)} degrees celcius
        The atmospheric pressure is {results_main_pressure} hectopascals
        The humidity is {results_main_humidity} percent
        Description: {results_weather_description}"""
            
def get_random_joke():
    return random.choice(jokes)

def get_va_name():
    return "My name is Pasham"

def log_microphones():
    print(sr.Microphone.list_microphone_names())


def say(text):
    engine.say(text)
    engine.runAndWait()

def output(text):
    say(text)
    print(text)

def listen():
    with sr.Microphone() as source:
        recogniser.adjust_for_ambient_noise(source,duration=1)

        audio = recogniser.listen(source)
        text = ""

        try:
            text = recogniser.recognize_google(audio)
            print(text)

        except:
            output("Sorry, I didn't quite hear that. Could you say that again?")

    return text
   
recogniser =sr.Recognizer()
log_microphones()
engine = init_engine()

output("Hello, how can I help you?")   

while True:
    speech_input = listen()
    if "hello" in speech_input:
        output("Hello")
    
    elif "what is your name" in speech_input:
        output(get_va_name())
    
    elif "tell me a joke" in speech_input:
        output(get_random_joke())
    
    elif "tell me weather" in speech_input:
        output(get_current_weather("London"))
