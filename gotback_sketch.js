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

  title = createP("Hot 'n Cold");
  title.position(900, 150);
  title.style("color:black; font-size:30px; font-style: italic");

  write = createP("'Cause you're hot then you're cold <br> You're yes then you're no <br> You're in then you're out <br> You're up then you're down <br> You're wrong when it's right <br> It's black and it's white <br> We fight, we break up <br> We kiss, we make up <br> (You) You don't really want to stay, no <br> (You) But you don't really want to go <br> You're hot then you're cold <br> You're yes then you're no <br> You're in then you're out <br> You're up then you're down");
  write.position(900, 230);
  write.style("color:black; font-size:15px; font-style: italic");

}

function draw() {

}

function happy_song(){

window.open('https://www.youtube.com/watch?v=tsxwGnDfvWE', '_self')

}