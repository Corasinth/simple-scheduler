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

//=======================Event Listener=======================
//Saves input form value to local storage on click
$(".saveBtn").on ("click", function(event) {
    var timeBlock = $(event.target).parent().siblings().eq(1).children(0).attr("id")
    var saveText = $(event.target).parent().siblings().eq(1).children(0).val()
    localStorage.setItem (timeBlock, saveText)
})
