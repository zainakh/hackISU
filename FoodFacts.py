import ExtractingNutrition
import findProductUrl

def getFoodFacts(product, attribute):
    url = findProductUrl.searchForProductURL(product)
    return ExtractingNutrition.getNutritionInfo(url, attribute)

print(getFoodFacts("Apple Pie", "Sugars"))
