/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

function setup() {
  let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");
}
let speed = 0.6;
let zhijing = 220;

let sunx = 400;
let suny = 250;

let start;
let end;
let speedx = 1;
let speedy = 2;

let y1 = -10;
let timer=0

let color1=0
let color2=183
let color3=216
let color4=252
let color5=244
let color6=79
 let transp=100

function draw() {  
  background(255,211,214,50);
  
  color1=map(mouseX,100,700,0,255)
  color2=map(mouseX,100,700,183,145)
  color3=map(mouseX,100,700,216,66)
  color4=map(mouseX,100,700,252,77)
  color5=map(mouseX,100,700,244,230)
  color6=map(mouseX,100,700,79,128)
   for(let i=0;i<800;i+=40){
    noStroke()
    fill(color1,color2,color3,5)
    rect(0,0,i,1000)
    fill(color4,color5,color6,5)
    rect(800,0,-i,1000)
  }
  
  
  rectMode(CENTER);
  
  if(timer>=0){
    timer+=1
   // console.log(timer)
    
  }
  if(timer>229){
    timer=0
  }
  if(timer>100){
 push()
   console.log(transp)
   
    translate(400,250)
   rotate(frameCount*0.006)
    noFill()
    strokeWeight(23)
    stroke(248,248,255,250)
    rect(0,0,400,400)
    stroke(248,248,255,250)
    rotate(frameCount*0.02)
    rect(0,0,400,400)
    pop()
  }
  
  

  if (keyIsPressed == true) {
    //question here
    sunx = constrain(sunx, 300, 500);
    suny = constrain(suny, 150, 350);
    sunx = lerp(sunx, mouseX, 0.05);
    suny = lerp(suny, mouseY, 0.05);
  } else {
    sunx += speedx;
    suny += speedy;

    noStroke()
    strokeWeight(8);
    fill(209, 243, 177);
    if(mouseX>400){
      fill(179,153,212)
    }
    line(pmouseX,pmouseY,mouseX,mouseY)
    circle(pmouseX,pmouseY,50)
    circle(mouseX, mouseY, 50);

    if (sunx < 200 || sunx > 600) {
      speedx = -speedx;
    }
    if (suny < 150 || suny > 350) {
      speedy = -speedy;
    }
  }
  drawCreature(sunx, suny);
}

let angle = 0;
let angle1 = 0;
function drawCreature(x, y, a) {
  
  push();
  
  
  
  
  let d = dist(mouseX, mouseY, sunx, suny);
  

  
  
  
  
  push();
  translate(x, y);
  push()
  if (d < 130 && mouseIsPressed == true){
    drawhuan()
  }
  pop()
  push()
  drawwing(0, 0, d);
  drawbody(0, 0, d);

  if (d < 130 && mouseIsPressed == true) {
    start = PI;
    end = PI * 2;
  } else {
    start = 0;
    end = PI;
  }
  drawexpression(0, 0, start, end);

  draweye(0, 0, d);
  drawfeet(0, 0);
  drawtear(d);
  pop()
  pop();

  // YOUR CODE GOES HERE
  // introduce additional functions
  // for parts of your creature that
  // are repeated, and call them from
  // here
  rectMode(CENTER)
  if (d < 130 && mouseIsPressed == true){
  drawlongzi()
  }
  drawapple();
}

function drawtear(d) {
  if (d < 130 && mouseIsPressed == true) {
    y1 = y1 + 2;
    fill(35, 236, 250);
    circle(50, y1, 25);
    circle(-50, y1, 25);

    if (y1 > 400 - suny) {
      y1 = -10;
    }
  }
}

function drawwing(x, y, d) {
  noStroke();

  fill(255, 254, 208, 170);
  if (d < 130 && mouseIsPressed == true) {
    fill(random(90, 200), 10, 10);
  }

  let limbangle1 = sin(frameCount * 0.07) * 0.2;
  let limbangle2 = sin(frameCount * 0.07) * -0.2;
  let limangle3 = sin(frameCount * 0.06) * 0.2;

  push();
  rotate(limbangle1);
  ellipse(120, 10, 80, 60);
  pop();

  rotate(limangle3);

  push();
  rotate(limbangle2);
  ellipse(-120, 10, 80, 60);
  pop();
}

