import requests
import sys

BASE = "http://127.0.0.1:5000/"

response = requests.get(BASE + "deploy_lottery")
print(response.json())