import requests
from bs4 import BeautifulSoup
import csv

# スクレピングするサイト
url = "https://cookpad.com/recipe/6311648"

# Implement here.
html = requests.get(url)
soup = BeautifulSoup(html.comtent, "html.parser")
nodes = soup.select("div[class*='ingredients_list']")
print(nodes)