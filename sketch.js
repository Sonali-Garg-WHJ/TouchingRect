var rect1,rect2;

function setup() {
createCanvas(800,400);
rect1 = createSprite(400, 200, 50, 80);
rect2 = createSprite(500,200,50,80);
rect2.shapeColor = "red";
rect1.shapeColor = "green";
}

function draw() {
background(255,255,255);  
rect2.x = World.mouseX;
rect2.y = World.mouseY;
/*if (rect2.x===rect1.x|| rect2.y===rect1.y){
rect2.shapeColor = "yellow";
rect1.shapeColor = "yellow";
} else if (rect2.x>rect1.x || rect2.y>rect1.y) {
rect2.shapeColor = "red";
rect1.shapeColor = "green";
}*/
console.log(rect1.x);
console.log(rect2.x);

//if (rect2.x-rect1.x < rect1.width/2||rect1.x-rect2.x < rect2.width/2||rect1.x===rect2.x|| rect1.y===rect2.y||rect1.y-rect2.y<rect1.height/2|| rect2.y-rect1.y<rect2.height/2){
  if (rect2.x-rect1.x < rect1.width/2&&rect1.x-rect2.x < rect2.width/2&&rect1.y-rect2.y<rect1.height/2&& rect2.y-rect1.y<rect2.height/2||rect1.x===rect2.x|| rect1.y===rect2.y){  
rect2.shapeColor = "yellow";
rect1.shapeColor = "yellow";
}
else {
  rect2.shapeColor = "red";
  rect1.shapeColor = "green";
}
drawSprites();
}

