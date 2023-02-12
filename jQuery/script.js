//Bad practice because css should be used for styling and js should be used for behaviour.
// $("h1").css("color","red");

//Changing style
// $("h1").addClass("heading margin-10");
// $("h1").removeClass("heading");



/*
//changing text
$("h1").text("Make your own decision");
$("button").text("hahah")

//changing innerHTML
$("button").html("<em>TouchMe</em");


//changing attribute
//set attribute
$("a").attr("href","https://www.yahoo.com"); 

//get attribute
// console.log($("h1").attr("class")); 


//Adding event listener using jQuery
$("h1").click(function(){
    $("h1").addClass("heading");
    setTimeout(function(){
        $("h1").removeClass("heading");
    },1000)
})


$(document).keypress(function(event){
    $("h1").text(event.key)
})

//more flexible

$("h1").on("mouseover", function(){
    $("h1").addClass("heading");
})


*/

//animation

// $("button").click(function(){
//     $("h1").slideToggle();
// })

$("button").click(function(){
    // $("h1").animate({margin:20});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})


