//function clickfunction(){

var subtitle;


  document.querySelectorAll("button")[0].addEventListener("click", function(){
         subtitle = document.querySelectorAll("button")[0].innerText ;
         document.querySelector("h2").innerText = "subtitle";

});

document.querySelectorAll("button")[1].addEventListener("click", function(){
       subtitle = document.querySelectorAll("button")[1].innerText ;

    document.querySelector("h2").innerText = subtitle;
});

document.querySelectorAll("button")[2].addEventListener("click", function(){
       subtitle = document.querySelectorAll("button")[2].innerText ;

    document.querySelector("h2").innerText = subtitle;
});

//  var subtitle = this.innerHTML;
//alert("hello " + subtitle);

//document.querySelector("h2#sub-title").innerText =
//}
