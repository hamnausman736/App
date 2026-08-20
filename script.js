





// FAQ DROPDOWN
//const faqQuestions = document.querySelectorAll(".faq-question");

//faqQuestions.forEach(function(question) {

    //question.addEventListener("click", function() {

        //const faqItem = question.parentElement;

       // faqItem.classList.toggle("active");

   // });

//});

// ===============================
// CHEEZY FOOD JAVASCRIPT
// ===============================


// ===============================
// 1. VARIABLES
// ===============================

let cart = [];

const cartButton = document.querySelector(".cart-btn");
const loginButton = document.querySelector(".login-btn");

const addButtons = document.querySelectorAll(".add-btn");

const categoryButtons = document.querySelectorAll(".category");

const searchInput = document.querySelector(".search-box input");

const orderButtons = document.querySelectorAll(
    ".order-btn, .offer-btn"
);


// ===============================
// 2. ADD FOOD TO CART
// ===============================

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const foodCard = button.closest(".food-card");

        const foodName = foodCard.querySelector("h3").textContent;

        const foodPrice = foodCard.querySelector("strong").textContent;


        const food = {
            name: foodName,
            price: foodPrice
        };


        cart.push(food);


        updateCart();


        // Button feedback

        const oldText = button.textContent;

        button.textContent = "✓ Added";

        button.disabled = true;


        setTimeout(function() {

            button.textContent = oldText;

            button.disabled = false;

        }, 1000);

    });

});


// ===============================
// 3. UPDATE CART
// ===============================

function updateCart() {

    const cartCount = document.querySelector(".cart-btn");

    if (!cartCount) {
        return;
    }


    // Existing count remove

    const oldCount = cartCount.querySelector(".cart-count");

    if (oldCount) {
        oldCount.remove();
    }


    // New count

    if (cart.length > 0) {

        const count = document.createElement("span");

        count.classList.add("cart-count");

        count.textContent = cart.length;

        cartCount.appendChild(count);

    }

}


// ===============================
// 4. CART CLICK
// ===============================

cartButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let message = "🛒 Your Cart\n\n";


    cart.forEach(function(item, index) {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - " +
            item.price +
            "\n";

    });


    message +=
        "\nTotal Items: " +
        cart.length;


    alert(message);

});


// ===============================
// 5. LOGIN BUTTON
// ===============================

loginButton.addEventListener("click", function() {

    const name = prompt("Enter your name:");

    if (name === null) {
        return;
    }


    if (name.trim() === "") {

        alert("Please enter your name.");

        return;
    }


    alert(
        "Welcome " +
        name +
        "! 👋"
    );

});


// ===============================
// 6. MENU CATEGORY
// ===============================

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        // Remove active from all

        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        // Add active to clicked button

        button.classList.add("active");


        const categoryName =
            button.textContent.trim();


        alert(
            categoryName +
            " category selected!"
        );

    });

});


// ===============================
// 7. SEARCH FOOD
// ===============================

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchValue =
            searchInput.value
            .toLowerCase()
            .trim();


        const foodCards =
            document.querySelectorAll(".food-card");


        foodCards.forEach(function(card) {

            const foodName =
                card.querySelector("h3")
                .textContent
                .toLowerCase();


            const foodDescription =
                card.querySelector("p")
                .textContent
                .toLowerCase();


            if (
                foodName.includes(searchValue) ||
                foodDescription.includes(searchValue)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ===============================
// 8. ORDER NOW BUTTON
// ===============================

orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const menuSection =
            document.querySelector("#menu");


        if (menuSection) {

            menuSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// 9. DELIVERY / PICKUP
// ===============================

const deliveryButton =
    document.querySelector(".delivery");

const pickupButton =
    document.querySelector(".pickup");


if (deliveryButton && pickupButton) {


    deliveryButton.addEventListener(
        "click",
        function() {

            deliveryButton.classList.add("active");

            pickupButton.classList.remove("active");


            alert(
                "Delivery selected 🚚"
            );

        }
    );


    pickupButton.addEventListener(
        "click",
        function() {

            pickupButton.classList.add("active");

            deliveryButton.classList.remove("active");


            alert(
                "Pick-up selected 🏪"
            );

        }
    );

}


// ===============================
// 10. NAVIGATION LINKS
// ===============================

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            link.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// ===============================
// 11. PAGE LOADED
// ===============================

console.log(
    "Cheezy Food website loaded successfully!"
);
// ================================
// CART
// ================================

let cart = [];

const addButtons = document.querySelectorAll(".add-btn");
const cartButton = document.querySelector(".cart-btn");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".food-card");

        const name = card.querySelector("h3").textContent;
        const price = card.querySelector("strong").textContent;

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        button.textContent = "✓ Added";

        setTimeout(function () {
            button.textContent = "+ Add";
        }, 1000);

    });

});


