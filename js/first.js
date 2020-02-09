
$("a").click(function(){
   let aHref = $(this).attr("href");
   $("body,html").animate({ scrollTop:$(aHref).offset().top-150},3000)
})
 // -------- left Side -------
$(".left .container_left .col-md-4 .open").click(function(){
   $(".left .container_left .col-md-4 .open").css({"left":"25px",})
   $(".left .container_left .col-md-8 #list").css({"display":"inline-block" ,"margin-top":"50px" , "transition":"display 3s"})
   $("#services").css({"margin-left":"50%"})
   $("#contacts").css({"margin-left":"50%"})
   $("#about").css({"margin-left":"50%"})
   $("#home").css({"margin-left":"50%"})
})

$(".left .container_left .col-md-8 #list i").click(function(){
   $(".left .container_left .col-md-8 #list").css({"display":"none" , "transition":"display 3s"})
   $(".left .container_left .col-md-4 .open").css({"left":"10px",})
   $("#services").css({"margin":"auto"})
   $("#contacts").css({"margin":"auto"})
   $("#about").css({"margin":"auto"})
   $("#home").css({"margin":"auto"})
})


$(".left .container_left .col-md-8 #list a").click(function(){
   $(this).next().slideToggle(1000);
   $(this).next().siblings(".left .container_left .col-md-8 #list .select").slideUp(1000);
})

// -------------- services --------------
$(".left .container_left .col-md-8 #list .select .service1").click(function(){
   $("#services .container #s1").css({"display":"inline-block"})
   $("#services .container #s2").css({"display":"none"})
   $("#services .container #s3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .service2").click(function(){
   $("#services .container #s1").css({"display":"none"})
   $("#services .container #s2").css({"display":"inline-block"})
   $("#services .container #s3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .service3").click(function(){
   $("#services .container #s1").css({"display":"none"})
   $("#services .container #s2").css({"display":"none"})
   $("#services .container #s3").css({"display":"inline-block"})
})

// -------------- contacts --------------
$(".left .container_left .col-md-8 #list .select .contact1").click(function(){
   $("#contacts .container #c1").css({"display":"inline-block"})
   $("#contacts .container #c2").css({"display":"none"})
   $("#contacts .container #c3").css({"display":"none"})
})
$(".left .container_left .col-md-8 #list .select .contact2").click(function(){
   $("#contacts .container #c1").css({"display":"none"})
   $("#contacts .container #c2").css({"display":"inline-block"})
   $("#contacts .container #c3").css({"display":"none"})
})
$(".left .container_left .col-md-8 #list .select .contact3").click(function(){
   $("#contacts .container #c1").css({"display":"none"})
   $("#contacts .container #c2").css({"display":"none"})
   $("#contacts .container #c3").css({"display":"inline-block"})
})
// -------------- about --------------
$(".left .container_left .col-md-8 #list .select .about1").click(function(){
  $("#about #b1").css({"display":"block"})
  $("#about #b2").css({"display":"none"})
  $("#about #b3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .about2").click(function(){
  $("#about #b1").css({"display":"none"})
  $("#about #b2").css({"display":"block"})
  $("#about #b3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .about3").click(function(){
  $("#about  #b1").css({"display":"none"})
  $("#about  #b2").css({"display":"none"})
  $("#about  #b3").css({"display":"block"})
})
// -------------- home --------------
$(".left .container_left .col-md-8 #list .select .home1").click(function(){
  $("#home #h1").css({"display":"block"})
  $("#home #h2").css({"display":"none"})
  $("#home #h3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .home2").click(function(){
  $("#home #h1").css({"display":"none"})
  $("#home #h2").css({"display":"block"})
  $("#home #h3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .home3").click(function(){
  $("#home  #h1").css({"display":"none"})
  $("#home  #h2").css({"display":"none"})
  $("#home  #h3").css({"display":"block"})
})

$(document).ready(function() {
   $("c1").validate({
     rules: {
       name : {
         required: true,
         minlength: 2
       },
       email: {
         required: true,
         email: true
       },
       phone :{
         matches:"[0-9]+",
         minlength:10,
          maxlength:10

       },
      }
     })
   });

$(document).ready(function() {
   $("c2").validate({
     rules: {
       name : {
         required: true,
         minlength: 2
       },
       email: {
         required: true,
         email: true
       },
       phone :{
         matches:"[0-9]+",
         minlength:10,
          maxlength:10

       },
      }
     })
   });
$(document).ready(function() {
   $("c3").validate({
     rules: {
       name : {
         required: true,
         minlength: 2
       },
       email: {
         required: true,
         email: true
       },
       phone :{
         matches:"[0-9]+",
         minlength:10,
          maxlength:10

       },
      }
     })
   });   


   


