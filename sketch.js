let gotback;
let fthem;
let thankyou;


function preload(){
}

function setup() {

  //write your name
  yourname = createInput();
  yourname.position((windowWidth / 2)-yourname.width/2, windowHeight/2);

  write = createP("Hey! What's your name?");
  write.position(windowWidth/3, windowHeight/4);
  write.style("color:white; font-size:60px; font-weight: bold;");

  //submit
  button = createButton('lets go');
  button.position(yourname.x + yourname.width +20, windowHeight/2);
  button.mousePressed(name);

}

function draw() {

}

function name(){

  //creating new paragraph
  howareyou = createP(yourname.value()+", how was your last breakup?");
  howareyou.position(windowWidth/4, windowHeight/4);
  howareyou.style("color:white; font-size:60px;");

  //hiding previous input and button
  yourname.hide();
  write.hide();
  button.hide();

  //emoticons
  gotback = createImg('./assets/gotback.png');
  gotback.position(windowWidth/2-200, windowHeight/2);
  gotback.mousePressed(go_gotback);

  fthem= createImg('./assets/fthem.png');
  fthem.position(windowWidth/2-60, windowHeight/2);
  fthem.mousePressed(go_fthem);

  thankyou = createImg('./assets/thankyou.png');
  thankyou.position(windowWidth/2+80, windowHeight/2);
  thankyou.mousePressed(go_thankyou);
}

function go_gotback(){

  window.open("gotback.html", "_self");

}

function go_fthem(){

  window.open("fthem.html", "_self");

}

function go_thankyou(){

  window.open("thankyou.html", "_self");

}
