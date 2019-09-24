//function clickfunction(){

var subtitle;
var subsection;



  document.querySelectorAll("button")[0].addEventListener("click", function(){
         subtitle = document.querySelectorAll("button")[0].innerHTML ;
         document.querySelector("h2").innerHTML = subtitle;
         document.getElementById("sub-section1").innerText = document.getElementById("career-objective").innerText;

});

document.querySelectorAll("button")[1].addEventListener("click", function(){
       subtitle = document.querySelectorAll("button")[1].innerHTML ;
    document.querySelector("h2").innerHTML = subtitle;
    document.getElementById("sub-section1").innerText = document.getElementById("profile-summary").innerText;
});

document.querySelectorAll("button")[2].addEventListener("click", function(){
       subtitle = document.querySelectorAll("button")[2].innerHTML ;
    document.querySelector("h2").innerHTML = subtitle;
    document.getElementById("sub-section1").innerHTML = document.getElementById("work-experience").innerHTML;
});
document.querySelectorAll("button")[3].addEventListener("click", function(){
       subtitle = document.querySelectorAll("button")[3].innerHTML ;

    document.querySelector("h2").innerHTML = subtitle;
});

document.querySelectorAll("button")[4].addEventListener("click", function(){
       subtitle = document.querySelectorAll("button")[4].innerHTML ;
    document.querySelector("h2").innerHTML = subtitle;
    document.getElementById("sub-section1").innerHTML = document.getElementById("training").innerHTML;
});




//  var subtitle = this.innerHTML;
//alert("hello " + subtitle);

//document.querySelector("h2#sub-title").innerText =
//}
