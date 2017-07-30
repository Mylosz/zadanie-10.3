$(function(){
  var carouselList = $("#carousel ul");
  function opel (){
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

  }
function  moveFirstSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({marginLeft:0});
}
setInterval(opel, 3000); //every 3 seconds, it performs a function to change the slide
});
