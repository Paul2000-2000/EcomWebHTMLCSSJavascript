export const trendProd = [
    {
        url:'assets/products/shoe1.jpg',
        proc: 31,
        desc: 'Men Slip On shoes Casual with Arch Support Insoles' ,
        stars: '⭐ ⭐ ⭐ ⭐ ⭐',
        price: 8090,
        sold:'1232',
        
    },

    {
        url:'assets/products/apparel1.jpg',
        proc: 25,
        desc: 'Under Armour Mens Tech' ,
        stars: '⭐ ⭐ ⭐ ⭐ ',
        price: 5650,
        sold:'2534',
        
    },

    {
        url:'assets/products/home1.jpg',
        proc: 37,
        desc: 'Vonada Valvet Sofa Couch' ,
        stars: '⭐ ⭐ ⭐ ⭐ ',
        price: 46999,
        sold:'2151',
        
    },

    {
        url:'assets/products/electronic3.jpg',
        proc: 20,
        desc: 'Wireless Headphones Over Ear' ,
        stars: '⭐ ⭐ ⭐ ⭐ ⭐',
        price: 9998,
        sold:'1843',
        
    },

    {
        url:'assets/products/apparel3.jpg',
        proc: 30,
        desc: 'Black Women Coat Dress' ,
        stars: '⭐ ⭐ ⭐ ⭐ ⭐',
        price: 4595,
        sold:'1429',
        
    },

    {
        url:'assets/products/apparel2.jpg',
        proc: 47,
        desc: 'Women Lightweight Knit Hoodie' ,
        stars: '⭐ ⭐ ⭐ ⭐ ',
        price: 3750,
        sold:'1257',
        
    },

    {
        url:'assets/products/home2.jpg',
        proc: 44,
        desc: 'Dimmable Ceiling Light Modern' ,
        stars: '⭐ ⭐ ⭐ ⭐ ',
        price: 27999,
        sold:'995',
        
    },

    {
        url:'assets/products/home3.jpg',
        proc: 18,
        desc: 'Modern Storage Cabinet with Door & 3 Drawers' ,
        stars: '⭐ ⭐ ⭐ ⭐ ⭐',
        price: 12999,
        sold:'758',
        
    }
];

export function calculatePrice (price){
    return (price/100).toFixed(2);
}