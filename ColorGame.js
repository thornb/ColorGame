(function($) { //Encaspulates function to prevent namespace pollution


//<object> tag defines an embedded object within an HTML document.
var $color_game_widget = $("<object type=\"widget\"></object>").attr("id", "color_game")
var $title = $("<h1>Color Game</h1>").attr("id","title");
var $canvas = $("<canvas></canvas>").attr("id","canvas");

//The <input> tag specifies an input field where the user can enter data.
//The <label> tag defines a label for an <input> element.


var $red_slider = $("<input type= 'range' name= 'red_slide_value' min= '00' max= 'FF'><label for 'red_slide'> Red Slider</label></input>").attr("id", "red_slide");
var $blue_slider = $("<input type= 'range' name= 'blue_slide_value' min= '00' max= 'FF'><label for \"blue_slide\"> Blue Slider</label></input>").attr("id", "blue_slide");
var $green_slider = $("<input type= 'range' name= 'green_slide_value' min= '00' max= 'FF'><label for \"green_slide\"> Green Slider</label></input>").attr("id", "green_slide");


//<output> represents the result of a calculation
var $score_display = $("<output>Score: N/A</output>").attr("id", "score");


var $difficulty = $("<param><p>Difficulty:</p><select><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select></param>").attr("id", "difficulty");

var $rounds = $("<param><p># of Rounds:</p><input type='number' min='1' step = '1' value = '10'></input></param>").attr("id", "rounds");

var $submit_button = $("<button>Submit Answer</button>").attr("id", "submit");
var $new_game_button = $("<button>New Game</button>").attr("id", "new_game");


function draw_circles(){


	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(100,75,50,0,2*Math.PI);
	ctx.fillStyle = "#00A308";
	ctx.fill();



}



function new_game(){







}

function evaluate_game(){


}




$.fn.hexGame = function(args) { 

var $settings = $.extend({


        }, args );


$color_game_widget.append($color_game_widget, $title, $canvas, $red_slider, $blue_slider, $green_slider, $score_display, $difficulty, $rounds, $submit_button, $new_game_button);
this.append($color_game_widget);
draw_circles();
}

$("body").hexGame(); //initiates the plugin

}( jQuery ));