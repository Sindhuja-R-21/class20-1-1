
//object for box class
var myBox;

function setup() 
{
  createCanvas(400, 400);

  //Creating Object
  myBox=new Box(100,200);
  myBox2=new Box(200,50);
}

function draw() 
{
  background("pink");

  //Accessing show function of Box class
  myBox.show();
  myBox.setSpeed(1);

  myBox2.show();
  myBox2.setSpeed(2);

}

