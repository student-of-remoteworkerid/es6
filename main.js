// ambil element
const cart_items = document.getElementById('cart');

// ES5
/*
function addProduct(name, category) {
    return {
        name: name,
        category: category
    }
}

var getProduct = addProduct("Iphone 11", "Gadget");
console.log(getProduct)
*/

// ES6
function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("Iphone 11", "Gadget");
cart_items.innerHTML = `Product: ${getProduct.name} <br> Category: ${getProduct.category}`;