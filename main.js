
let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = () => {
	l = l + movePer;
	if (product == 1) { l = 0; }
	for (const i of product) {
		if (l > maxMove) { l = l - movePer; }
		i.style.left = '-' + l + '%';
	}

}
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }


let carts = document.querySelectorAll('.add-cart');


let products = [ 
    {
        name: 'Vacum cleaner',
        tag: 'vacum cleaner',
        price: 50,
        inCart: 0
    },

    {
        name: 'Microwave',
        tag: 'microwave',
        price: 70,
        inCart: 0
    },

    {
        name: 'Tv',
        tag: 'tv',
        price: 500,
        inCart: 0
    },

    {
        name: 'Fridge',
        tag: 'fridge',
        price: 800,
        inCart: 0
    },

    {
        name: 'Air Fryer',
        tag: 'air fryer',
        price: 100,
        inCart: 0
    },

    {
        name: 'Hand Mixer',
        tag: 'hand mixer',
        price: 40,
        inCart: 0
    },

    {
        name: 'Washing Machine',
        tag: 'washing mac',
        price: 400,
        inCart: 0
    },

    {
        name: 'Toaster',
        tag: 'toaster',
        price: 60,
        inCart: 0
    },
    {
        name: 'Samsung AC',
        tag: 'ac',
        price: 660,
        inCart: 0
    },

    {
        name: 'Blue star Cooler',
        tag: 'cooler',
        price: 120,
        inCart: 0
    },

    {
        name: 'Butterfly electric cooker',
        tag: 'electric cooker',
        price: 80,
        inCart: 0
    },

    {
        name: 'Blue star heater',
        tag: 'heater',
        price: 79,
        inCart: 0
    },

    {
        name: 'Sony speaker',
        tag: 'speaker',
        price: 180,
        inCart: 0
    },

    {
        name: 'whirlpool water purifier',
        tag: 'water purifier',
        price: 110,
        inCart: 0
    },

    {
        name: 'Renpho weight machine',
        tag: 'weight machine',
        price: 30,
        inCart: 0
    },
    
    {
        name: 'Apple 14 pro max',
        tag: '14 pro max',
        price: 1190,
        inCart: 0
    },

    {
        name: 'Apple 14',
        tag: '14',
        price: 999,
        inCart: 0
    },

    {
        name: 'Apple XR',
        tag: 'xr',
        price: 550,
        inCart: 0
    },

    {
        name: 'Samsung s22 Ultra',
        tag: 's22 ultra',
        price: 730,
        inCart: 0
    },

    {
        name: 'Samsung fold 3',
        tag: 'fold 3',
        price: 1120,
        inCart: 0
    },

    {
        name: 'Samsung flip Z',
        tag: 'flip z',
        price: 680,
        inCart: 0
    },

    {
        name: 'MI 11 ultra',
        tag: 'mi 11 ultra',
        price: 450,
        inCart: 0
    },
    

    {
        name: 'Apple 5s',
        tag: 'iphonw 5s',
        price: 250,
        inCart: 0
    },
    
    {
        name: 'Motorola 5g',
        tag: 'motorola',
        price: 350,
        inCart: 0
    },

    {
        name: 'Google pixel 8',
        tag: 'pixel',
        price: 890,
        inCart: 0
    },

    {
        name: 'Poco C51',
        tag: 'poco c51',
        price: 220,
        inCart: 0
    },

    {
        name: 'Poco M6',
        tag: 'poco m6',
        price: 330,
        inCart: 0
    },

    {
        name: 'Realme 60',
        tag: 'realme 60',
        price: 550,
        inCart: 0
    },

    {
        name: 'Realme GT2',
        tag: 'realme gt2',
        price: 640,
        inCart: 0
    },

    {
        name: 'Vivo ultra 7',
        tag: 'vivo',
        price: 370,
        inCart: 0
    }
];

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./images/${item.tag}.jpeg" />
                <span class="sm-hide">${item.name}</span>
                <span class="price sm-hide">$${item.price}.00</span>
                <span class="quantity"><ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon><span>${item.inCart}</span><ion-icon class="increase" name="arrow-dropright-circle"></ion-icon></span>
                <span class="total">$${item.inCart * item.price}.00</span>
            </div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart}.00</h4>
            </div>
            `
        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}



function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

function clearall(){
    let cartItems = localStorage.getItem('productsInCart');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);
    localStorage.setItem("totalCost", 0);
    productNumbers = parseInt(productNumbers);
    localStorage.setItem("cartNumbers", 0);
    localStorage.setItem("productsInCart",null);
    cartItems = parseInt(cartItems);
    window.location.reload();
    
    
    onLoadCartNumbers();
    displayCart();

}
onLoadCartNumbers();
displayCart();
