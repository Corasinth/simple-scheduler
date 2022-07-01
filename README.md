# Simple Scheduler

## Description 

This website offers a way to keep track of hourly events during normal work hours (9-5). It displays the current day at the top of the page. 

Based on the current hour, each entry for note-taking changes colors, red for the current hour, green for the future, and grey for the past. 

Notes can be saved to local storage using the save button to the right of each field, and each field can be saved indpendantly. 

A live version of this scheduler can be found [here](https://corasinth.github.io/simple-scheduler/). 

## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Tests](#tests)

## Usage 

A brief demo of the sites basic functionality:

![A gif of a scheduling website being used to save notes](./assets/images/scheduler-demo.gif)

## Credits

The save icon came from [Font Awesome](https://fontawesome.com/icons/floppy-disk?s=solid).

Much of the positioning was made possible by [Bootstrap](https://getbootstrap.com/).

Finally, starter HTML and CSS code was provided by Jermoe Chenette.

## [License](./LICENSE)
This website uses the open-source MIT License.

## Features

THe website features live updates to the time. Every ten minutes, the current hour, as well as the date at the top of the page, are updated. 

In addition, should an error occur while saving your notes to the browser, an alert notifies you that your changes have not been saved. 

This is accomplished by immediately comparing the local save to the value of the input text. If they match, the save button flashes a quick green to provide the user instant feedback. Otherwise an alert is triggered to prevent the user from accidentally exiting out.

The relevant code for this feature:

```
if (localStorage.getItem(timeBlock) === saveText) {
        $(event.target).css("background-color", "#02ff38");
        var colorTimeout = setTimeout(function() {
            $(event.target).attr("Style","background-color: #06AED5; transition: all 1s ease-in-out;")
            }, 500);
            } else {
                window.alert ("Your schedule was not saved correctly! Please try again.");
    }
```

Note that not all cases of faulty saving will be detected. If the saved text from the input form is read incorrectly a false positive might be thrown. Still, this should cover errors created from outside this code at least. 

Lastly, additions to the number of time-blocks for note taking will require copypasting the relvant html, changing the notable class names and text, and adding a new item to the inputFields array in the appropriate position. If time blocks are added prior to 9am, the code 

```
if (currentHour === index+9)
```
should also be adjusted accordingly.