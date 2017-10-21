import re
from robobrowser import RoboBrowser

# def searchForProductURL(product):
    # Browse to Nutrition Facts Search Page
browser = RoboBrowser(history=True)
browser.open('http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts')

# Search for a product
form = browser.get_form(action='/search')
print(form)
# form['q'].value = 'cheese'
browser.submit_form(form)

# Look up the first result (assume this to be the best result)
products = browser.select('.song_name')
browser.follow_link(products[0])

    # return browser.url

# print(searchForProductURL('cheese'))
