//=======================Variables=======================
var currentDay = moment().format("dddd, MMMM Do")
var currentHour = parseInt (moment().format("HH"), 10)

console.log (currentHour)


//=======================Functions=======================

//Displays current day/month
$("#currentDay").text(currentDay)


//Saves input form value to local storate

$(".saveBtn").on ("click", function(event) {
    var timeBlock = $(event.target).parent().siblings().eq(1).children(0).attr("id")
    var saveText = $(event.target).parent().siblings().eq(1).children(0).val()
    localStorage.setItem (timeBlock, saveText)
})

//=======================Event Listener=======================

