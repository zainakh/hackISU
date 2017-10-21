import bs4 as bs
import urllib.request

# Extract the html data from the website
sauce = urllib.request.urlopen('http://www.myfitnesspal.com/food/calories/382905495').read()

# Extract a nicer version of the data
soup = bs.BeautifulSoup(sauce, 'lxml')

# Print the title of the page (the type of food we are dealing with)
print(soup.title.string)
arr = []

# Make a list filled with all 'td' (Table Data) objects
# These hold the data in the nutrition facts table
for col in soup.find_all('td'):
    # print(col.text)
    arr.append(col.text)

titleArr = []
dataArr = []
# Every other 'td' entry is a Title (such as Calories)
# and Data (such as 833).  Create a list of the titles and the data
for index in range(len(arr)):
    if (index%2 == 0):
        titleArr.append(arr[index])
    if (index%2 == 1):
        dataArr.append(arr[index])

# Make a dictionary <Title, Data> to represent the nutrition facts of the item


nutFacts = {}
for index in range(len(titleArr)):
    nutFacts.update({titleArr[index]:dataArr[index]})

print(nutFacts)

# <h1 class="main-title">Calories in  Cheese, cheddar</h1>
