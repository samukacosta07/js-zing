function setup() {
    createCanvas(800, 800);
    background("black");
  }
  function draw() {
   
   
    stroke("blue"); 
    fill("red");
  
    
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) 
      
      rect(mouseX, mouseY, 20, 35);
  }
  