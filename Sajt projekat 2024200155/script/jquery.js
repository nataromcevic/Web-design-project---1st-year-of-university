$(document).ready(function(){ 
    $("#dugme").click(function(){
        $(".knjige2").slideToggle(800);
    });

    $("h3").on("click", function(){
        alert("Izabrali ste naslov knjige.");
    });

    $("h2").on("click", function(){
        $("#tajna").hide();
    });


});