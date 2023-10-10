function setup() {
    createCanvas(400, 400);
   background("rgb(140,140,246)");
  }
  
  function draw() {
  stroke("white")
    fill("rgb(252,184,224)");
    
    if (mouseIsPressed)
    rect(mouseX,mouseY,20,20);
  }
  