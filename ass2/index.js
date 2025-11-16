let cartItems = [];
let total = 0;

// Arrow function with rest parameters + forEach + GST
const calculateBill = (...prices) => {
    let sum = 0;

    prices.forEach(price => {
        sum += price; // total of all prices
    });

    // Apply 18% GST
    const gst = sum * 0.18;
    return sum + gst;
};

// Called when clicking Add button
function addToCart(price) {
    // Add item to cart array
    cartItems.push(price);

    // Add item in UI
    const list = document.getElementById("cart-items");
    const item = document.createElement("p");
    item.textContent = "Item added: $" + price;
    list.appendChild(item);

    // Recalculate total using array + rest parameter
    total = calculateBill(...cartItems);

    // Update UI
    document.getElementById("total").textContent = "Total (with 18% GST): $" + total.toFixed(2);
}