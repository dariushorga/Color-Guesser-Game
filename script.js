//* VARIABLES START ----------------------------------------------------

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//* VARIABLES END ----------------------------------------------------


//* FUNCTIONS START ----------------------------------------------------








function changeColors(color){
  //todo LOOP THROUGH ALL SQUARES
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  //TODO CHANGE THE COLOR TO MATCH GIVEN COLOR
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //todo make an array
  var arr = [];
  //todo repeat num times
  for(var i = 0; i < num; i++){
    //todo get random color and push into array
    arr.push(randomColor());
  }
  //todo return array
  return arr;
}

function randomColor(){
  //todo pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //todo pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //todo pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}


//* FUNCTIONS END ----------------------------------------------------


//* LOGIC START --------------------------------------------------------

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  //todo generate all new colors
  colors = generateRandomColors(numSquares);
  //todo pick new color from array
  pickedColor = pickColor();
  //todo change colorDisplay as picked color
  colorDisplay.textContent = pickedColor;
  //todo change colors of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  this.textContent = "New Colors"
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //! add initial colors
  squares[i].style.backgroundColor = colors[i];

  //! add event listeners to squares
  squares[i].addEventListener("click", function(){
    //TODO grab color of clicked square
    var clickedColor = this.style.backgroundColor;

    //TODO compare clicked to picked color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }

  });
}

//* LOGIC END --------------------------------------------------------