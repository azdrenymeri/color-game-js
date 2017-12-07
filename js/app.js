var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares  = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

  colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
  numberOfSquares = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i =0;i<squares.length;i++){
    if (colors[i]) {
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }

  }
});
hardBtn.addEventListener("click",function(){
  numberOfSquares = 6;
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i =0;i<squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";

  }
});

resetButton.addEventListener("click",function(){
  resetButton.textContent = "New Colors";
  //generate all colors
  colors = generateRandomColors(numberOfSquares);
  //pick a new random color
  pickedColor = pickColor();
  //change color display to match color pickedColor
  colorDisplay.textContent = pickedColor;

  //change colors of square
  for(var i = 0;i<squares.length;i++){
    squares[i].style.background = colors[i];
  }

  h1.style.background = "steelblue"

  messageDisplay.textContent = "";
})

for(var i =0 ; i<squares.length;i++){
  //add initial colors to the  squares
  squares[i].style.background = colors[i];

  // add the event listeners to all squares
  squares[i].addEventListener("click",function(){
      //grab color of clicked square and compare with pickedColor if they are the same

     var clickedColor = this.style.background;

     if (clickedColor === pickedColor) {
       messageDisplay.textContent = "Correct";
       changeColors(clickedColor);
       h1.style.background = clickedColor;
       resetButton.textContent = "Play Again !";
     }else{
       this.style.background = "#232323";
       messageDisplay.textContent = "Try Again";
     }
  })
}

function changeColors(color){
    //loop through all square and change the color to match them querySelectorAll
    for(var i =0 ; i<squares.length;i++){
      squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);

    return colors[random];
}
function generateRandomColors(colorNumber){
  //make an array
  var arr =[];
  //add num random colors to array
  for(var i = 0 ;i<colorNumber;i++){
    //get random color and push it to array
    arr.push(randomColor());
  }

//return the array
  return arr;
}

function randomColor(){
    //pick a red from 0 to 255 and a green and a blue
      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
