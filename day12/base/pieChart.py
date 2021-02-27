import requests
from bs4 import BeautifulSoup
import datetime
import matplotlib.pyplot as plt

url = "https://github.com/kuribara-s" #Change me!
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
contributionCalendars = soup.select(
    "div[class*='ContributionCalendar'] svg g g rect[class*='ContributionCalendar-day']")

totalDaysOfEachLevel = [0,0,0,0,0]
# Implement here.
for contributionCalendar in contributionCalendars:
    date = contributionCalendar['data-date']
    level = contributionCalendar['data-level']
    if date >= "2021-02-01" and date <= "2021/02/29" :
        print(date, level)
        if level == "4":
            totalDaysOfEachLevel[4] += 1
        elif level == "3":
            totalDaysOfEachLevel[3] += 1
        elif level == "2":
            totalDaysOfEachLevel[2] += 1
        elif level == "1":
            totalDaysOfEachLevel[1] += 1
        else:
            totalDaysOfEachLevel[0] += 1


print(totalDaysOfEachLevel)
plt.pie(totalDaysOfEachLevel, colors=["#e1e4e8", "#85e89d", "#34d058", "#22863a", "#144620"])
plt.show()
