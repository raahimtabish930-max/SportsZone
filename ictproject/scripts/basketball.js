let total = 0;  

for (let i = 1; i <= 23; i++) {

    let button = document.getElementById("btn" + i);

    if (button) {
        button.addEventListener("click", function() {

            let name = document.getElementById("product" + i).textContent;  // Read product name

            let rawPrice = document.getElementById("price" + i).textContent;  // Read & clean price
            let price = parseInt(rawPrice.replace(/[^0-9]/g, ""));  // keeps only digits

            // Add item to cart list
            let li = document.createElement("li");
            li.textContent = name + " — Rs. " + price;
            document.getElementById("cart-list").appendChild(li);

            total = total + price;  
            document.getElementById("total").textContent = total;

        });
    }
}
