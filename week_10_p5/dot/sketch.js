function setup(){
  createCanvas(200,200);
}

function draw(){
  background(240);
  ellipse(50,50,50,50);
  noStroke();
  fill(0);
  
  if(mouseX<100&&mouseY<100){
    fill(12,30,40,50);
    rect(0,0,100,100);
    rect(100,100,200,200);
    fill(12,60,40);
    ellipse(100,100,50,50);
    ellipse(150,150,50,50);
  }else if(mouseX>100&&mouseY<100){
    fill(60,200,30,50);
    rect(100,0,100,100);
  }else if(mouseX<100&&mouseY>100){
    fill(70,100,200,50);
    rect(0,100,100,100);
  }else if(mouseX>100&&mouseY>100){
    fill(120,40,20,50);
    rect(100,100,100,100);
  }
}