class Food{
    constructor(){
        this.foodStock = foodStock,
        this.image = milk
    }

    getFoodStock(){
        var stock = database.ref("/");
        stock.on("value", function(data){
            foodS = data.val();
        })
    }

    updateFoodStock(x){
        if(x<=0){
            x=0;
          }
        else{
            x = x-1;
          }

        database.ref("/").update({
            food: x
        });
        
    }

    deductFood(){
        foodS = foodS - 1;
    }

    display(){

    }
}