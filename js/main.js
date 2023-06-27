var arr = document.querySelectorAll(".image");

var i = 1;
imageSlide(i);

setInterval(function () {
    i++;
    imageSlide(i);
}, 1000, i)

function imageSlide(e) {
    if (e > 3) {
        i = 1;
    }
    if (e < 1) {
        i = 3;
    }

    for (let a = 0; a < arr.length; a++) {
        arr[a].style.display = "none";
    }
    arr[i - 1].style.display = "block";


}