const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, division1, division2, division3, division4, division5, division6, division7;

var particles=[];
var plinkos=[];
var divisions=[];




function setup() {
  
  var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,580,480,30);
    division1 = new Division(5, 420, 5, 300);
    division2 = new Division(85, 420, 5, 300);
    division3 = new Division(85+80, 420, 5, 300);
    division4 = new Division(85+80+80, 420, 5, 300);
    division5 = new Division(85+80+80+80, 420, 5, 300);
    division6 = new Division(85+80+80+80+80, 420, 5, 300);
    division7 = new Division(85+80+80+80+160, 420, 5, 300);
    for(var j=40;j<= width; j = j+50){
plinkos.push(new Pinko(j,75));
    }
    for(var j=15;j<= width-10; j = j+50){
      plinkos.push(new Pinko(j,175));
          }

    
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  for(var k =0; k<480; k++ ){
plinkos[k].display();
  }
  drawSprites();
}