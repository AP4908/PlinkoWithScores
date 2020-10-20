var Engine = Matter.Engine;
  World = Matter.World;
  Events = Matter.Events;
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions=[];
var score = 0;
var particle;
var p1;
var turn = 0;
var gamestate = "start";
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500", 20, 700);
 text("500", 105, 700);
 text("500", 190, 700);
 text("500", 270, 700);
 text("100", 355, 700);
 text("100", 430, 700);
 text("100", 505, 700);
 text("200", 590, 700);
 text("200", 675, 700);
 text("200", 760, 700);
  Engine.update(engine);
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (p1!=null){

    

    p1.display();
    if(turn===5) {
      gamestate = "end";
    }

    if(p1.body.position.y>760){

      if (p1.body.position.x<300){

        score = score+500;
        p1=null;
        
        
        
        
        
        
      }

      
      
    }

   }

   if (p1!=null){

    if(turn===5) {
      gamestate = "end";
    }

    p1.display();

    if(p1.body.position.y>760){

      if (p1.body.position.x<600&&p1.body.position.x>301){

        score = score+100;
        p1=null;
        
        
        
        
        
        
      }

      
      
    }

   }

   if (p1!=null){

    

    p1.display();
    if(turn===5) {
      gamestate = "end";
    }

    if(p1.body.position.y>760){

      if (601<p1.body.position.x<900){

        score = score+200;
        p1=null;
        
        
        
        
        
        
      }

      
      
    }

   }

   if (gamestate==="end"){

    textSize(30);
    text("GAME OVER!", 360, 400)
   }
    
}

function mousePressed(){
  if (gamestate==="start"){
    turn=turn+1;
    p1 = new Particle(mouseX, 10, 10, 10);
     

  }
}