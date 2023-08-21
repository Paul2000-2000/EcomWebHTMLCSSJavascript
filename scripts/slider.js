import { sliderprod } from '../data/sliderprod.js';

const slidercontentElement = document.querySelector('.js-slider');
const radioButtons = document.querySelectorAll('.slidercontent-checkbuttons input[type="radio"]');
const productElements = [];

// Create product elements and store them in an array
sliderprod.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    
    productElement.innerHTML = `
        <p class="slidercontent-p-overh1">${product.pover}</p>
        <h1>${product.h1}</h1>
        <p class="slidercontent-p-underh1">${product.punder}</p>
        <button class="slidercontent-button">${product.button}</button>
    `;
    productElement.style.background = `url('${product.url}') center / cover`;

   
    
    // Initially hide all products
    productElement.style.display = 'none';

    productElements.push(productElement);
    slidercontentElement.appendChild(productElement);
});

// Show the first product initially
productElements[0].style.display = 'block';
productElements[0].style.width = '100%';
productElements[0].style.height = '100%';
radioButtons[0].checked = true; // Check the first radio button initially

// Add event listeners to radio buttons
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        // Hide all products
        productElements.forEach(productElement => {
            productElement.style.display = 'none';
        });
        
        // Show the selected product and make it full
        productElements[index].style.display = 'block';
        productElements[index].style.width = '100%';
        productElements[index].style.height = '100%';
        
    });
});
