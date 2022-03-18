$(document).ready(function(){
    $("table").hide();
    $(".add-btn").hide();
    $(".add-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".add-info h5").hide();

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
        
}