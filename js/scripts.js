function pizza(size, toppings, delivery, price) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
  this.price = 0;
}

var customerPizza;
var createPizza = function(size, toppings, delivery, price) {
  var newPizza = new Pizza(size, toppings, delivery, price);
    return newPizza;
}

Pizza.prototype.findPrice = function() {
  if (this.size === "small") {
  this.price += 9;
} else if (this.size === "medium") {
  this.price += 11;
} else if (this.size === "large") {
  this.price += 13;
}
