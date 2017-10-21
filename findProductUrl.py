#################################################################################################
# Programmer: Chase Johnson                                                                     #
# Date: 10/21/17                                                                                #
# File Name: findProductUrl.py                                                                  #
# Description:  Using www.myfitnesspal.com, this function takes as a parameter a product        #
#               name and returns the url of the nutrition facts of the top hit on the search    #
#               of the myfinesspal website.                                                     #
#################################################################################################

from robobrowser import RoboBrowser


def searchForProductURL(product):
    # Browse to Nutrition Facts Search Page
    url = 'http://www.myfitnesspal.com/food/search'
    browser = RoboBrowser(history=True)
    browser.open(url)

    # Search for a product
    form = browser.get_form(0)
    form['search'] = product
    browser.submit_form(form)

    urlArr = []
    # Search the HTML for links
    links = browser.find_all("a")
    for link in links:
        # The first link to food items
        if "http" not in link.get("href") and "/food/calories/" in link.get("href"):
            # print(link.get("href"))
            urlArr.append(link.get("href"))
    # Format the url so that it returns the desired working url
    url = url.replace("/food/search", "")
    return(url + urlArr[0])

# This is an example: print(searchForProductURL('Peanut Butter'))
