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

	var colorStr = "#" + sol_red + sol_green + sol_blue;

	ctx.fillStyle = colorStr;
	ctx.fill();
	ctx.closePath()


}

var drawSliderCircle = function draw_slider_circle(){
	
	var red_hex = componentToHex(parseInt($red_slider[0].value));
	var green_hex = componentToHex(parseInt($green_slider[0].value));
	var blue_hex = componentToHex(parseInt($blue_slider[0].value));	

	var color_str = "#" + red_hex + green_hex +blue_hex;	
	console.log(color_str);

	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(200,75,50,0,2*Math.PI);

	ctx.fillStyle = color_str;
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
	

	round_count = 0;
	time = new Date().getTime();

	$new_game_button.text("New Game");
	$submit_button.css("visibility", "visible");

	$curr_high_score = 0;
	$high_score_display.text("High Score: N/A");
	$score_display.text("Score: N/A");
	$red_error_display.text("");
    $blue_error_display.text("");
    $green_error_display.text("");
	
	//redraw the circle
	drawCircles();

}

var evaluateGame = function evaluate_game(){
	var time_temp = new Date().getTime();
	
    var time_diff = time_temp - time;
	
	//calcuates time since last guess
	//time = time_temp;
	
	round_count++;

	if(round_count > $rounds[2].value){
		try_again();
	}


	//calculate difference percentages

    var red_percentage = Math.floor(((sol_red_int - $red_slider[0].value ) / 255) * 100);
    var green_percentage = Math.floor(((sol_green_int - $green_slider[0].value) / 255) * 100);
    var blue_percentage = Math.floor(((sol_blue_int - $blue_slider[0].value) / 255) * 100);
    
    $red_error_display.text("Percent Error: " + red_percentage + "%");
    $blue_error_display.text("Percent Error: " + blue_percentage + "%");
    $green_error_display.text("Percent Error: " + green_percentage + "%");
    
    /*
	console.log("math.abs(r%,b%,g%)", Math.abs(red_percentage + green_percentage + blue_percentage));
	console.log("math.abs(r%,b%,g%) is number",  Number.isInteger(parseInt(Math.abs(red_percentage + green_percentage + blue_percentage))));
	console.log("difficulty is number", Number.isInteger(parseInt(difficulty[2].value)));
	console.log("difficulty",difficulty[2].value);
	console.log("time_diff is a number", Number.isInteger(parseInt(time_diff)));
	*/
	console.log("time_diff", time_diff);

	//
	// ((15 – difficulty – percent_off) / (15 – difficulty)) * (15000 – milliseconds_taken)
	
	var score = ((15 - parseInt($difficulty[2].value) - ( (  Math.abs(red_percentage) + Math.abs(green_percentage) + Math.abs(blue_percentage) ) / parseFloat(300)) ) / (15 - parseInt($difficulty[2].value))) * parseFloat(15000 - parseInt(time_diff));
	
	if(score > $curr_high_score){
		$curr_high_score = score;
		$high_score_display.text("High Score: " + Math.round($curr_high_score * 100) / 100);
	}
	
	console.log("score", score);
	if (score < 0){score = 0};
	$score_display.text("Score: " + Math.round(score * 100) / 100);
	// var red_hex = componentToHex(parseInt($red_slider[0].value));
	// var green_hex = componentToHex(parseInt($green_slider[0].value));
	// var blue_hex = componentToHex(parseInt($blue_slider[0].value));	

	// var color_str = "#" + red_hex + green_hex +blue_hex;	
	// console.log(color_str);


	// var c=document.getElementById("canvas");
	// var ctx=c.getContext("2d");
	// ctx.beginPath();
	// ctx.arc(200,75,50,0,2*Math.PI);

	// ctx.fillStyle = color_str;
	// ctx.fill();
	// ctx.closePath()
	
	drawSliderCircle();


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
var $title = $("<h1>HEXED</h1>").attr("id","title");
var $canvas = $("<canvas></canvas>").attr("id","canvas");
var $container = $("<div>").attr("id", "container");
var $sliders = $("<div>").attr("id", "sliders");
var $info = $("<div>").attr("id", "info");
var $buttons = $("<div>").attr("id", "buttons");
var $instructions = $("<p id='instr'>Match the color swatch on the right to the color swatch on the left using the RGB sliders.</p>");

//The <input> tag specifies an input field where the user can enter data.
//The <label> tag defines a label for an <input> element.


var $red_slider = $("<input type= 'range' value='127' name= 'red_slide_value' min= '0' max= '255'><label for 'red_slide'></label></input>").attr("id", "red_slide");
var $blue_slider = $("<input type= 'range' value='127' name= 'blue_slide_value' min= '0' max= '255'><label for \"blue_slide\"></label></input>").attr("id", "blue_slide");
var $green_slider = $("<input type= 'range' value='127' name= 'green_slide_value' min= '0' max= '255'><label for \"green_slide\"></label></input>").attr("id", "green_slide");


$red_slider.on("input", function(){
	$red_hex_box.val(componentToHex(parseInt($red_slider[0].value)));
	//Uncomment to see realtime color of circle when sliding
	drawSliderCircle();
});
$green_slider.on("input", function(){
	$green_hex_box.val(componentToHex(parseInt($green_slider[0].value)));
	//Uncomment to see realtime color of circle when sliding
	drawSliderCircle();
});
$blue_slider.on("input", function(){
	$blue_hex_box.val(componentToHex(parseInt($blue_slider[0].value)));
	//Uncomment to see realtime color of circle when sliding
	drawSliderCircle();
});



//<<<<<<< HEAD
//var $red_hex_box = $("<input type ='text' value='7f'> <label>Guess Red Hex Value </label></input>").attr("id", "red_hex_box");

//Add functionality to add hex value text into textbox to update slider 
//=======
var $red_hex_box = $("<input type ='text' value='7f'> <label></label></input>").attr("id", "red_hex_box");
//>>>>>>> 6442397b7a84e504fc76eacfe4d328e92f480e57
$red_hex_box.on("input",function(){
	//regular expression to test if it's a proper hex value
	var isTwoCharHex = /^[a-fA-F0-9]{2,}$/.test($red_hex_box[0].value);

	if(isTwoCharHex){
		$red_slider[0].value = parseInt($red_hex_box[0].value, 16);
		drawSliderCircle();
	}

	else{
		//display an error message
	}
});

//Add percent error
var $red_error_display = $("<output></output>").attr("id", "error");

//var $blue_hex_box = $("<input type ='text' value='7f'><label> Guess Blue Hex Value</label> </input>").attr("id", "blue_hex_box");
var $blue_hex_box = $("<input type ='text' value='7f'><label></label> </input>").attr("id", "blue_hex_box");
//Add functionality to add hex value text into textbox to update slider 
$blue_hex_box.on("input",function(){
	//regular expression to test if it's a proper hex value
	var isTwoCharHex = /^[a-fA-F0-9]{2,}$/.test($blue_hex_box[0].value);

	if(isTwoCharHex){
		$blue_slider[0].value = parseInt($blue_hex_box[0].value, 16);
		drawSliderCircle();
	}

	else{
		//display an error message
	}
});

//Add percent error
var $blue_error_display = $("<output></output>").attr("id", "error");

//var $green_hex_box = $("<input type ='text' value='7f'><label>Guess Green Hex Value </label> </input>").attr("id", "green_hex_box");

var $green_hex_box = $("<input type ='text' value='7f'><label></label> </input>").attr("id", "green_hex_box");
//>>>>>>> 6442397b7a84e504fc76eacfe4d328e92f480e57

//Add functionality to add hex value text into textbox to update slider 
$green_hex_box.on("input",function(){
	//regular expression to test if it's a proper hex value
	var isTwoCharHex = /^[a-fA-F0-9]{2,}$/.test($green_hex_box[0].value);

	if(isTwoCharHex){
		$green_slider[0].value = parseInt($green_hex_box[0].value, 16);
		drawSliderCircle();
	}

	else{
		//display an error message
	}
});

//Add percent error
var $green_error_display = $("<output></output>").attr("id", "error");

//<output> represents the result of a calculation
var $score_display = $("<output>Score: N/A</output>").attr("id", "score");


var $difficulty = $("<param><p>Difficulty:</p><select><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select></param>").attr("id", "difficulty");

var $rounds = $("<param><p># of Rounds:</p><input type='number' min='1' step = '1' value = '10'></input></param>").attr("id", "rounds");

var $high_score_display = $("<output>High Score: N/A</output>").attr("id", "high_score");
var $curr_high_score = 0;

var $submit_button = $("<button>Check It!</button>").attr("id", "submit");
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


	$color_game_widget.append($color_game_widget, $container);
	$container.append($container, $title, $instructions, $canvas, $sliders);
	$sliders.append($red_slider, $red_hex_box, $red_error_display, $green_slider, $green_hex_box, $green_error_display, $blue_slider, $blue_hex_box, $blue_error_display)
	$container.append($info);
	$info.append($score_display, $high_score_display, $difficulty, $rounds);
	$container.append($buttons);
	$buttons.append($submit_button, $new_game_button);
	this.append($color_game_widget);
	drawCircles();
}

$("body").hexGame(); //initiates the plugin

}( jQuery ));