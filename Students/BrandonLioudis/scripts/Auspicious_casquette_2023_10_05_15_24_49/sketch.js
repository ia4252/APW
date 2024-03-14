var xPos = 300;
var yPos = 130;
var xSpeed = (15, 10);
var ySpeed = (-10, -15);
var playerScore = 0
var playing=false;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  fill(0,255,0);
  background(0);

  fill(0,255,0);
   rect(mouseX, 560, 80, 40);
  rect(0, 0, 200, 100);
  fill(255,255,0);
    rect(200, 0, 200, 100);
  fill(255,0,0);
    rect(400, 0, 200, 100);
 
  if (playing){
  move();
  bounce();
  resetBall();
  paddle();
  extraPoints();
  }
  ball();
  textSize(50);
  textFont('Georgia');
  text("Score " + playerScore+"!", 20, 150);  
}

function move() {
  xPos += xSpeed;
  yPos += ySpeed;
}


function bounce() {

  if (yPos < 110) {
    ySpeed*= -1;
  }
  if (xPos > 590 ) {
    xSpeed *= -1;
  }
  if (xPos<10 ) {
    xSpeed *= -1;
  }
  extraPoints();
}


function resetBall() {
  if (yPos >= 580) {
    yPos = (130);
    xPos=random(100,500);
    ySpeed=0;
    xSpeed=0;
    playerScore=0;
    
  }
}
function ball() {
  fill(0,255,0);
  ellipse(xPos, yPos, 20, 20);
}
function touched() {
   if (yPos >= 490) {
    ySpeed*=-1;
    
  }
}
  
function paddle() {
  if ((xPos > mouseX &&
      xPos < mouseX +40) &&
    (yPos>= 550)) {
    playerScore++;
    ySpeed*=-1
    
      
    }
   else if ((xPos > mouseX &&
      xPos < mouseX +80) &&
    (yPos>= 550)) {
    playerScore++;
    ySpeed*=-1.1
    xSpeed*=-1.2
    
      
    }
  else if ((xPos > mouseX &&
      xPos < mouseX +80) &&
    (yPos>= 580)) {
    
    ballReset();
    
      
    }


}
function mousePressed(){
  playing=!playing;
  xSpeed = random(5, 10);
  ySpeed = random(-10, -5); 
}
function extraPoints(){
  
  
  if ((xPos>0) &&
    (xPos< 200)&&(yPos<=110)) {
    playerScore+=1.5;
    
      
    }
   if ((xPos>200) &&
    (xPos< 400)&&(yPos<=110)) {
    playerScore+=1;
    
  
}
  if ((xPos>400) &&
    (xPos< 600)&&(yPos<=110)) {
    playerScore+=.5;
  }
}