//calories
document.getElementsByTagName("td")[1].innerHTML

//fat
document.getElementsByTagName("td")[5].innerHTML

//carbs
document.getElementsByTagName("td")[11].innerHTML

//protein
document.getElementsByTagName("td")[23].innerHTML

//URL to search food in
//http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts

//enter food to searchbar
document.getElementById('search').value = document.getElementById('search').value + "yogurt"

//click search
document.getElementsByName('commit')[0].click()

//click first result
document.getElementsByClassName('food_description')[0].firstElementChild.click()