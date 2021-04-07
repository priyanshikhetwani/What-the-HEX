var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector(".h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	// Highlighting btn to show its selected
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	// Setting number of squares to 3
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	// Reset winning colors
	pickedColor = randomColorG();
	// color to show new picked color
	colorDisplay.textContent = pickedColor;
	// looping through each square to set new color 
	// none to the rest 3 squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function(){
	// Highlighting btn to show its selected
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	// Setting number of squares to 3
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	// Reset winning colors
	pickedColor = randomColorG();
	// color to show new picked color
	colorDisplay.textContent = pickedColor;
	// looping through each square to set new color 
	// none to the rest 3 squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		
	}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	// Reset winning colors
	pickedColor = randomColorG();
	// color to show new picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	// winning color highlight back to default
	h1.style.background = "#DC143C";
});

colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++){
	squares[i].style.background = colors[i];
	// Adding event listener to each square
	squares[i].addEventListener("click", function(){
		// grabbing color of clicked square.
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		console.log(clickedColor, pickedColor);
		if(clickedColor==pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColors(colorz){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colorz;
	}
}

function randomColorG(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(genColor){
	var arr = []
	for(var i = 0; i<genColor; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// red from 0-255
	var r = Math.floor(Math.random()*256);
	// green from 0-255
	var g = Math.floor(Math.random()*256);
	// blue from 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}