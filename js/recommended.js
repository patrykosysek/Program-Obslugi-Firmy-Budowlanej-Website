
$(document).ready(function() {
	$.ajax({
		url: "https://mirbud-restapi.herokuapp.com/api/item/recommended/"
	}).then(function(data){
		var i;
		for (i = 0; i < 6; i++){
			var searchedClassName = ".item" + i + " h4.item_name";
			$(searchedClassName).append(data[i].nazwa);
		}
		for (i = 0; i < 6; i++){
			var searchedClassName = ".item" + i + " h4.item_price";
			$(searchedClassName).append(data[i].cenaSprzedazy + "zł");
		}
		for (i = 0; i < 6; i++){
			var searchedClassName = ".item" + i + " img.item_photo";
			$(searchedClassName).attr("src", data[i].zdjecia);
		}
		for (i = 0; i < 6; i++){
			var searchedClassName = ".item" + i + " h4.item_rating";
			$(searchedClassName).append(data[i].ocena + "/5");
		}
	});
});