//function getYogurt(){
//    var yogurt = '';
//    for (i=0;i < document.getElementsByClassName('product-name').length;i++){
//	//getYogurtData(yogurt)
//        yogurt = yogurt + document.getElementsByClassName('product-name')[i].innerHTML + '\n';
//    }
//    return yogurt;
//}

//function getYogurt(){
//    var yogurt = document.getElementsByClassName('product-name')[0].innerHTML;
//    return getYogurtData(yogurt);
//}

//function getYogurtData(yogurt){
//    var calories = '';
//    window.location.href = 'http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts';
//  chrome.tabs.update(tab.id, {url: 'http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts'});
//    document.getElementById('search').value = document.getElementById('search').value + yogurt;
//    document.getElementsByName('commit')[0].click();
//    window.addEventListener('load', function() { 
//       document.getElementsByClassName('food_description')[0].firstElementChild.click();
//    }, false);
//    window.addEventListener('load', function() { 
//       calories = calories + document.getElementsByTagName("td")[1].innerHTML; 
//    }, false);   
//    window.close();
//    return calories;
//}

//function getGoogle(){
//      var googleurl = 'https://www.google.com/search?safe=off&q=Yoplait+Original+Mixed+Berry+Low+Fat+Yogurt+nutrition';
//    var googleurl = 'https://www.google.com/search?q=';
//    var food = document.getElementsByClassName('product-name')[0].innerHTML.split(' ');
//    for (i = 0;i<food.length;i++){
//	googleurl += food[i] + '+';
//    }
//    googleurl += 'nutrition';
//    var google = new XMLHttpRequest();
//    google.onreadystatechange = function() {
//        if (google.readyState == XMLHttpRequest.DONE) {
//            var str = google.responseText
//	    return str[7]
//        }
//    }
//    google.open('GET', 'https://cors-anywhere.herokuapp.com/' + googleurl, true);
//    google.setRequestHeader('origin', 'x-requested-with') 
//    google.send(document);
//}

function getNutritionix(){
    var nutritionixUrlFirst = 'https://api.nutritionix.com/v1_1/search/Yoplait%20original%20mixed%20berry%20low%20fat%20yogurt%20?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=3b53b4c6&appKey=4ee040d98d26b6424e6953531ead64c6' ;
 
    var str = 'nothing';
    var req = new XMLHttpRequest();
    req.open('GET', nutritionixUrlFirst, true);
    req.addEventListener('progress', function() {
	console.log(req.responseText);
        str += req.responseText;
	return str
    }, false)

    req.send(null);
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: getNutritionix()
});