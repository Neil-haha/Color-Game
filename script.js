var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor == pickedColor) {
			message.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	});
	}
}

function setupModeButtons() {
	for(var i = 0; i < modeBtn.length; i++) {
	modeBtn[i].addEventListener("click", function() {
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}	
		
	}
	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
		
// 	}
// 	h1.style.background = "#232323";
// })

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}

// 	h1.style.background = "#232323";
// })

resetButton.addEventListener("click", function() {
	reset();
})


function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}