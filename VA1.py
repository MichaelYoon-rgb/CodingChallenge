import os
import speech_recognition as sr
import playsound
import pyttsx3
import random
import requests
import datetime
import requests, json
api_key = "e6060d7f0ba818f039bc37878ad0c029"
base_url = "http://api.openweathermap.org/data/2.5/weather?"
complete_url = base_url + "appid=" + api_key + "&q=" + "London"
response = requests.get(complete_url)
x = response.json()
if x["cod"] != "404":
    y = x["main"]
    current_temperature = y["temp"]
    current_pressure = y["pressure"]
    current_humidity = y["humidity"]
    z = x["weather"]
    weather_description = z[0]["description"]
    print(" Temperature (Celcius) = " +
          str(round(current_temperature-272.15,2)) +
          "\n atmospheric pressure (in hPa unit) = " +
          str(current_pressure) +
          "\n humidity (in percentage) = " +
          str(current_humidity) +
          "\n description = " +
          str(weather_description))


jokes = ["Why should you never fight a dinosaur? Because you'll get jurasskicked. Hahahahahaha", ""]

r=sr.Recognizer()
print(sr.Microphone.list_microphone_names())
engine = pyttsx3.init()
voices = engine.getProperty("voices")
rate = engine.getProperty("rate")
engine.setProperty("rate", 100)
engine.setProperty("voice", voices[1].id)

def sound(text):
    engine.say(text)
    engine.runAndWait()


def get_audio():
    
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source,duration=1)
        print("say anything : ")
        audio= r.listen(source)
        text= ""
        try:
            text = r.recognize_google(audio)
            print(text)
        except:
            print("sorry, could not recognise")
    return text
    
while True:
    text2 = get_audio()
    if "hello" in text2:
        sound("Hello")
    if "what is your name" in text2:
        sound("My name is Pasham")
    if "tell me a joke" in text2:
        sound(random.choice(jokes))
    if "tell me weather" in text2:
        sound(" Temperature (Celcius) = " +
          str(round(current_temperature-272.15,2)) +
          "\n atmospheric pressure (in hPa unit) = " +
          str(current_pressure) +
          "\n humidity (in percentage) = " +
          str(current_humidity) +
          "\n description = " +
          str(weather_description))

