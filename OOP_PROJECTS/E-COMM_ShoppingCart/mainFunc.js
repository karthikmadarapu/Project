class Product {
    #price;
    constructor(name, price){

        this.name = name;
        this.#price = price;

    }

    get price(){

        return this.#price;
    }
    get getName(){
        return this.name;
    }
}

class ShoppingCart {
    
    constructor(){
   
        this.items = [];
    }


    addItem(product, quantity){

        this.items.push({product: product, quantity: quantity});
        console.log(`${product.name} added to the cart!`);
    }

    calculateTotal(){

       let  total = 0;
        for(const eachItr of this.items){

            total += eachItr.product.price * eachItr.quantity;
        }
        return total ;
    }
    
}


const condom = new Product("condom", 16.99);
const sharpieMarker = new Product("marker(sharpie)", 9.99);

const myCart = new ShoppingCart();

// console.log(condom.getName);
// console.log(sharpieMarker.price);

myCart.addItem(sharpieMarker, 2);
myCart.addItem(condom, 3);

console.log("Total Bill: $" + myCart.calculateTotal().toFixed(2));


