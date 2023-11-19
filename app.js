//slecting
var cart = document.querySelector(".cart")
var slide = document.querySelector(".cart-items")
var slideclose = document.querySelector(".cart-close")


// Sliding function
cart.addEventListener("click",() =>{
    slide.style.transform = "translateX(0)";
})

slideclose.addEventListener("click",() =>{
    slide.style.transform = "translateX(100%)"
})

// Cart function

function ready(){
    var removeCartBtn = document.querySelectorAll(".remove-item")
    // console.log(removeCartBtn.length)
    // console.log(removeCartBtn)
    for(var i =0; i<removeCartBtn.length; i++){
        var trashButton = removeCartBtn[i];
        trashButton.addEventListener("click",removeProduct)
        console.log(removeCartBtn.length);
        
    }
    var quantityInputs = document.querySelectorAll(".cart-quantity")
for(var i =0; i < quantityInputs.length; i++){
    var Input = quantityInputs[i];
    Input.addEventListener("change",quantityChanges);
    // console.log(quantityInputs.length)
}
// Add to Cart 
var addCart = document.querySelectorAll(".shopping-bag");
for(var i = 0;i <addCart.length; i++){
    var button = addCart[i];
    button.addEventListener("click",addCartClicked);
}
updatetotal()
}


function removeProduct(event){
    var buttonClicked = event.target;
    var detailBox =buttonClicked.parentElement
    // console.log(detailBox.parentElement)
    detailBox.parentElement.remove();
    updatetotal();
}

// Quantity Changes 
function quantityChanges(event){
   var input = event.target;
   if(isNaN(input.value) || input.value == 0){
    input.value = 1;
   }
   updatetotal();
}

//Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.querySelector(".title").innerText;
    var ProductPrice = shopProduct.querySelector(".price").innerText;
    var productImage = shopProduct.querySelector(".Product_img").src;
    console.log(title,ProductPrice,productImage);
    addProductToCart(title,ProductPrice,productImage);
}

function addProductToCart(title,ProductPrice,productImage){
    var cartShopBox = document.createElement("div");
    var cartsAllProducts = document.querySelector(".cart-content");
    var cartItemsNames = cartsAllProducts.querySelectorAll(".product-title");
    cartShopBox.classList.add("item-card")
    
    
cartShopBox.innerHTML = ` 
<div class="cart-box flex md:justify-around justify-start items-start ">

    <img src="${productImage}" class="h-24 cart-image" alt="">

    <div class="detail-box space-y-3 ">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${ProductPrice}</div>
        <input type="number" name="" value="1" class="cart-quantity outline rounded-sm border-black w-10">
        <i class="ri-delete-bin-7-fill cursor-pointer remove-item text-xl text-red-600 ml-14"></i> 
    </div>

</div>`
cartsAllProducts.append(cartShopBox);
cartShopBox.querySelector(".remove-item").addEventListener("click",removeProduct);
cartShopBox.querySelector(".cart-quantity").addEventListener("change",quantityChanges);
updatetotal();

}







//Cart Update
function updatetotal(){
    var cartContent = document.querySelectorAll(".cart-content")[0]
    var cartBoxes = document.querySelectorAll(".cart-box")
    console.log(cartBoxes.length)
    var total = 0;
    for(var i = 0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.querySelector(".cart-price");
        var quantityElement = cartBox.querySelector(".cart-quantity");
        var price = parseFloat(priceElement.innerText.replace("$",""));

        var quantity = quantityElement.value;
        total = total + (price*quantity)
        total = Math.round(total*100)/100;
        document.querySelectorAll('.Total-price')[0].innerText = `$ ${total}`;
    }
}

// updatetotal()
ready()

// Buy button

var buyBtn = document.querySelector(".btn-buy");
buyBtn.addEventListener("click",() =>{
    alert("Your Order is Placed 😁");
})