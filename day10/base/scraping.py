import requests
from bs4 import BeautifulSoup
import csv

# スクレピングするサイト
url = "https://cookpad.com/recipe/6311648"

# Implement here.
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
ingredients = soup.select("div[class='ingredients_row']")
print(ingredients)

with open("ingredient.csv", "w") as f:
  writer = csv.writer(f)
  for ingredient in ingredients:
    name = ingredient.select("div[class*=ingredient_name']")[0].text.strip()
    quantity = ingredient.select("div[class*='ingredient_quantity']")[0].text.strip()
    writer.writerow([name, quantity])
