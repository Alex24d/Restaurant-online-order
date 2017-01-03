var menuApp = angular.module("menuApp", ['LocalStorageModule']);

menuApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('order')
    .setStorageType('localStorage')
    .setNotify(false, false);
});

menuApp.factory("OrderFactory", ["localStorageService", function(localStorageService){

  var containsObject = function(obj, arr){

    for(var i = 0; i < arr.length; i++){

      if(arr[i].name === obj.name){

        return true;
      }
    }

    return false;
  }

  return {
    getOrder: function(){
      var order = localStorageService.get("order");

      if(order === null){
        order = [];
      }

      return order;
    },

    addMeal: function(meal){
      var order = this.getOrder();
      if(!containsObject(meal, order)){
        // meal.qty = 1;
        order.push(meal);
        console.log(order);
        localStorageService.set("order", order);

      } else {
        console.log("Already there");
      }
    },

    removeMeal: function(meal) {

      var order = this.getOrder();
      for(var i=0; i<order.length; i++){

        if(meal.name === order[i].name){
          console.log(order);
          order.splice(i, 1);
          console.log(order);
        }
      }
      localStorageService.set("order", order);


    },

    setQty: function(meal, qty){
      var order = this.getOrder();

      for(var i=0; i<order.length; i++){

        if(meal.name === order[i].name){
          order[i].qty = qty;

          localStorageService.set("order", order);
          break;
        }
      }
    },

    getTotal: function(){
      var order = this.getOrder();
      var total = 0;
      for(var i=0; i<order.length; i++){
        total += order[i].qty * order[i].price;
      }

      return total;
    },

    clearOrder: function() {
      localStorageService.clearAll();
    }
  };
}]);


  menuApp.controller("menuCtrl", function($scope, OrderFactory){

  $scope.date = new Date();

  $scope.menu = [{name: "Coca-Cola", category: "Soft Drink", description: "Carbonated Soda Drink", price: 2.50, vegan: true, picture: "Coca-Cola.jpg", qty: 1},
    {name: "Coca-Cola Zero", category: "Soft Drink", description: "Carbonated Soda Drink. No Calories", price: 2.50, vegan: true, picture: "coke-zero.jpg", qty: 1},
    {name: "Dr. Pepper", category: "Soft Drink", description: "Carbonated Soda Drink.", price: 2.50, vegan: true, picture: "pepper.jpg", qty: 1},
    {name: "Fanta Orange", category: "Soft Drink", description: "Carbonated Orange Drink", price: 2.50, vegan: true, picture: "Fanta.jpg", qty: 1},
    {name: "Fanta Lemon", category: "Soft Drink", description: "Carbonated Lemon Drink", price: 2.50, vegan: true, picture: "fanta-lemon.jpg", qty: 1},
    {name: "Sprite", category: "Soft Drink", description: "Carbonated Lime-Lemon Drink", price: 3, vegan: true, picture: "sprite.jpg", qty: 1},
    {name: "Nestea", category: "Soft Drink", description: "Iced Tea Drink", price: 3, vegan: true, picture: "nestea.jpg", qty: 1},
    {name: "Soda", category: "Soft Drink", description: "Carbonated Water", price: 3, vegan: true, picture: "Tonic Water.jpg", qty: 1},
    {name: "Beer 0.5l", category: "Alcoholic Drink", description: "Guinness Draught 4.3% Alcohol", price: 4, vegan: true, picture: "guinness.jpg", qty: 1},
    {name: "Beer 1l", category: "Alcoholic Drink", description: "Guinness Draught 4.3% Alcohol", price: 6, vegan: true, picture: "guinness2.jpg", qty: 1},
    {name: "Whiskey", category: "Alcoholic Drink", description: "Jack Daniels 40% Alcohol", price: 8, vegan: true, picture: "Jack-Daniels-Drinks.jpg", qty: 1},
    {name: "Vodka", category: "Alcoholic Drink", description: "Finlandia 40% Alcohol", price: 6, vegan: true, picture: "vodka.jpg", qty: 1},
    {name: "Rum", category: "Alcoholic Drink", description: "Bacardi 36% Alcohol", price: 8, vegan: true, picture: "rum.jpg", qty: 1},
    {name: "Gin", category: "Alcoholic Drink", description: "Beefeater 40% Alcohol", price: 8, vegan: true, picture: "Beefeater.jpg", qty: 1},
    {name: "Red Wine", category: "Alcoholic Drink", description: "Tinto 15% Alcohol", price: 6.50, vegan: true, picture: "red-wine1.jpg", qty: 1},
    {name: "White Wine", category: "Alcoholic Drink", description: "Blanco 15% Alcohol", price: 7.50, vegan: true, picture: "sweetwhitewine2.jpg", qty: 1},
    {name: "Espresso", category: "Hot Drink", description: "Lavazza 0.2ml", price: 2.50, vegan: true, picture: "Espresso1.jpg", qty: 1},
    {name: "Flat White", category: "Hot Drink", description: "Lavazza 0.5ml", price: 2.50, vegan: true, picture: "Flat White.jpg", qty: 1},
    {name: "Capuccino", category: "Hot Drink", description: "Lavazza 0.5ml", price: 3, vegan: true, picture: "Capuccino.jpg", qty: 1},
    {name: "Cafe Latte", category: "Hot Drink", description: "Lavazza 0.25ml", price: 3, vegan: true, picture: "cafe-latte.jpg", qty: 1},
    {name: "Cafe Mocha", category: "Hot Drink", description: "Lavazza 0.5ml", price: 3, vegan: true, picture: "Cafe Mocha.jpg", qty: 1},
    {name: "White Tea", category: "Hot Drink", description: "Lipton 0.5ml", price: 2.50, vegan: true, picture: "white-tea.jpg", qty: 1},
    {name: "Red Tea", category: "Hot Drink", description: "Lipton 0.5ml", price: 2.50, vegan: true, picture: "red tea.jpg", qty: 1},
    {name: "Green Tea", category: "Hot Drink", description: "Lipton 0.5ml", price: 2.50, vegan: true, picture: "Best-Green-Tea.jpg", qty: 1},
    {name: "Mediterranean Salad", category: "Starter", description: "Greens, Tomatoes, Onions, Cucumber", price: 6.50, vegan: true, picture: "Mediterranean Salad.jpg", qty: 1},
    {name: "Greek Salad", category: "Starter", description: "Greens, Tomatoes, Onions, Feta Cheese", price: 6, vegan: true, picture: "Greek Salada.jpg", qty: 1},
    {name: "Caesar Salad", category: "Starter", description: "Greens, Garlic, Onions, Chicken Breast", price: 6, vegan: true, picture: "Ceasar-Salad.jpg", qty: 1},
    {name: "Tomato Soup", category: "Starter", description: "Onions, Tomatoes, Carrots", price: 5.50, vegan: true, picture: "Tomato Soup.jpg", qty: 1},
    {name: "Hungarian Soup", category: "Starter", description: "Onions, Tomatoes, Carrots, Garlic, Paprica", price: 5.50, vegan: true, picture: "hungarian-mushroom-soup.png", qty: 1},
    {name: "Mushroom Soup", category: "Starter", description: "Onions, Mashrooms, Garlic", price: 5.50, vegan: true, picture: "Mushroom-Soup_137.jpg", qty: 1},
    {name: "Red soup", category: "Starter", description: "Onions, Potatoes, Beets, Carrots", price: 6, vegan: true, picture: "borscht.jpg", qty: 1},
    {name: "French Fries", category: "Main Dish", description: "Deep fried potato strips", price: 5, vegan: true, picture: "french-fries.jpg", qty: 1},
    {name: "Dumplings", category: "Main Dish", description: "Dumplings filled with fried onions and chopped meat", price: 5, vegan: false, picture: "Pierogi Ruskie.jpg", qty: 1},
    {name: "Spaghetti Carbonara", category: "Main Dish", description: "Pasta with cream sauce and chopped meat", price: 6.50, vegan: false, picture: "spaghetti-carbonara.jpg", qty: 1},
    {name: "Lasagna Bolognesa", category: "Main Dish", description: "Pasta with tomato sauce and chopped meat", price: 6.50, vegan: false, picture: "lasagne bolognese.jpg", qty: 1},
    {name: "Filet of Beef", category: "Main Dish", description: "With french fries and salad", price: 9, vegan: false, picture: "Beef.jpg", qty: 1},
    {name: "Roasted Chicken", category: "Main Dish", description: "With french fries and salad", price: 10.50, vegan: false, picture: "Roasted chicken.jpg", qty: 1},
    {name: "Pork Spare Ribs", category: "Main Dish", description: "With BBQ sauce and French Fries", price: 10, vegan: false, picture: "Pork Spare Ribs.jpg", qty: 1},
    {name: "Frankfurt Sausages", category: "Main Dish", description: "With Ketchup Mustard and French Fries", price: 10, vegan: false, picture: "Sausages.jpg", qty: 1},
    {name: "Ice Cream", category: "Dessert", description: "Vanille, Chocolate, Strawberry, Stracciatella", price: 3, vegan: true, picture: "icecream.jpg", qty: 1},
    {name: "Apple Strudel", category: "Dessert", description: "Layered pastry with an apple filling", price: 3.50, vegan: true, picture: "strudel.jpg", qty: 1},
    {name: "Brownie", category: "Dessert", description: "Chocolate Cake", price: 4, vegan: true, picture: "brownie.jpg", qty: 1},
    {name: "Creme Brule", category: "Dessert", description: "Custard with a layer of caramel", price: 4, vegan: true, picture: "creme brulee.jpg", qty: 1}];


  $scope.order = OrderFactory.getOrder();

  $scope.addToOrder = function(meal) {
    OrderFactory.addMeal(meal);
    $scope.order = OrderFactory.getOrder();
  }

  $scope.removeFromOrder = function(item){
    OrderFactory.removeMeal(item);
    $scope.order = OrderFactory.getOrder();
  }

  $scope.clearOrder = function(){
    OrderFactory.clearOrder();
  }

  $scope.incQty = function(item){
    item.qty++;
    OrderFactory.setQty(item, item.qty);
  }

  $scope.decQty = function(item){
    if(item.qty>1){
      item.qty--;
      OrderFactory.setQty(item, item.qty);
    } else {
      console.log("Value too little");
    }

  }

  $scope.setValue = function(item, qty){
    if(isFinite(qty) && qty != null){
      OrderFactory.setQty(item, qty);
    }
    // $scope.order = OrderFactory.getOrder();
  }

  $scope.getTotal = function(){
    return OrderFactory.getTotal();
  }


});
