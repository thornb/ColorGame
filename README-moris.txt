Solomon Mori
Moris	
# ColorGame
Color Guessing game for Websys. Uses JQuery, and HTML5


Discovered that values from alot of the input fields arent numbers, took my a while to figure that out but a call to parseInt() gives us the numbers we need.

Also discovered that to draw multiple circles with different fill colors closePath() is needed.

Tried to have the sliders increment as a hexvalue which is not supported and made me sad.

Had some issues updating the input text box with the guess hexvalues, using .val() worked but .value and other properties did not work.

1. Jquery plugins have advantages in portability, abstraction, & encapsulation over Jquery; A plugin is self-contained so its easier to intergrate into projects, its encaspulation ensure there will be no issues with namespace pollution, and writing for general cases is easier.

2. Our Jquery plugin adheres to best practices by properly encapsulating the namespace to prevent pollution and by signifing with variable names which variables are Jquery objects or javascript variables $variable vs variable.

3. Nothing prevents us from POSTing the high scores. We just need to keep track of the highest score, updating whenever we have a higher one. The we just need to make an AJAX post to the scoring server with the requisite information in a json file, and then reset the local highest score with the actual highest score, and initialize the highest score with a a GET request from the score server.


References:
http://www.w3schools.com/jsref/jsref_tostring_number.asp
http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
http://stackoverflow.com/questions/28570138/how-to-change-the-color-of-a-canvas-using-javascript
http://stackoverflow.com/questions/23668459/issue-on-drawing-multiple-circles-on-html5-canvas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
http://stackoverflow.com/questions/5165579/onchange-event-for-html5-range