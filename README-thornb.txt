Brandon Thorne - thornb

1) What are the advantages to writing a jQuery plugin over regular JavaScript that uses jQuery?

The advantages to writing a jQuery plugin is that it is more portible and can easibly be taken and
inserted into other webpages and elements. 

It also abstracts away our code from thier webpage, and helps with containment and reducing the chance of 
scoping and namespace variable conflicts.

For our plug-in you simply have to include the javascript file, and edit the line that says:
$("body").hexGame(); and change "body" to whatever html element that they'd like to embed the game into.

Instructions of this will be provided in a readme when the project is deployed.

2) Explain how your jQuery plugin adheres to best practices in JavaScript and jQuery development.

Our jQuery plugin adheres to best practices because we properly use functions to organize code, and
to able to execute this code repedidly in different places. We also encapsulate all of our code into a
function to prevent namespace pollution. 
Additonally we added comments to the code to give a clue to what the code is doing for anyone looking at the source
code.

Finnly, since we made it a jQuery plug-in the code is portable and interoperable with other pages.


3) Does anything prevent you from POSTing high scores to a server on a different domain? If so, what? If not, how would we go about it (written explanation/pseudocode is fine here)?

Yes, there is a problem of violating the same origin policy becuase we are trying to post to a different server than the origin server using Javascript.
To solve this, if we have access to the server that is beings sent a POST, we will use the "Cross-Origin Resource Sharing Standard"
by seeting response headers on the server. The process is explaied here: http://stackoverflow.com/questions/298745/how-do-i-send-a-cross-domain-post-request-via-javascript

=============================================================================================

Thank you very much for grading Cory. You can reach me on facebook or at bthorne3@gamil.com if you need anything. Thank you 
