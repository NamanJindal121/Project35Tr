
//Create variables here
var dog, happyDog, milk;
var database = firebase.database();
var foodS = 0, foodStock;
var feedPet, addFood;
var fedTime, lastFed;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  milk = loadImage("images/Milk.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
  dog = createSprite(displayWidth - 200, displayHeight - 500);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  foodObj = new Food();

  foodObj.getFoodStock();
  console.log(foodS);
}


function draw(){
  background(46, 139, 87);
  textSize(30);
  fill("yellow");
  text("Use Up Arrow to feed dog", displayWidth - 430,displayHeight - 700);

  if(keyDown(UP_ARROW)){
    foodObj.deductFood();
    foodObj.updateFoodStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  text("Food Stock: "+ foodS, 170, 470);
}

/*function readStock(data){
  foodS = data.val();
  foodSt = foodS.food;
}*/

/*function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x = x-1;
  }

  foodStock.set({
    food: x
  });
}
*/