function updateCart() {

    let count = cartButton.querySelector(".cart-count");

    if (!count) {

        count = document.createElement("span");

        count.className = "cart-count";

        cartButton.appendChild(count);
    }

    count.textContent = cart.length;
}


// ================================
// CART BUTTON
// ================================

cartButton.addEventListener("click", function () {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    let message = "🛒 YOUR CART\n\n";

    cart.forEach(function (item, index) {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - " +
            item.price +
            "\n";

    });

    message +=
        "\nTotal Items: " +
        cart.length;

    alert(message);

});


// ================================
// LOGIN
// ================================

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function () {

    const name = prompt("Enter your name:");

    if (name === null) {
        return;
    }

    if (name.trim() === "") {

        alert("Please enter your name.");

        return;
    }

    alert("Welcome, " + name + "! 👋");

});


// ================================
// SEARCH
// ================================

const searchInput =
    document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value =
            searchInput.value.toLowerCase().trim();

        const cards =
            document.querySelectorAll(".food-card");

        cards.forEach(function (card) {

            const name =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();

            const description =
                card.querySelector("p")
                    .textContent
                    .toLowerCase();

            if (
                name.includes(value) ||
                description.includes(value)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ================================
// MENU CATEGORIES
// ================================

const categories =
    document.querySelectorAll(".category");

categories.forEach(function (category) {

    category.addEventListener("click", function () {

        categories.forEach(function (item) {

            item.classList.remove("active");

        });

        category.classList.add("active");

    });

});


// ================================
// DELIVERY / PICKUP
// ================================

const delivery =
    document.querySelector(".delivery");

const pickup =
    document.querySelector(".pickup");

if (delivery && pickup) {

    delivery.addEventListener("click", function () {

        delivery.classList.add("active");
        pickup.classList.remove("active");

    });


    pickup.addEventListener("click", function () {

        pickup.classList.add("active");
        delivery.classList.remove("active");

    });

}


// ================================
// ORDER NOW
// ================================

const orderButtons =
    document.querySelectorAll(".order-btn, .offer-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const menu =
            document.querySelector("#menu");

        if (menu) {

            menu.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// SMOOTH NAVIGATION
// ================================

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log("Cheezy Food website is working!");

// =====================================
// LOGIN SCREEN
// =====================================

const loginButton = document.querySelector(".login-btn");

const loginScreen =
    document.querySelector("#loginScreen");

const closeLogin =
    document.querySelector("#closeLogin");

const guestButton =
    document.querySelector("#guestBtn");

const phoneLoginButton =
    document.querySelector("#phoneLoginBtn");


// Open Login Screen

loginButton.addEventListener("click", function () {

    loginScreen.classList.add("show");

});


// Close Login Screen

closeLogin.addEventListener("click", function () {

    loginScreen.classList.remove("show");

});


// Guest Login

guestButton.addEventListener("click", function () {

    alert("Welcome! You are continuing as a guest.");

    loginScreen.classList.remove("show");

});


// Phone Login

phoneLoginButton.addEventListener("click", function () {

    const phone =
        prompt("Enter your phone number:");

    if (phone === null) {
        return;
    }

    if (phone.trim() === "") {

        alert("Please enter your phone number.");

        return;
    }

    alert(
        "OTP will be sent to " +
        phone
    );

});
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatBtn.addEventListener("click", function () {
    chatBox.style.display = "block";
});

closeChat.addEventListener("click", function () {
    chatBox.style.display = "none";
});