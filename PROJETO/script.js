const products = [

    {
        id: 1,
        name: "Air Max",
        category: "tenis",
        price: 799.90,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Tênis Running",
        category: "tenis",
        price: 699.90,
        image:
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Tênis Esportivo",
        category: "tenis",
        price: 599.90,
        image:
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Camiseta Sportswear",
        category: "roupas",
        price: 149.90,
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Moletom",
        category: "roupas",
        price: 299.90,
        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Boné Esportivo",
        category: "acessorios",
        price: 129.90,
        image:
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Mochila Esportiva",
        category: "acessorios",
        price: 249.90,
        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Tênis Casual",
        category: "tenis",
        price: 549.90,
        image:
            "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80"
    }

];


let cart = [];


/* MOSTRAR PRODUTOS */

function displayProducts(list = products) {

    const container =
        document.getElementById("products");

    container.innerHTML = "";


    list.forEach(product => {

        container.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="category">
                        ${product.category}
                    </p>

                    <p class="price">
                        R$
                        ${product.price
                            .toFixed(2)
                            .replace(".", ",")}
                    </p>

                    <button
                        class="buy-button"
                        onclick="addToCart(${product.id})"
                    >
                        Adicionar ao carrinho
                    </button>

                </div>

            </div>

        `;

    });

}


/* FILTRAR PRODUTOS */

function filterProducts(
    category,
    button
) {

    document
        .querySelectorAll(".filter-button")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    if (category === "todos") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(
                product =>
                    product.category === category
            );

        displayProducts(filtered);

    }

}


/* ADICIONAR AO CARRINHO */

function addToCart(id) {

    const product =
        products.find(
            product =>
                product.id === id
        );


    cart.push(product);


    updateCart();


    openCart();

}


/* REMOVER DO CARRINHO */

function removeFromCart(index) {

    cart.splice(index, 1);


    updateCart();

}


/* ATUALIZAR CARRINHO */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    document.getElementById(
        "cartCount"
    ).textContent =
        cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Seu carrinho está vazio.</p>";


        document.getElementById(
            "cartTotal"
        ).textContent =
            "0,00";


        return;

    }


    let total = 0;


    cartItems.innerHTML = "";


    cart.forEach(
        (product, index) => {

            total += product.price;


            cartItems.innerHTML += `

                <div class="cart-item">

                    <div>

                        <strong>
                            ${product.name}
                        </strong>

                        <br>

                        R$
                        ${product.price
                            .toFixed(2)
                            .replace(".", ",")}

                    </div>


                    <button
                        class="remove-button"
                        onclick="removeFromCart(${index})"
                    >
                        Remover
                    </button>

                </div>

            `;

        }
    );


    document.getElementById(
        "cartTotal"
    ).textContent =
        total
            .toFixed(2)
            .replace(".", ",");

}


/* ABRIR CARRINHO */

function openCart() {

    document
        .getElementById("cart")
        .classList.add("open");

}


/* FECHAR CARRINHO */

function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("open");

}


/* FINALIZAR COMPRA */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;

    }


    alert(
        "Compra iniciada! " +
        "Para uma loja real, " +
        "conecte esta etapa " +
        "a um sistema de pagamento."
    );

}


/* INICIAR SITE */

displayProducts();
