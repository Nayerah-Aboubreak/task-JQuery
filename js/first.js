
// -------- section 1 -------
$("#home").css({ "width": "100%", "height": "660px", "background-size": "cover" })
$("#home").html(`<div class="layer d-flex" style = "background-color: rgba(214, 46, 51 , 0.6); width:100% ; height:100% " ></div>`)
$(".layer").html(`
<div id="title" class="text-center m-auto align-items-center" style ="color:#fff" >
<h2> Egyption Party </h2>
 <p> Let's have Fun </p> 
 </div>
 
<div id="list">
<i class="fas fa-times"></i>
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#duration">Duration</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#details">Details</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contacts">Contact</a>
  </li>
</ul>
</div>

<div class="open clearfix ">
<i class="fas fa-bars float-left pt-1"></i>
<p class ="float-left px-2">Open</p>
</div>
`)

$("h2").css("font-size", "60px")
$("#list").css({"background-color": "#414658" , "width":"250px" , "color":"#fff", "position":"fixed" ,"top":"200px", "padding":"50px 20px" ,"font-size":"30px"})
$(".open").click(function(){
   $(".open").css({"left":"270px",})
   $("#list").css({"display":"inline-block" , "transition":"display 3s"})
})

$("#list i").click(function(){
   $("#list").css({"display":"none" , "transition":"display 3s"})
   $(".open").css({"left":"10px",})
})

$("a").click(function(){
   let aHref = $(this).attr("href");
   $("body,html").animate({ scrollTop:$(aHref).offset().top},2000)
})
 // -------- section 2 -------

$("#details .singer").click(function(){
   $(this).next().slideToggle(1000);
   $(this).next().siblings("#details .data").slideUp(1000);
})

// -------- section 3 -------

$("#duration").addClass("my-5")

let countDownDate = new Date("december 20, 2019 00:00:00").getTime();
let x = setInterval( function(){
   let now = new Date().getTime();
   let distance = countDownDate - now;

   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
   $("#days").html( days + "D ")
   $("#hours").html(hours + "h ")
   $("#minutes").html( minutes + "m ")
   $("#seconds").html(seconds + "s ")

   if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
},1000)

// -------- section 4 -------

$(".form-control").blur(function(){
   $(this).val()
})

let maxLength = 100;
$("#num").html("100")
$("#textarea").keyup(function(){
   let length = $(this).val().length;
   let number = maxLength-length;
   $("#num").html(number);
   if (number <= 0){
      $("#num").html("your available character finished")
   }
})