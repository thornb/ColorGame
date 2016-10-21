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
	ctx.closePath()


}



var newGame = function new_game(){

	//generate new colors
	sol_red_int = Math.floor((Math.random() * 255));
	sol_red = sol_red_int.toString(16);
	sol_green_int = Math.floor((Math.random() * 255));
	sol_green = sol_green_int.toString(16);
	sol_blue_int = Math.floor((Math.random() * 255));
	sol_blue = sol_blue_int.toString(16);

	sol_red = add_zero(sol_red);
	sol_green = add_zero(sol_green);	
	sol_blue = add_zero(sol_blue);
	
	console.log("sol_red", sol_red);
	console.log("sol_green", sol_green);
	console.log("sol_blue", sol_blue);

	round_count = 0;
	time = new Date().getTime();

	$new_game_button.text("New Game");
	$submit_button.css("visibility", "visible");

	
	//redraw the circle
	drawCircles();

}

var evaluateGame = function evaluate_game(){
	var time_temp = new Date().getTime();
	time = time_temp;
    var time_diff = time_temp - time;
	round_count++;

	//console.log(round_count);
	if(round_count > $rounds[2].value){
		try_again();
	}

	//console.log($red_slider.val());
	//console.log($green_slider.val());
	//console.log($blue_slider.val());


	//calculate difference percentages

    var red_percentage = Math.floor(((sol_red_int - $red_slider[0].value ) / 255) * 100);
    var green_percentage = Math.floor(((sol_green_int - $green_slider[0].value) / 255) * 100);
    var blue_percentage = Math.floor(((sol_blue_int - $blue_slider[0].value) / 255) * 100);
    /*
	console.log("math.abs(r%,b%,g%)", Math.abs(red_percentage + green_percentage + blue_percentage));
	console.log("math.abs(r%,b%,g%) is number",  Number.isInteger(parseInt(Math.abs(red_percentage + green_percentage + blue_percentage))));
	console.log("difficulty is number", Number.isInteger(parseInt(difficulty[2].value)));
	console.log("difficulty",difficulty[2].value);
	console.log("time_diff is a number", Number.isInteger(parseInt(time_diff)));
	console.log("time_diff", time_diff);

	//*/
	// ((15 – difficulty – percent_off) / (15 – difficulty)) * (15000 – milliseconds_taken)
	var score = ((15 - parseInt(difficulty[2].value) - (Math.abs(red_percentage + green_percentage + blue_percentage) / 300) ) / (15 - parseInt(difficulty[2].value))) * (15000 - parseInt(time_diff));
	console.log("score", score);
	if (score < 0){score = 0};
	$score_display.text("Score: " + Math.round(score * 100) / 100);
	var red_hex = componentToHex(parseInt($red_slider[0].value));
	var green_hex = componentToHex(parseInt($green_slider[0].value));
	var blue_hex = componentToHex(parseInt($blue_slider[0].value));	

	var color_str = "#" + red_hex, green_hex, blue_hex;	
	console.log(color_str);


	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(200,75,50,0,2*Math.PI);

	ctx.fillStyle = color_str;
	ctx.fill();
	ctx.closePath()
	


}


var try_again = function try_again(){
	$submit_button.css("visibility", "hidden");
	$new_game_button.text("Reached the round cap, try again!");


}

 function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

//<object> tag defines an embedded object within an HTML document.
var $color_game_widget = $("<object type=\"widget\"></object>").attr("id", "color_game")
var $title = $("<h1>Color Game</h1>").attr("id","title");
var $canvas = $("<canvas></canvas>").attr("id","canvas");

//The <input> tag specifies an input field where the user can enter data.
//The <label> tag defines a label for an <input> element.


var $red_slider = $("<input type= 'range' value='127' name= 'red_slide_value' min= '0' max= '255'><label for 'red_slide'> Red Slider</label></input>").attr("id", "red_slide");
var $blue_slider = $("<input type= 'range' value='127' name= 'blue_slide_value' min= '0' max= '255'><label for \"blue_slide\"> Blue Slider</label></input>").attr("id", "blue_slide");
var $green_slider = $("<input type= 'range' value='127' name= 'green_slide_value' min= '0' max= '255'><label for \"green_slide\"> Green Slider</label></input>").attr("id", "green_slide");


$red_slider.on("change", function(){
	$red_hex_box.val("#" + componentToHex(parseInt($red_slider[0].value)));

});
$green_slider.on("change", function(){
	$green_hex_box.val("#" + componentToHex(parseInt($green_slider[0].value)));

});
$blue_slider.on("change", function(){
	$blue_hex_box.val("#" + componentToHex(parseInt($blue_slider[0].value)));

});

var $red_hex_box = $("<input type ='text'> <label>Guess Red Hex Value </label></input>").attr("id", "red_hex_box");
var $blue_hex_box = $("<input type ='text'><label> Guess Blue Hex Value</label> </input>").attr("id", "blue_hex_box");
var $green_hex_box = $("<input type ='text'><label>Guess Green Hex Value </label> </input>").attr("id", "green_hex_box");

//<output> represents the result of a calculation
var $score_display = $("<output>Score: N/A</output>").attr("id", "score");


var $difficulty = $("<param><p>Difficulty:</p><select><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select></param>").attr("id", "difficulty");

var $rounds = $("<param><p># of Rounds:</p><input type='number' min='1' step = '1' value = '10'></input></param>").attr("id", "rounds");

var $submit_button = $("<button>CheckIt!</button>").attr("id", "submit");
$submit_button.click(evaluateGame);


var $new_game_button = $("<button>New Game</button>").attr("id", "new_game");
$new_game_button.click(newGame);

//Current color of the circle
var sol_red_int = Math.floor((Math.random() * 255));
var sol_green_int = Math.floor((Math.random() * 255));
var sol_blue_int = Math.floor((Math.random() * 255));


var sol_red = sol_red_int.toString(16);
var sol_green = sol_green_int.toString(16);
var sol_blue = sol_blue_int.toString(16);

sol_green = add_zero(sol_green);
sol_red = add_zero(sol_red);
sol_blue = add_zero(sol_blue);

var round_count = 0;
var time = new Date().getTime();



$.fn.hexGame = function(args) { 

	var $settings = $.extend({


	        }, args );


	$color_game_widget.append($red_hex_box, $green_hex_box, $blue_hex_box, $title, $canvas, $red_slider, $blue_slider, $green_slider, $score_display, $difficulty, $rounds, $submit_button, $new_game_button);
	this.append($color_game_widget);
	drawCircles();
}

$("body").hexGame(); //initiates the plugin

}( jQuery ));