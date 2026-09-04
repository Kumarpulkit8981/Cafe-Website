/* =========================================================
   BREW & BLOOM - CAFE WEBSITE
   JavaScript
   60 MENU ITEMS - LOCAL IMAGES
========================================================= */


/* =========================================================
   MENU DATA - 60 ITEMS
========================================================= */

const menuItems = [

    /* ================= COFFEE ================= */

    {
        name: "Espresso",
        category: "coffee",
        price: 90,
        description: "A bold and rich shot of freshly brewed espresso.",
        image: "assets/menu/espresso.jpg"
    },

    {
        name: "Double Espresso",
        category: "coffee",
        price: 120,
        description: "Two rich espresso shots for a stronger coffee experience.",
        image: "assets/menu/double-espresso.jpg"
    },

    {
        name: "Americano",
        category: "coffee",
        price: 110,
        description: "Smooth espresso blended with hot water.",
        image: "assets/menu/americano.jpg"
    },

    {
        name: "Cappuccino",
        category: "coffee",
        price: 160,
        description: "Rich espresso topped with creamy steamed milk foam.",
        image: "assets/menu/cappuccino.jpg"
    },

    {
        name: "Cafe Latte",
        category: "coffee",
        price: 170,
        description: "Smooth espresso combined with silky steamed milk.",
        image: "assets/menu/cafe_latte.jpg"
    },

    {
        name: "Cafe Mocha",
        category: "coffee",
        price: 190,
        description: "Espresso, chocolate and steamed milk finished beautifully.",
        image: "assets/menu/cafe_mocha.jpg"
    },

    {
        name: "Caramel Latte",
        category: "coffee",
        price: 190,
        description: "Creamy latte infused with smooth caramel flavor.",
        image: "assets/menu/caramel_latte.jpg"
    },

    {
        name: "Vanilla Latte",
        category: "coffee",
        price: 190,
        description: "Classic latte with a delicate touch of vanilla.",
        image: "assets/menu/vanilla_latte.jpg"
    },

    {
        name: "Hazelnut Latte",
        category: "coffee",
        price: 210,
        description: "Velvety espresso and milk with roasted hazelnut notes.",
        image: "assets/menu/hazelnut_latte.jpg"
    },

    {
        name: "Filter Coffee",
        category: "coffee",
        price: 90,
        description: "Traditional Indian filter coffee with a rich aroma.",
        image: "assets/menu/filter_coffee.jpg"
    },

    {
        name: "Affogato",
        category: "coffee",
        price: 180,
        description: "Creamy vanilla ice cream served with hot espresso.",
        image: "assets/menu/affogato.jpg"
    },

    {
        name: "Hot Chocolate",
        category: "coffee",
        price: 180,
        description: "Rich and comforting chocolate drink topped with creamy foam.",
        image: "assets/menu/hot_chocolate.jpg"
    },


    /* ================= COLD COFFEE & SHAKES ================= */

    {
        name: "Classic Cold Coffee",
        category: "cold-coffee",
        price: 150,
        description: "Smooth chilled coffee blended with creamy milk.",
        image: "assets/menu/classic_cold_coffee.jpg"
    },

    {
        name: "Iced Americano",
        category: "cold-coffee",
        price: 130,
        description: "Refreshing espresso served over ice and chilled water.",
        image: "assets/menu/iced_americano.jpg"
    },

    {
        name: "Iced Latte",
        category: "cold-coffee",
        price: 160,
        description: "Chilled espresso and milk served over ice.",
        image: "assets/menu/iced_latte.jpg"
    },

    {
        name: "Chocolate Frappe",
        category: "cold-coffee",
        price: 190,
        description: "Chocolate, coffee and milk blended into a creamy frappe.",
        image: "assets/menu/chocolate_frappe.jpg"
    },

    {
        name: "Caramel Frappe",
        category: "cold-coffee",
        price: 200,
        description: "Creamy blended coffee with delicious caramel flavor.",
        image: "assets/menu/caramel_frappe.jpg"
    },

    {
        name: "Vanilla Frappe",
        category: "cold-coffee",
        price: 190,
        description: "Smooth vanilla blended coffee served ice cold.",
        image: "assets/menu/vanilla_frappe.jpg"
    },

    {
        name: "Oreo Shake",
        category: "cold-coffee",
        price: 180,
        description: "Creamy milkshake blended with crunchy Oreo cookies.",
        image: "assets/menu/oreo_shake.jpg"
    },

    {
        name: "Strawberry Shake",
        category: "cold-coffee",
        price: 170,
        description: "Fresh strawberry and creamy milk blended together.",
        image: "assets/menu/strawberry_shake.jpg"
    },

    {
        name: "Butterscotch Shake",
        category: "cold-coffee",
        price: 180,
        description: "Creamy shake with rich butterscotch flavor.",
        image: "assets/menu/butterscotch_shake.jpg"
    },

    {
        name: "Brownie Shake",
        category: "cold-coffee",
        price: 210,
        description: "Indulgent chocolate shake blended with brownie pieces.",
        image: "assets/menu/brownie_shake.jpg"
    },


    /* ================= BEVERAGES ================= */

    {
        name: "Classic Lemonade",
        category: "beverage",
        price: 100,
        description: "Fresh lemon juice with chilled water and a hint of sweetness.",
        image: "assets/menu/classic_lemonade.jpg"
    },

    {
        name: "Mint Lemonade",
        category: "beverage",
        price: 120,
        description: "Refreshing lemonade infused with fresh mint.",
        image: "assets/menu/mint_lemonade.jpg"
    },

    {
        name: "Virgin Mojito",
        category: "beverage",
        price: 140,
        description: "Lime, mint and refreshing fizz served over ice.",
        image: "assets/menu/virgin_mojito.jpg"
    },

    {
        name: "Green Apple Mojito",
        category: "beverage",
        price: 150,
        description: "Crisp green apple flavor with mint and refreshing fizz.",
        image: "assets/menu/green_apple_mojito.jpg"
    },

    {
        name: "Watermelon Cooler",
        category: "beverage",
        price: 150,
        description: "Fresh watermelon blended into a refreshing summer cooler.",
        image: "assets/menu/watermelon_cooler.jpg"
    },

    {
        name: "Blue Lagoon",
        category: "beverage",
        price: 150,
        description: "A colorful citrus cooler with a refreshing tropical taste.",
        image: "assets/menu/blue_lagoon.jpg"
    },

    {
        name: "Fresh Orange Juice",
        category: "beverage",
        price: 130,
        description: "Freshly squeezed orange juice served chilled.",
        image: "assets/menu/fresh_orange_juice.jpg"
    },

    {
        name: "Iced Lemon Tea",
        category: "beverage",
        price: 120,
        description: "Chilled black tea with lemon and a touch of sweetness.",
        image: "assets/menu/iced_lemon_tea.jpg"
    },


    /* ================= SANDWICHES & WRAPS ================= */

    {
        name: "Classic Veg Sandwich",
        category: "sandwich",
        price: 140,
        description: "Fresh vegetables, cheese and sauces between toasted bread.",
        image: "assets/menu/classic_veg_sandwich.jpg"
    },

    {
        name: "Bombay Grilled Sandwich",
        category: "sandwich",
        price: 170,
        description: "Classic Bombay-style grilled sandwich packed with vegetables.",
        image: "assets/menu/bombay_grilled_sandwich.jpg"
    },

    {
        name: "Cheese Corn Sandwich",
        category: "sandwich",
        price: 180,
        description: "Sweet corn and melted cheese in crispy toasted bread.",
        image: "assets/menu/cheese_corn_sandwich.jpg"
    },

    {
        name: "Paneer Tikka Sandwich",
        category: "sandwich",
        price: 210,
        description: "Smoky paneer tikka with fresh vegetables and creamy sauce.",
        image: "assets/menu/paneer_tikka_sandwich.jpg"
    },

    {
        name: "Club Sandwich",
        category: "sandwich",
        price: 230,
        description: "Triple-layer sandwich loaded with vegetables, cheese and sauces.",
        image: "assets/menu/club_sandwich.jpg"
    },

    {
        name: "Grilled Cheese Sandwich",
        category: "sandwich",
        price: 190,
        description: "Golden grilled bread filled with melted cheese.",
        image: "assets/menu/grilled_cheese_sandwich.jpg"
    },

    {
        name: "Veggie Panini",
        category: "sandwich",
        price: 210,
        description: "Grilled panini packed with fresh vegetables and cheese.",
        image: "assets/menu/veggie_panini.jpg"
    },

    {
        name: "Paneer Wrap",
        category: "sandwich",
        price: 200,
        description: "Soft wrap filled with spiced paneer and fresh vegetables.",
        image: "assets/menu/paneer_wrap.jpg"
    },

    {
        name: "Mexican Veg Wrap",
        category: "sandwich",
        price: 190,
        description: "Mexican-inspired wrap with vegetables, beans and spicy sauce.",
        image: "assets/menu/mexican_veg_wrap.jpg"
    },

    {
        name: "Peri Peri Paneer Wrap",
        category: "sandwich",
        price: 220,
        description: "Spicy peri peri paneer wrapped with fresh crunchy vegetables.",
        image: "assets/menu/peri_peri_paneer_wrap.jpg"
    },


    /* ================= SNACKS ================= */

    {
        name: "Classic French Fries",
        category: "snacks",
        price: 120,
        description: "Crispy golden fries seasoned with our house spices.",
        image: "assets/menu/classic_french_fries.jpg"
    },

    {
        name: "Peri Peri Fries",
        category: "snacks",
        price: 150,
        description: "Crispy fries tossed with bold peri peri seasoning.",
        image: "assets/menu/peri_peri_fries.jpg"
    },

    {
        name: "Cheesy Loaded Fries",
        category: "snacks",
        price: 190,
        description: "Crispy fries topped with creamy cheese and herbs.",
        image: "assets/menu/cheesy_loaded_fries.jpg"
    },

    {
        name: "Veg Spring Rolls",
        category: "snacks",
        price: 160,
        description: "Crispy rolls filled with seasoned fresh vegetables.",
        image: "assets/menu/veg_spring_rolls.jpg"
    },

    {
        name: "Cheese Corn Balls",
        category: "snacks",
        price: 180,
        description: "Crispy golden bites filled with sweet corn and cheese.",
        image: "assets/menu/cheese_corn_balls.jpg"
    },

    {
        name: "Loaded Nachos",
        category: "snacks",
        price: 210,
        description: "Crispy nachos topped with cheese, vegetables and sauces.",
        image: "assets/menu/loaded_nachos.jpg"
    },

    {
        name: "Masala Maggi",
        category: "snacks",
        price: 120,
        description: "Classic noodles cooked with aromatic Indian spices.",
        image: "assets/menu/masala_maggi.jpg"
    },

    {
        name: "Cheese Maggi",
        category: "snacks",
        price: 150,
        description: "Comforting Maggi noodles topped with melted cheese.",
        image: "assets/menu/cheese_maggi.jpg"
    },


    /* ================= PIZZA & PASTA ================= */

    {
        name: "Margherita Pizza",
        category: "pizza-pasta",
        price: 250,
        description: "Classic pizza with tomato sauce, mozzarella and herbs.",
        image: "assets/menu/margherita_pizza.jpg"
    },

    {
        name: "Farmhouse Pizza",
        category: "pizza-pasta",
        price: 320,
        description: "Fresh vegetables, mushrooms, capsicum and melted cheese.",
        image: "assets/menu/farmhouse_pizza.jpg"
    },

    {
        name: "Paneer Tikka Pizza",
        category: "pizza-pasta",
        price: 350,
        description: "Tandoori paneer, onions, capsicum and cheese on a crispy crust.",
        image: "assets/menu/paneer_tikka_pizza.jpg"
    },

    {
        name: "Veg Alfredo Pasta",
        category: "pizza-pasta",
        price: 280,
        description: "Creamy white sauce pasta with fresh vegetables.",
        image: "assets/menu/veg_alfredo_pasta.jpg"
    },

    {
        name: "Arrabbiata Pasta",
        category: "pizza-pasta",
        price: 270,
        description: "Penne pasta tossed in a spicy tomato and herb sauce.",
        image: "assets/menu/arrabbiata_pasta.jpg"
    },

    {
        name: "Pesto Pasta",
        category: "pizza-pasta",
        price: 320,
        description: "Pasta tossed in aromatic basil pesto and parmesan.",
        image: "assets/menu/pesto_pasta.jpg"
    },


    /* ================= DESSERTS ================= */

    {
        name: "Chocolate Brownie",
        category: "dessert",
        price: 150,
        description: "Rich and fudgy chocolate brownie served warm.",
        image: "assets/menu/chocolate_brownie.jpg"
    },

    {
        name: "Brownie With Ice Cream",
        category: "dessert",
        price: 220,
        description: "Warm chocolate brownie served with creamy vanilla ice cream.",
        image: "assets/menu/brownie_with_ice_cream.jpg"
    },

    {
        name: "Chocolate Fudge Cake",
        category: "dessert",
        price: 190,
        description: "Moist chocolate cake layered with rich fudge frosting.",
        image: "assets/menu/chocolate_fudge_cake.jpg"
    },

    {
        name: "Blueberry Cheesecake",
        category: "dessert",
        price: 230,
        description: "Creamy cheesecake topped with sweet blueberry compote.",
        image: "assets/menu/blueberry_cheesecake.jpg"
    },

    {
        name: "Tiramisu",
        category: "dessert",
        price: 240,
        description: "Classic Italian dessert with coffee-soaked layers and cream.",
        image: "assets/menu/tiramisu.jpg"
    },

    {
        name: "Chocolate Sundae",
        category: "dessert",
        price: 200,
        description: "Vanilla ice cream topped with chocolate sauce and nuts.",
        image: "assets/menu/chocolate_sundae.jpg"
    }

];


