import { trendProd ,calculatePrice} from "../data/trendprod.js";


const trendprodrightElement  = document.querySelector('.js-trendprod-right');
let htmlPrductRight = '';



    trendProd.forEach(product => {


        htmlPrductRight +=`
        <div class="trendingproducts-products-all-product">
    <img src="${product.url}" class="trendingproducts-products-all-product-img">
    <div class="trendingproducts-products-all-product-heart">🤍</div>
    <div class="trendingproducts-products-all-product-proc">${product.proc}</div>
    <div class="trendingproducts-products-all-product-desc">
    <p  class="trendingproducts-products-all-product-desc-firstp">${product.desc}</p>
        <div>${product.stars}</div>
    <p class="trendingproducts-products-specoffer-price">${calculatePrice(product.price) }$</p>
    <p class="trendingproducts-products-all-product-desc-sold">${product.sold} sold</p>
    
        </div>
        </div>`;
    
});

trendprodrightElement.innerHTML =  htmlPrductRight;
    