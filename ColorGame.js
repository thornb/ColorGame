(function($) { //Encaspulates function to prevent namespace pollution


//<object> tag defines an embedded object within an HTML document.
var $color_game_widget = $("<object type=\"widget\"></object>").attr("id", "color_game")
var $title = $("<h1></h1>").attr("id","title").text("Color Game");
var $canvas = $("<canvas></canvas>").attr("id","canvas");

//The <input> tag specifies an input field where the user can enter data.
//The <label> tag defines a label for an <input> element.
var $red_slider = $("<input><label for \"red_slide\"> Red Slider</label></input>").attr("id", "red_slide");
var $blue_slider = $("<input><label for \"blue_slide\"> Blue Slider</label></input>").attr("id", "blue_slide");
var $green_slider = $("<input><label for \"green_slide\"> Green Slider</label></input>").attr("id", "green_slide");


//<output> represents the result of a calculation
var $score_display = $("<output></output>").attr("id", "score").text("Score: N/A");

//To do, dropdown using param
var $difficulty = $("<div><param></param></div>").attr("id", "difficulty").text("Difficulty: ");
var $rounds = $("<div><param></param></div>").attr("id", "rounds").text("# of Rounds: ");

var $submit_button = $("<button></button>").attr("id", "submit").text("Submit Answer");
var $new_game_button = $("<button></button>").attr("id", "new_game").text("New Game");



$.fn.hexGame = function(args) { 

var $settings = $.extend({


        }, args );


$color_game_widget.append($color_game_widget, $title, $canvas, $red_slider, $blue_slider, $green_slider, $score_display, $difficulty, $rounds, $submit_button, $new_game_button);
this.append($color_game_widget);
}

$("body").hexGame(); //initiates the plugin

}( jQuery ));