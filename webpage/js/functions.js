//---prepare images---//
//---input all images to the bg_images array and store the in the img/course_space folder---//
var bg_images = ["code1.jpg","code2.jpg","code3.jpg"]

var images = []
var x = bg_images.length; //number of images
//---precaching images starts here---//
for (let i = 0; i < x; ++i) {
    images[i] = new Image()
    images[i].src = "img/course_space/" + bg_images[i];
}
// caches images, avoiding white flash between background replacements
//---function to change background image when it is called---//
function fadeImage(i) {
	if (i >= x) {i = 0};
    document.getElementById("course_space_img").style.background = "url(img/course_space/" + bg_images[i] + ") no-repeat center";
    document.getElementById("course_space_img").style.backgroundSize = "cover";
    document.getElementById("course_space_img").style.backgroundAttachment = "fixed";
    setTimeout(function () { fadeImage(i+1); }, 8000); // recalls function every 8 seconds
}
//---initially call function---//
fadeImage(0);
