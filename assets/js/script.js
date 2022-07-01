//=======================Variables=======================
var currentDay = moment().format("dddd, MMMM Do")
var currentHour = parseInt (moment().format("HH"), 10)
var inputFields = ["nineInput", "tenInput", "elevenInput", "twelveInput", "oneInput", "twoInput", "threeInput", "fourInput", "fiveInput"]

//=======================Functions=======================

//Displays current day/month
$("#currentDay").text(currentDay)

//Saves input form value to local storage
$(".saveBtn").on ("click", function(event) {
    var timeBlock = $(event.target).parent().siblings().eq(1).children(0).attr("id")
    var saveText = $(event.target).parent().siblings().eq(1).children(0).val()
    localStorage.setItem (timeBlock, saveText)
})

//Loads stored values into input field


//Sets input fields to a value



 $(".form-control").each(function(index) {
    var text =""
    text = localStorage.getItem(inputFields[index])
    $(this).val(text)
    console.log (text)
    console.log(this)
  });

//=======================Event Listener=======================