/* =========================================================
   CHECK MENU COUNT
========================================================= */

console.log(
    `Brew & Bloom menu loaded: ${menuItems.length} items`
);


/* =========================================================
   IMAGE ERROR HANDLER
========================================================= */

function handleImageError(image) {

    console.error(
        "Image could not be loaded:",
        image.src
    );

    image.classList.add("image-error");

    image.alt = "Image unavailable";

}


/* =========================================================
   MENU DISPLAY
========================================================= */

const menuGrid =
    document.getElementById("menuGrid");

const menuCount =
    document.getElementById("menuCount");


function displayMenu(category = "all") {

    if (!menuGrid) return;


    const filteredItems =
        category === "all"
            ? menuItems
            : menuItems.filter(
                item => item.category === category
            );


    menuGrid.innerHTML = "";


    filteredItems.forEach((item, index) => {

        const card =
            document.createElement("article");


        card.className =
            "menu-card";


        card.innerHTML = `

            <div class="menu-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                    onerror="handleImageError(this)"
                >

                ${
                    index === 0 && category === "all"
                        ? `<span class="popular-badge">Popular</span>`
                        : ""
                }

            </div>


            <div class="menu-info">

                <div class="menu-title">

                    <h3>${item.name}</h3>

                    <span>₹${item.price}</span>

                </div>

                <p>
                    ${item.description}
                </p>

            </div>

        `;


        menuGrid.appendChild(card);

    });


    if (menuCount) {

        menuCount.textContent =
            filteredItems.length;

    }

}


