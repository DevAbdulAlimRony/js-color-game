var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var mode = document.querySelectorAll(".mode");

init();

function init(){
	setUpSquares();
	reset();
	setUpModeButtons();
}

function setUpModeButtons()
{
	//Code decreasing for easy button and hard Button
	for(var i = 0;i<mode.length;i++)
	{
		
		mode[i].addEventListener("click", function(){
			
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			/*if(this.textContent==="Easy")
				numSquares = 3;
				else
			numSquares = 6;*/
			//Shorten Code
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // No space before colon. Unless else condition can't work
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];//write backgroundColor rather than background to access friendly all browser
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(pickedColor === clickedColor)
			{
				messageDisplay.textContent = "Correct!";
				colorChange(pickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play again?"; 
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Wrong!";
				}
		});
	}
}


//Easyutton, HardButton and resetButton same working function for decreasing the code
function reset(){
	colors = generateRandomColors(numSquares);
pickedColor = pickColor();
for(var i = 0;i<square.length;i++)
{
	//square[i].style.backgroundColor = colors[i];
	if(colors[i]){
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
	else{
		square[i].style.display = "none";
	}
}
colorDisplay.textContent = pickedColor;
h1.style.backgroundColor = "steelblue";
messageDisplay.textContent = "";
resetButton.textContent = "New Colors";

}



resetButton.addEventListener("click", function(){
	reset();
});



function pickColor(){
	var random = Math.floor(Math.random() * numSquares); //6 for 6 square and floor for creating decimal random number
	return colors[random];
}

function colorChange(color){
	for(var i = 0;i<square.length;i++)
	{
		square[i].style.backgroundColor = color;
	}
}
function generateRandomColors(num)
{
	//Make an array
	var arr = [];
	//Repeat num times
	for(var i =0;i<num;i++)
	{
		//Push random color into that array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//Red 0-255
	var r = Math.floor(Math.random() * 256);
	//Green 0-255
	var g = Math.floor(Math.random() * 256);
	//Blue 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");		
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<square.length;i++)
	{
	if(colors[i]){
	square[i].style.backgroundColor = colors[i];
	}
	else{
	square[i].style.display = "none";
	}
	}
	
	
	});
	
	hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<square.length;i++)
	{
	
	square[i].style.backgroundColor = colors[i];
	square[i].style.display = "block";
	
	
	}
	
});*/



