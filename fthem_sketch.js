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

  title = createP("Somebody that <br> I used to know");
  title.position(900, 150);
  title.style("color:black; font-size:30px; font-style: italic");

  write = createP("But you didn't have to cut me off <br>  Make out like it never happened <br> and that we were nothing <br>  And I don't even need your love <br>  But you treat me like a stranger <br> and that feels so rough <br>  No, you didn't have to stoop so low <br>  Have your friends collect your records <br>  And then change your number <br>  I guess that I don't need that though <br>  Now you're just somebody that I used to know <br>  Now you're just somebody that I used to know <br>  Now you're just somebody that I used to know");
  write.position(900, 270);
  write.style("color:black; font-size:15px; font-style: italic");

}

function draw() {

}

function happy_song(){

window.open('https://www.youtube.com/watch?v=8UVNT4wvIGY', '_self')

}