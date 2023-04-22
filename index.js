console.log("this is my portfilo website");

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

function btn(){
alert("Please Enter a Name")
  
}
$(document).ready(function(){
 
  $(".count").counterup({
    delay : 10,
    time : 1000
  })

})

// $(document).ready(function() {

//     var counters = $(".count");
//     var countersQuantity = counters.length;
//     var counter = [];
  
//     for (i =1; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML=2000);
//     }
  
//     var count = function(start, value, id) {
//       var localStart =start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//           counters[start].innerHTML = localStart;
//         }
//       },);
//     }
  
//     for (j = 1; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });

// ===========a0s===========
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:

  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});