debugger;


(function load() {
	var thumbElements = document.getElementsByClassName("thumb");

	for (var i = 0; i < thumbElements.length; i++) {
		var element = thumbElements[i];
		var id = "image-" + (i + 1);
		element.onclick = setUpImageClick(id);
	}
	
	var imageElements = document.getElementsByClassName("fullImage");
	
	for (var i = 0; i < imageElements.length; i++) {
		var element = imageElements[i];
		element.onclick = hideImage(element);
	}
	
})();

function setUpImageClick(imageId) {
	return function () {
	    document.getElementById("Big").style.visibility = "visible";
		var scaleImageWidth = $(window).width()*0.8;
		var scaleImageHeight = $(window).height()*0.8;

		var image = document.getElementById(imageId);
		var imageWidth = image.width;
		var imageHeight = image.height;

		var ratioWidth = imageWidth / scaleImageWidth;
		var ratioHeight = imageHeight / scaleImageHeight;

		image.style.display = "block";
		
		image.style.zIndex = 1;
		
		if (ratioHeight < 1 && ratioWidth <1) {
			image.style.width = imageWidth + "px";
			image.style.height = imageHeight + "px";
		}
		else if (ratioHeight > ratioWidth) {
			image.style.height = scaleImageHeight + "px";
		}
		else {
			image.style.width = scaleImageWidth + "px";
		}
	};
}

function hideImage(image) {
	return function () {
		image.style.display = "none";
		document.getElementById("Big").style.visibility = "hidden";
	};
}
	

function showImage(id){

var fullImage = document.getElementByClassName("fullImage");
fullImage.style = "";
}


// assign a click event to each images
// the click event sets the display of the larger image to static/block?

