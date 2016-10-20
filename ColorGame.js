(function($) { //Encaspulates function to prevent namespace pollution

//Functions ====================================================================
function add_zero(input){
	
	if(input.length == 1){
		return "0" + input;
	}
	else{
		return input;
	}
	
}

var drawCircles = function draw_circles(){


	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(100,75,50,0,2*Math.PI);
	//ctx.fillStyle = "#00A308";

	console.log(sol_red);
	console.log(sol_green);
	console.log(sol_blue);

	var colorStr = "#" + sol_red + sol_green + sol_blue;
	console.log(colorStr);

	ctx.fillStyle = colorStr;
	ctx.fill();



}



var newGame = function new_game(){

	//generate new colors
	sol_red_int = Math.floor((Math.random() * 256));
	sol_red = sol_red_int.toString(16);
	sol_green_int = Math.floor((Math.random() * 256));
	sol_green = sol_green_int.toString(16);
	sol_blue_int = Math.floor((Math.random() * 256));
	sol_blue = sol_blue_int.toString(16);

	sol_red = add_zero(sol_red);
	sol_green = add_zero(sol_green);	
	sol_blue = add_zero(sol_blue);

	//redraw the circle
	drawCircles();

}

var evaluateGame = function evaluate_game(){

	console.log($red_slider.val());
	console.log($green_slider.val());
	console.log($blue_slider.val());

	//top difficulty win
	if($red_slider.val() == sol_red && $green_slider.val() == sol_green && $blue_slide.val() == sol_blue){

		console.log("You win!");

	}

}

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
$submit_button.click(evaluateGame);


var $new_game_button = $("<button>New Game</button>").attr("id", "new_game");
$new_game_button.click(newGame);

//Current color of the circle
var sol_red_int = Math.floor((Math.random() * 256));
var sol_red = sol_red_int.toString(16);
sol_red = add_zero(sol_red);


var sol_green_int = Math.floor((Math.random() * 256));
var sol_green = sol_green_int.toString(16);
sol_green = add_zero(sol_green);

var sol_blue_int = Math.floor((Math.random() * 256));
var sol_blue = sol_blue_int.toString(16);
sol_blue = add_zero(sol_blue);





$.fn.hexGame = function(args) { 

	var $settings = $.extend({


	        }, args );


	$color_game_widget.append($color_game_widget, $title, $canvas, $red_slider, $blue_slider, $green_slider, $score_display, $difficulty, $rounds, $submit_button, $new_game_button);
	this.append($color_game_widget);
	drawCircles();
}

$("body").hexGame(); //initiates the plugin

}( jQuery ));