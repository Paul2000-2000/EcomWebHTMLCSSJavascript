import { featProd } from "../data/featprod.js";
import { calculatePrice } from "../data/trendprod.js";

const featureElement = document.querySelector('.js-featured-products') ;
let  hmtlfeatProd ='';


featProd.forEach( product =>
{
    hmtlfeatProd  += `<div class="featuredproducts-products-product">
                    <img src="${product.url}" class="featuredproducts-products-product-img">
                    <div class="featuredproducts-products-product-heart"> ❤</div>
                    <div class="featuredproducts-products-product-proc"> ${product.proc}%</div>
                    <div class="featuredproducts-products-product-stars"> ${product.stars}</div>
                    <p  class="featuredproducts-products-product-desc">${product.desc}</p>
                    <p  class="featuredproducts-products-product-price">$${calculatePrice(product.price)}</p>
</div>`;
});

featureElement.innerHTML = hmtlfeatProd;