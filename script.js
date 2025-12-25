function placeOrder(productName) {
    alert("Order placed successfully for: " + productName);

    // Later this can be connected to:
    // Azure Queue Storage
    // Azure Function
    console.log("Order sent for processing:", productName);
}
