var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i ;
    var slides = document.getElementsByClassName("mySlides"); //
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}
// auto slide
/*
 console.log(array.join('-'))  : chuyển các phần tử kiểu mãng sang string ( tostring )

*/


function write (log, log1){
    if(log) {
        console.log(log);
    }
    if(log1) {
        console.log(log1);
    }
     console.log(arguments) // in ra tất cả các đối tượng được truyền vào 
     // và không cần khai báo cố định vào nhiêu biến truyền vào hàm 
     // for of
     for(var index of arguments){
        console.log(index);
        //
     }

}

function read() {
    var myString = '';
    for( var index of arguments){
        myString += `${index} - `
        // noi cai doi tuong duoc truyen vao ham cach boi dau gach ngang
    }
    console.log(myString);
}


var Myconfirm = confirm('note')