function drawbody(x, y, d) {
  //为什么variables只能设定在里面
  fill(255, 255, 255, 240);
  if (d < 130 && mouseIsPressed == true) {
    fill(random(230, 250), random(200, 250), random(200, 250));
    
  
    
  }
  
  stroke(0, 0, 0, 50);
  strokeWeight(3);
  circle(0, 0, zhijing);

  zhijing = zhijing + speed;

  if (zhijing > 250 || zhijing < 220) {
    speed = -speed;
  }

  if (mouseIsPressed == true) {
    zhijing += speed * 2;
  }
}

function drawexpression(x, y, s, e) {
  fill(216, 189, 171, 100);
  noStroke();
  ellipse(0, -10, 130, 50);

  noFill();
  stroke(0, 0, 0, 100);
  strokeWeight(3);
  circle(50, -10, 30);
  circle(-50, -10, 20);
  arc(0, 0, 20, 10, s, e);
  stroke(0, 100);
  fill(0, 100);
}
function draweye(x, y, d) {
  noStroke();
  let o1;
  let o2;
  let o3;
  let o4;
  mouseX = constrain(mouseX, 0, 800);
  o1 = map(mouseX, 0, 800, -53, -47);
  o2 = map(mouseX, 0, 800, 44, 56);
  mouseY = constrain(mouseY, 0, 500);
  o3 = map(mouseY, 0, 500, -14, -5);
  o4 = map(mouseY, 0, 500, -14, -5);

  fill(0, 170);

  if (d < 130 && mouseIsPressed == true) {
    fill(random(50, 150), 10, 10);
  }
  circle(o1, o3, 12);
  circle(o2, o4, 19);
}
function drawfeet(x, y) {
  angle += 0.03;
  angle1 -= 0.03;
  push();
  let sunx = 60;
  let suny = 90;
  translate(sunx, suny);
  rotate(angle);
  fill(216, 189, 171, 200);
  rect(0, 0, 40, 40);
  pop();
  push();
  let sunx1 = -60;
  translate(sunx1, suny);
  rotate(angle1);
  fill(216, 189, 171, 200);
  rect(0, 0, 40, 40);
  pop();
}

function drawrect() {
  push();
  stroke(247, 231, 205);
  strokeWeight(10);

  /*for (let x = 0; x < 500; x += 50) {
    noFill();

    rect(400, 250, x, x);
    
  }
  */

  pop()
}

function drawapple() {
  if (keyIsPressed == true) {
    push();
    noStroke();
    fill(255, 0, 0, 200);
    arc(mouseX - 5, mouseY, 30, 30, 0, PI * 2);
    arc(mouseX + 5, mouseY, 30, 30, 0, PI * 2);
    stroke(0);
    strokeWeight(1.5);
    arc(mouseX, mouseY - 10, 10, 10, PI / 4, (PI * 3) / 4);
    line(mouseX, mouseY - 5, mouseX, mouseY - 15);
    pop();
  }
 
  
 
}

function drawlongzi(){
    push()
 
    stroke(100)
    noFill()
    rect(400,250,430,400)
    line(200,50,200,450)
  line(300,50,300,450)
  line(400,50,400,450)
  line(500,50,500,450)
  
  line(600,50,600,450)
    pop()
  }
  
function drawhuan(){
  rectMode(CENTER)
  background(255)
  
  drawcube(0.03,0,0,300,255)
  stroke(0)
  drawcube2(0.02,0,0,300,0)
  
}

function drawcube(speed,sunx,suny,big,color){
  translate(sunx,suny)
  rotate(frameCount*speed)
  fill(color,0,0,200)
  rect(0,0,big,big)
}


function drawcube2(speed,sunx,suny,big,color){

  rotate(frameCount*0.06)
  noFill()
  strokeWeight(5)
 for(let i=10;i<big;i+=20){
   rectMode(CENTER)
   rect(0,0,i,i)
 }
}
 



