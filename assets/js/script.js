//=======================Variables=======================
var currentDay = moment().format("dddd, MMMM Do")
var currentHour = parseInt (moment().add(11, "h").format("HH", 10))
var inputFields = ["nineInput", "tenInput", "elevenInput", "twelveInput", "oneInput", "twoInput", "threeInput", "fourInput", "fiveInput"]

//=======================Functions=======================

//Displays current day/month
$("#currentDay").text(currentDay)

//Sets input fields to a stored value
 $(".form-control").each(function(index) {
    var text = localStorage.getItem(inputFields[index])
    $(this).val(text)
  });

//Takes in current hour and revises css styles accordingly 
$(".form-control").each(function(index) {
if (currentHour === index+9) {
    $(this).addClass("present")
} 
if (currentHour < index+9 ) {
    $(this).addClass("future")
}
if (currentHour > index+9 ) {
    $(this).addClass("past")
}
});

//Sets save button to new color, then returns it to normal

//=======================Event Listener=======================
//Saves input form value to local storage on click
$(".saveBtn").on ("click", function(event) {
    var timeBlock = $(event.target).parent().siblings().eq(1).children(0).attr("id")
    var saveText = $(event.target).parent().siblings().eq(1).children(0).val()
    localStorage.setItem (timeBlock, saveText)
       //Confirms green if stored correctly, throws an alert if not 
       if (localStorage.getItem(timeBlock) === saveText) {
        console.log ("all good")
        console.log ("this is the event.target element", $(event.target))
        $(event.target).css("background-color", "#02ff38")
        var colorTimeout = setTimeout(function() {
            $(event.target).attr("Style","background-color: #06AED5; transition: all 1s ease-in-out;")
            console.log ("All done")
            }, 500)
            } else {
        window.alert ("Your schedule was not saved correctly! Please try again.")
    }
})
