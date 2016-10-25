Cole Reschke - reschc
Homework 2 - Color Game

1) What are the advantages to writing a jQuery plugin over regular JavaScript that uses jQuery?
	Advantages of writing a jQuery plugin over regular JavaScript that uses jQuery include the portability of common functions within a jQuery 		plugin that would make such a plugin more easily applicable to other projects without expending additional time on development, a level of 		organization that is difficult to maintain outside of a widget due to the lack of necessity to use document.ready blocks, and encapsulation of the functions in order to prevent namespace pollution.
	
2) Explain how your jQuery plugin adheres to best practices in JavaScript and jQuery development.
	Our plugin adheres to best practices because it is contained in a separate file, it uses dynamic CSS rule creation in cases of object visibility, and variables are initialized when they are declared.
	
3) Does anything prevent you from POSTing high scores to a server on a different domain? If so, what? If not, how would we go about it (written explanation/pseudocode is fine here)?
	No, the HTML5 implementation of the javascript method "window.postmessage" was specifically implemented to allow this. 
	
	
Citations:
w3schools.com