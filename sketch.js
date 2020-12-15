const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var helicopter, helicopterImg;
var package, packageImg;

function preload() {
    packageImg = loadImage("package.png");
    helicopterImg = loadImage("helicopter.png");
}

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    package = createSprite(width/2, 80, 10, 10);
    package.addImage(packageImg);
    package.scale = 0.3;

    helicopter = createSprite(width/2, 80, 10, 10);
    helicopter.addImage(helicopterImg);

    ground = createSprite(width/2, height-50, width, 20);
    ground.shapeColor = "green";

    dustbin1 = createSprite(width/2, height-70, 400, 20);
    dustbin1.shapeColor = "white";

    dustbin2 = createSprite(400, height-150, 20, 180);
    dustbin2.shapeColor = "white";

    dustbin3 = createSprite(800, height-150, 20, 180);
    dustbin3.shapeColor = "white";

    packageBody = Bodies.rectangle(width/2, 80, 10, 10, { resitution: 1, isStatic: true });
    World.add(world, packageBody);

    dustbin1Body = Bodies.rectangle(width/2, height-70, 400, 20, { isStatic: true });
    World.add(world, dustbin1Body);

    groundBody = Bodies.rectangle(width/2, height-50, width, 20, { isStatic: true });
    World.add(world, groundBody);
}

function draw() {
    background(0);
    Engine.update(engine);

    package.x = packageBody.position.x;
    package.y = packageBody.position.y;

    drawSprites();

}

function keyPressed() {
    if(keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody, false)
    }
}