function preload(){
}

function setup() {
  canvas = createCanvas(850, 450);
  canvas.position(340, 150);
  canvasColor = background("white");
  
  capture = createCapture(VIDEO);
  capture.size(500, 450);
  capture.position(370, 150);
  capture.style("background-color", "white");

  title = createP("Thank you, next");
  title.position(900, 150);
  title.style("color:black; font-size:30px; font-style: italic");

  write = createP("One taught me love <br>   One taught me patience <br>   And one taught me pain <br>   Now, I'm so amazing <br>   Say I've loved and I've lost <br>   But that's not what I see <br>  So, look what I got <br>  Look at what you taught me <br>  And for that, I say <br>  Thank you, next (next) <br>  Thank you, next (next) <br>  Thank you, next <br>  I'm so grateful for my ex");
  write.position(900, 220);
  write.style("color:black; font-size:15px; font-style: italic");

}

function draw() {

}

function happy_song(){

window.open('https://www.youtube.com/watch?v=gl1aHhXnN1k', '_self')

}