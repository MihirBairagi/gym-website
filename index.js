let sldImg = document.getElementById("sld-img");

let images = [];
let i = 1;

images[0] = "/img/g-1.jpg"
images[1] = "/img/g-2.jpg"
images[2] = "/img/g-3.jpg"
images[3] = "/img/g-4.jpg"


changeImg = () =>{
    sldImg.src = images[i]

    if (i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
}

setInterval(() => {
    changeImg()
}, 5000);

let mybutton = document.getElementById("myBtn");

      
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}