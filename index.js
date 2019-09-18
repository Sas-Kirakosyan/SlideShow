let images = [ 'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg',
'images/image4.jpg', 'images/image5.jpg' ];
let image = document.querySelector('.img');
let srcVal = image.getAttribute('src');


// playImage slideshow
let i = images.indexOf(srcVal);

function playImage(){
  
  let timerId = setInterval(function() {
  if(i === images.length){
   i=0
      }
      
      image.setAttribute('src',  images[i]);
 
      let btnPause = document.querySelector('#pause')
      btnPause.onclick = function(){
      clearInterval(timerId); 
    }
    i++;
  }, 1000)
}

let btnPlay = document.querySelector('#play');
btnPlay.onclick = function(){
  playImage();
}



 
 //  handle click buttons  
  let btnPrevious =  document.querySelector('.left');
  let btnNext = document.querySelector('.right'); 

  btnNext.onclick = function(){
if(i< images.length-1){
  i++;
    }else{
     i=0;
}
image.setAttribute('src',  images[i]); 
}
 
btnPrevious.onclick = function(){
if(i === 0){
     i=5;
  }
    i--;
image.setAttribute('src',  images[i]);
}













      
       










// click to next button
// let btnNext = document.querySelector('.right');
// let i=1
// btnNext.onclick = function(){
// if(i >= 5){
//   i=0;
// }else {
//   image.setAttribute('src', 'images/' + images[i]);
//   i++;
//   console.log(image);
//   console.log('i'+ i)
//   }
// }


// // click to Previous button

//   let btnPrevious =  document.querySelector('.left');
//  let  j=4;
//    btnPrevious.onclick = function(){
    
   
//     // function nextImage(){

// if(j < 0){
//     i=5
//   }else{
//     image.setAttribute('src', 'images/' + images[j]);  
//     j--;
//     console.log(image)
//     console.log('j'+ j)
//   }

//   }


