/* =========================================================
   SHOW ALL MENU ITEMS INITIALLY
========================================================= */

displayMenu();


/* =========================================================
   MENU FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        displayMenu(filter);

    });

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");


        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (
                navLinks.classList.contains("show")
            ) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

}


/* =========================================================
   RESERVATION FORM VALIDATION
========================================================= */

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");


if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameElement =
                document.getElementById("name");

            const phoneElement =
                document.getElementById("phone");

            const dateElement =
                document.getElementById("date");

            const timeElement =
                document.getElementById("time");

            const guestsElement =
                document.getElementById("guests");


            const name =
                nameElement
                    ? nameElement.value.trim()
                    : "";


            const phone =
                phoneElement
                    ? phoneElement.value.trim()
                    : "";


            const date =
                dateElement
                    ? dateElement.value
                    : "";


            const time =
                timeElement
                    ? timeElement.value
                    : "";


            const guests =
                guestsElement
                    ? guestsElement.value
                    : "";


            if (
                !name ||
                !phone ||
                !date ||
                !time ||
                !guests
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in all required fields.";

                    formMessage.className =
                        "form-message error";

                }

                return;

            }


            const phonePattern =
                /^[0-9]{10}$/;


            if (!phonePattern.test(phone)) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please enter a valid 10-digit phone number.";

                    formMessage.className =
                        "form-message error";

                }

                return;

            }


            const selectedDate =
                new Date(date);


            const today =
                new Date();


            today.setHours(
                0,
                0,
                0,
                0
            );


            if (selectedDate < today) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please select a future reservation date.";

                    formMessage.className =
                        "form-message error";

                }

                return;

            }


            if (formMessage) {

                formMessage.textContent =
                    "Reservation request submitted successfully!";

                formMessage.className =
                    "form-message success";

            }


            reservationForm.reset();

        }
    );

}


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const emailInput =
                newsletterForm.querySelector("input");


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            if (!email) return;


            alert(
                "Thank you for subscribing to Brew & Bloom!"
            );


            newsletterForm.reset();

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".intro-card, .about-content, .about-images, .gallery-item, .contact-card"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal");


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });

}


/* =========================================================
   DUPLICATE IMAGE CHECK
========================================================= */

const imagePaths =
    menuItems.map(item => item.image);


const duplicateImages =
    imagePaths.filter(
        (path, index) =>
            imagePaths.indexOf(path) !== index
    );


if (duplicateImages.length > 0) {

    console.warn(
        "Duplicate menu image paths detected:",
        duplicateImages
    );

} else {

    console.log(
        "✓ All 60 menu items use different local image files."
    );

}


/* =========================================================
   FINAL MENU CHECK
========================================================= */

if (menuItems.length === 60) {

    console.log(
        "✓ Brew & Bloom: All 60 menu items loaded successfully."
    );

} else {

    console.warn(
        `⚠ Expected 60 menu items but found ${menuItems.length}.`
    );

}