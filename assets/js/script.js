//=======================Variables=======================
var currentDay = moment().format("dddd, MMMM Do");
var currentHour = parseInt (moment().format("HH", 10));
var inputFields = ["nineInput", "tenInput", "elevenInput", "twelveInput", "oneInput", "twoInput", "threeInput", "fourInput", "fiveInput"];

//=======================Functions=======================
//Displays current day/month on top of page
function establishDaY () {
    $("#currentDay").text(currentDay);
}

//Sets input fields to a stored value
 $(".form-control").each(function(index) {
    var text = localStorage.getItem(inputFields[index]);
    $(this).val(text);
 });

//Takes in current hour and revises css styles accordingly 
function timeStyle () {
$(".form-control").each(function (index) {
if (currentHour === index+9) {
    $(this).addClass("present");
} 
if (currentHour < index+9 ) {
    $(this).addClass("future");
}
if (currentHour > index+9 ) {
    $(this).addClass("past");
}
})
};

//Checks time for updates to styling every 10 minutes 
function checker () {
    timeStyle();
    establishDaY();
    var checkerTimer = setTimeout (function () {
        checker ()
    }, 600000)
}

//=======================Event Listener=======================
//Saves input form value to local storage on click
$(".saveBtn").on ("click", function(event) {
    var timeBlock = $(event.target).parent().siblings().eq(1).children(0).attr("id");
    var saveText = $(event.target).parent().siblings().eq(1).children(0).val();
    localStorage.setItem (timeBlock, saveText);
       //Confirms green if stored correctly, throws an alert if not 
       if (localStorage.getItem(timeBlock) === saveText) {
        $(event.target).css("background-color", "#02ff38");
        var colorTimeout = setTimeout(function() {
            $(event.target).attr("Style","background-color: #06AED5; transition: all 1s ease-in-out;")
            }, 500);
            } else {
                window.alert ("Your schedule was not saved correctly! Please try again.");
    }
});

//=======================To Execute=======================
checker ()
