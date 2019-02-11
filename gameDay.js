// variables for functions
var gameLength = 0;
var gameLength2 = 0;
var gameEnd = 15;
var play1 = [];
var play2 = [];



// function for player 1 button
$(".playBut1").click(function() {
    if (gameLength === gameEnd) {
        alert("Player one is the winner")
    }


    $(".count1").text(gameLength++);
    play1.push("1");

    bothPlayers();
});


// function for player 2 button

$(".playBut2").click(function()
{
    console.log("test1");
    if (gameLength2 === gameEnd) {
        alert("Player two is the winner")
    }


    $(".count2").text(gameLength2++);
    play2.push("2");

    bothPlayers();


});

// function to display lead/tie


function bothPlayers()
{
    console.log("test5");
   if(play1.length > play2.length)
    {
        $("#leadEr").text("Player1");
    }
   else if(play1.length < play2.length)
   {
       $("#leadEr").text("Player2");

   }
   else
   {
       $("#leadEr").text("Tied");

   }
}





// functions for background change

$(".redB").on("click", function()
{
    $("body").addClass("redBack");
});

$(".blueB").on("click", function()
{
    $("body").addClass("blueBack");
});

$(".yellB").on("click", function()
{
    console.log("colortest");
    $("body").addClass("yellBack");
});