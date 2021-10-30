var canvas;
var music;
var blueSurface, orangeSurface, redSurface, greenSurface;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueSurface = createSprite(100,550,200,20);
    blueSurface.shapeColor ="blue" 
    orangeSurface = createSprite(300,550,200,20);
    orangeSurface.shapeColor = "orange"
    redSurface = createSprite(500,550,200,20);
    redSurface.shapeColor ="red"
    greenSurface = createSprite(700,550,200,20);
    greenSurface.shapeColor = "green"

    //create box sprite and give velocity
    box = createSprite(random(20,750),random(20,550),20,20)
    box.shapeColor ="white"
    box.velocityX = -3;
    box.velocityY = 2;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    music.play();

    //add condition to check if box touching surface and make it box
    if(blueSurface.isTouching(box) && box.bounceOff(blueSurface)){
        box.shapeColor = "blue";
        
    }
    if(orangeSurface.isTouching(box)){
        box.shapeColor="orange";
        music.stop();
        box.velocityX=0;
        box.velocityY=0
    }
    if(redSurface.isTouching(box) && box.bounceOff(redSurface)){
        box.shapeColoreColor="red";
    }
    if(greenSurface.isTouching(box) && box.bounceOff(greenSurface)){
        box.shapeeColor="green";
    }

    
    drawSprites();
}
