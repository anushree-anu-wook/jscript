
// Show cart item in nav bar

(function(){
    const cartInfo = document.getElementById("cart-info");

    const cart = document.getElementById("carti")
     cartInfo.addEventListener("click",function(){
         cart.classList.toggle("show-cart");
     });
})();

// add item 
(function(){
    const cartBtn=document.querySelectorAll('#cart');
    cartBtn.forEach(function(btn){
       
        btn.addEventListener('click',function(event){
            var item = document.getElementById('cart');
            
    
            if(event.target.parentElement.children[0]){
                let fullPath= event.target.parentElement.children[0].src;
               
                let pos= fullPath.indexOf('img')+3;
        
                let partPath=fullPath.slice(pos);
              
//access name
                const item={};
                item.img=`img${partPath}`;
               
                let name= event.target.parentElement.children[1].textContent;
                
                item.name=name;
              
// //access price
                let price= event.target.parentElement.children[2].children[0].textContent;
               
                let finalPrice=price.trim();
                item.price=finalPrice;
                
                
//addding to cart
const cartItem=document.createElement('div');
cartItem.classList.add("cart-item",
        "d-flex",
        "justify-content-between",
        "text-capitalize",
        "my-3"
);

cartItem.innerHTML=` 
         <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="" style="width: 30px; height: 30px;">
        <div class="cart-item-text">

        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
        <span>₹</span>
        <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
        </div>
        <a href="#" id='cart-item-remove' class="cart-item-remove">
        <i class="fas fa-trash"></i>
        </a>
        </div>`;


    // SELECT cart

    const cart=document.getElementById('carti');
    const total=document.querySelector(".cart-total-container");
    cart.insertBefore(cartItem,total);
    alert(" Added to cart");
showTotals();
          }
        });
    });

    // remove Item
    


    function showTotals(){
        const total=[];
        const items=document.querySelectorAll(".cart-item-price");

        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        });
        const totalMoney=total.reduce(function(total,item){
            total += item;
            return total;
            
        },0);
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById("cart-total").textContent=finalMoney;
        document.getElementById("item-count").textContent=total.length;
    }


})();

