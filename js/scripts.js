function pizza(size, toppings, delivery, price) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
  this.price = 0;
}

pizza.prototype.findPrice = function() {
  if (this.size === "Small") {
  this.price += 9;
} else if (this.size === "Medium") {
  this.price += 11;
} else if (this.size === "Large") {
  this.price += 13;
}

for (var i = 0; i < this.toppings.length; i++) {
  this.price += .5;
}

if (this.delivery === "Delivery") {
  this.price += 2;
}

return this.price;
}

$(function() {
  $("form#createPizza").submit(function(event) {
    event.preventDefault();
    var chosenSize = $("#size").val();
    var chosenToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      chosenToppings.push($(this).val());
    });

    delivery = $("input:radio[name=delivery]:checked").val();
    customerPizza = new pizza(chosenSize, chosenToppings, delivery)
    var customerTotal = customerPizza.findPrice();
    $(".size").html(chosenSize);
    chosenToppings.forEach(function(toppings) {
      $(".toppings").append("<li>" + toppings + "</li>");
    });

    $(".delivery").html(delivery);
    $(".price").html("$" + customerPizza.price);
    if (delivery === "Delivery") {
      $("#userAddress").show();
    } else {
      $("#confirmPizza").show();
    }
    $("#createPizza").hide();
  });

  $("form#deliveryInfo").submit(function(event) {
    event.preventDefault();
    var address = $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipcode = $("input#zipcode").val();
    $(".address").text(address);
    $(".city").text(city);
    $(".state").text(state);
    $(".zipcode").text(zipcode);
    $("#confirmPizza").show();
    $("#userAddress").hide();
  });

  $("div#confirmPizza").click(function(event) {
    event.preventDefault();
    $("#confirmPizza").hide();

    if (delivery === "Delivery") {
      $("#confirmationDelivery").show();
    } else {
      $("#confirmationPickup").show();
    }
  });


});
