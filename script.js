// ================= CART =================

let cart = [];


function addToCart(name, price) {

    const existingItem =
        cart.find(item => item.name === name);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to your order!");
}


function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalItems += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    cartCount.textContent = totalItems;

    cartTotal.textContent =
        "Rs. " + totalPrice.toLocaleString();


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        return;
    }


    cartItems.innerHTML =
        cart.map((item, index) => {

            return `

                <div class="cart-item">

                    <div>

                        <strong>
                            ${item.name}
                        </strong>

                        <small>
                            Rs. ${item.price.toLocaleString()}
                            × ${item.quantity}
                        </small>

                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(${index})">

                        Remove

                    </button>

                </div>

            `;

        }).join("");
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("show");
}


function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("show");
}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "Thank you for choosing Craving Time! " +
        "Your order has been received."
    );


    cart = [];

    updateCart();

    closeCart();
}


// ================= MENU FILTER =================

function filterMenu(category, button) {

    const cards =
        document.querySelectorAll(".food-card");

    const buttons =
        document.querySelectorAll(".filter");


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    button.classList.add("active");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ================= BUFFET =================

function bookBuffet() {

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= RESERVATION =================

document
    .getElementById("reservationForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Your table reservation has been " +
                "submitted successfully!"
            );


            this.reset();

        }
    );


// ================= CLOSE CART =================

document
    .getElementById("cartOverlay")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeCart();

            }

        }
    );