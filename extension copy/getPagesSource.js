function getYogurt(){
    var yogurt = '';
    for (i=0;i < document.getElementsByClassName('product-name').length;i++){
	//getYogurtData(yogurt)
        yogurt = yogurt + document.getElementsByClassName('product-name')[i].innerHTML + '\n';
    }
    return yogurt;
}

//function getYogurt(){
//    var yogurt = document.getElementsByClassName('product-name')[0].innerHTML;
//    var htmlObject;
//    var yourURL = 'http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts.html';
//    $.get(yourURL, function(html) {
//      htmlObject = html;
//    });
//    $('search_box').prop('http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts');
//    return $('#header').load('http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts')
//}

//function getYogurtData(yogurt){
//    window.open('http://www.myfitnesspal.com/food/calorie-chart-nutrition-facts');
//    document.getElementById('search').value = document.getElementById('search').value + yogurt;
//    document.getElementsByName('commit')[0].click();
//    document.getElementsByClassName('food_description')[0].firstElementChild.click();
//    var calories = document.getElementsByTagName("td")[1].innerHTML;
//    window.close();
//    return calories;
//}

chrome.runtime.sendMessage({
    action: "getSource",
    source: getYogurt()
});