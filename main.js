var closeBtn = document.getElementById("close-modal");
var cartBtn = document.getElementById("cart-btn");
var tab = document.getElementsByClassName("i");
var tabModal = document.getElementsByClassName("m");
var openPicturesModalBtn = document.getElementById("gallery-main");
var decrementQuantityBtn = document.getElementById('minus')
var incrementQuantityBtn = document.getElementById('plus');
var quantityValue = document.getElementById('quantity');
var quantity = 0;
var nextImageBtn = document.getElementById('next');
var previewsImageBtn = document.getElementById('previews');
var currentImg = 0;
var nextImageBtnMobile = document.getElementById('next-mobile');
var previewsImageBtnMobile = document.getElementById('previews-mobile');

var Images = [
 "image-product-1.jpg" ,
 "image-product-2.jpg" ,
 "image-product-3.jpg" ,
 "image-product-4.jpg" 
];

decrementQuantityBtn.addEventListener('click', function(){
    if(quantity > 0 ){
        quantity--;
        quantityValue.innerHTML = quantity;
    }
});
incrementQuantityBtn.addEventListener('click', function(){
        quantity++;
        quantityValue.innerHTML = quantity;
});

nextImageBtn.addEventListener('click', function(){
    if(currentImg<3){
        currentImg++;
        document.getElementById("gallery-main-2").src = "./images/" + Images[currentImg]; 
    }else {
        currentImg = 0;
        document.getElementById("gallery-main-2").src  = "./images/" + Images[currentImg]; 
    }

});
previewsImageBtn.addEventListener('click', function(){
    if(currentImg>0){
        currentImg--;
        document.getElementById("gallery-main-2").src  = "./images/" + Images[currentImg]; 
    }else {
        currentImg = 3;
        document.getElementById("gallery-main-2").src  = "./images/" + Images[currentImg]; 
    }
});

nextImageBtnMobile.addEventListener('click', function(){
    if(currentImg<3){
        currentImg++;
        document.getElementById("gallery-main").src = "./images/" + Images[currentImg]; 
    }else {
        currentImg = 0;
        document.getElementById("gallery-main").src  = "./images/" + Images[currentImg]; 
    }

});

previewsImageBtnMobile.addEventListener('click', function(){
    if(currentImg>0){
        currentImg--;
        document.getElementById("gallery-main").src  = "./images/" + Images[currentImg]; 
    }else {
        currentImg = 3;
        document.getElementById("gallery-main").src  = "./images/" + Images[currentImg]; 
    }
});


closeBtn.addEventListener("click", function () {
  document.getElementById("pictures-modal").style.visibility = "hidden";
});

cartBtn.addEventListener("click", function () {
  document.getElementById("cart-modal").classList.toggle("cart-modal-hide");
});

openPicturesModalBtn.addEventListener('click', function(){
    document.getElementById("pictures-modal").style.visibility = "visible";
});

[].forEach.call(tab, function (img) {
  img.addEventListener("click", function () {
    [].forEach.call(tab, function (img) {
        img.style.border = 'none'
        img.style.opacity = '1';
    })
    if(img.src.toString().includes("1-th")){
        document.getElementById("gallery-main").src = "./images/" + Images[0];
        img.style.border = "1px solid var(--primary-orange)";
        img.style.opacity = '0.6';
    }
    if(img.src.toString().includes("2-th")){
        document.getElementById("gallery-main").src = "./images/" + Images[1];
        img.style.border = "1px solid var(--primary-orange)";
        img.style.opacity = '0.6';
    }
    if(img.src.toString().includes("3-th")){
        document.getElementById("gallery-main").src = "./images/" + Images[2];
        img.style.border = "1px solid var(--primary-orange)";
        img.style.opacity = '0.6';
    }
    if(img.src.toString().includes("4-th")){
        document.getElementById("gallery-main").src = "./images/" + Images[3];
        img.style.border = "1px solid var(--primary-orange)";
        img.style.opacity = '0.6';
    }
  });
});

[].forEach.call(tabModal, function (img) {
    img.addEventListener("click", function () {
        [].forEach.call(tabModal, function (img) {
            img.style.border = 'none'
            img.style.opacity = '1';
        });
      if(img.src.toString().includes("1-th")){
          document.getElementById("gallery-main-2").src = "./images/" + Images[0];
          img.style.border = "2px solid var(--primary-orange)";
          img.style.opacity = '0.6';
      }
      if(img.src.toString().includes("2-th")){
          document.getElementById("gallery-main-2").src = "./images/" + Images[1];
          img.style.border = "2px solid var(--primary-orange)";
          img.style.opacity = '0.6';
      }
      if(img.src.toString().includes("3-th")){
          document.getElementById("gallery-main-2").src = "./images/" + Images[2];
          img.style.border = "2px solid var(--primary-orange)";
          img.style.opacity = '0.6';
      }
      if(img.src.toString().includes("4-th")){
          document.getElementById("gallery-main-2").src = "./images/" + Images[3];
          img.style.border = "2px solid var(--primary-orange)";
          img.style.opacity = '0.6';
      }
    });
  });

  

var deleteProductBtnFromCart = document.getElementById('delete-product');
deleteProductBtnFromCart.addEventListener('click', function(){
    document.getElementById('product-checkout').style.visibility = 'hidden';
    document.getElementById('cart-empty').style.display = 'block';
    document.getElementById('number-product').style.visibility = 'hidden';
});
var addToCartBtn = document.getElementById('add-to-cart-btn');
var totalPrice = document.getElementById('total-price');
var cartQuantityValue = document.getElementById('cart-quantity-value');
addToCartBtn.addEventListener('click', function(){
    if (quantity>0){
        cartQuantityValue.innerHTML = quantity;
        totalPrice.innerHTML= `$${quantity*125}`;
        //document.getElementById("cart-modal").classList.remove("cart-modal-hide");
        document.getElementById('product-checkout').style.visibility = 'visible';
        document.getElementById('cart-empty').style.display = 'none';
        document.getElementById('number-product').innerHTML = quantity;
        document.getElementById('number-product').style.visibility = 'visible';
    }
});

var menuItems = document.getElementsByClassName('menu-item');

[].forEach.call(menuItems, function (Item) {
    Item.addEventListener("click", function () {
        [].forEach.call(menuItems, function (Item) {
            Item.classList.remove("menu-item-active");
        });
        Item.classList.add('menu-item-active');
    });
        
    });