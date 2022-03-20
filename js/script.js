$(document).ready(function(){
    $("table").hide();
    $(".add-btn").hide();
    $(".add-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".add-info h5").hide();
    $(".add-info p").hide();

    $('.btn.order').click(function() {
        var pizzaSize  = $(".size option:selected").val();
        var pizzaToppings = $(".toppings option:selected").val();
        var pizzaCrust= $(".crust option:selected").val();
        var total = parseInt(pizzaSize ) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        var order = 1;
        var grandTotal = 0;
    
        $("table").show();
        $(".add-btn").show();
        $(".btn.order").hide();
    
        $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
        $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
        $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
        $("#total").html(total);

        function Pizza(size, toppings, crust, total, orderNo) {
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.total = total;
            this.orderNo = orderNo;
          }
      
      
          $('.btn.add-pizza').click(function() {
            var pizzaSize = $(".size option:selected").val();
            var pizzaToppings = $(".toppings option:selected").val();
            var pizzaCrust = $(".crust option:selected").val();
            var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
            order = order + 1;
            grandTotal = grandTotal + total;
      
      
            var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);
      
            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
      
            $("#pizza_").append(newRow);
          });

          $(".btn.Checkout").click(function() {
            $(".btn.add-pizza").hide();
            $(".btn.Checkout").hide();
            $(".add-info").show();
            $(".btn.yes").show();
            $(".btn.no").show();
            $(".add-info .location").hide();
            grandTotal = grandTotal + total;
      
            $(".add-info h4 span").html(grandTotal);
          });
      
          $(".btn.yes").click(function() {
            $(".add-info h6").hide();
            $(".btn.yes").hide();
            $(".btn.no").hide();
            $(".add-info .location").show();
            $(".add-info h4 span").html(grandTotal + 200);
          });
      
          $(".btn.no").click(function() {
            $(".add-info p").show();
            $(".add-info h6").hide();
            $(".btn.yes").hide();
            $(".btn.no").hide();
            $(".add-info .location").hide();
          });
      
          $(".btn.complete").click(function() {
            var location = $(".add-info .location input").val();
            $(".add-info h5").show();
            $(".add-info .location").hide();
            $(".add-info h5 span").html(location);
        });
    });
});