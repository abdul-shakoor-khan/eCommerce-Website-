// Function to get a product by its unique product ID.
export function getProduct(productId) {
  let matchingProduct;
  // Iterate through all products to find the one with the matching ID.
  products.forEach(product => {
    if (product.id === productId) {
      // If a match is found, store it in `matchingProduct`.
      matchingProduct = product;
    }
  });
  // Return the matching product or `undefined` if no match is found.
  return matchingProduct
}

// Array of product objects representing the product catalog.
export const products = [
  {
    // Unique product ID
    id: "2f81b31e-07e6-4a5e-80b4-9c781c1f1f02",
    // URL to the main image of the product
    mainImage: "images/01_mall-gothic/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/01_mall-gothic/01_image.jpeg", "images/01_mall-gothic/02_image.jpeg", "images/01_mall-gothic/03_image.jpeg", "images/01_mall-gothic/04_image.jpeg", "images/01_mall-gothic/05_image.jpeg"],
    // Product name
    name: "Mall Gothic Halter Open Shoulder Blouses Women Flare Sleeve Grunge Sexy T-shirts Fishnet Lace Up Streetwear Online",
    // Product price
    price: 1480,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Number of units available in stock
    count: 1327,
    // Available colors for the product
    color: ["Black"],
    // Available sizes for the product
    size: ["Small", "Medium", "Large"],
  },
  {
    // Unique product ID
    id: "b9a982c2-d9e5-43e4-91c3-e67de5c840a9",
    // URL to the main image of the product
    mainImage: "images/02_waven-think/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/02_waven-think/01_image.jpeg", "images/02_waven-think/02_image.jpeg", "images/02_waven-think/03_image.jpeg", "images/02_waven-think/04_image.jpeg", "images/02_waven-think/05_image.jpeg"],
    // Product name
    name: "Waven Thick Platform Slippers Open Toe Flat Casual Shoes Woman Non Slip Beach Flip Flops Supply",
    // Product price
    price: 1660,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 1121,
    // Available colors for the product
    color: ["Beige", "Green", "Purple", "Yellow"],
    // Available sizes for the product
    size: ["35", "36", "37", "38", "39"],
  },
  {
    // Unique product ID
    id: "3a7405a8-ff3e-40df-8a3f-02ae573d82a7",
    // URL to the main image of the product
    mainImage: "images/03_peacock-feather/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/03_peacock-feather/01_image.jpeg", "images/03_peacock-feather/02_image.jpeg", "images/03_peacock-feather/03_image.jpeg", "images/03_peacock-feather/04_image.jpeg", "images/03_peacock-feather/05_image.jpeg"],
    // Product name
    name: "Peacock Feather Headpiece Flapper Accessories Women Art Deco 20s Great Gatsby Showgirl",
    // Product price
    price: 1049,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line", "ri-star-line"],
    // Number of units available in stock
    count: 921,
    // Available colors for the product
    color: ["Black", "Green"],
    // Available sizes for the product
    size: ["Small", "Medium", "Large"],

  },
  {
    // Unique product ID
    id: "0cf6a5be-fc4e-45a0-854d-71ab0d154b3e",
    // URL to the main image of the product
    mainImage: "images/04_women-spring/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/04_women-spring/01_image.jpeg", "images/04_women-spring/02_image.jpeg", "images/04_women-spring/03_image.jpeg", "images/04_women-spring/04_image.jpeg", "images/04_women-spring/05_image.jpeg"],
    // Product name
    name: "Women Spring Summer Elegant Mini Shirts Dresses Long Sleeve Turn Down Collar Clothing A-Line Vestidos Sale",
    // Product price
    price: 1840,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line"],
    // Number of units available in stock
    count: 1012,
    // Available colors for the product
    color: ["Black", "Pink"],
    // Available sizes for the product
    size: ["One Size"],
  },
  {
    // Unique product ID
    id: "20427823-839d-41a2-9e73-f4b019623ad8",
    // URL to the main image of the product
    mainImage: "images/05_flapper-shawl/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/05_flapper-shawl/01_image.jpeg", "images/05_flapper-shawl/02_image.jpeg", "images/05_flapper-shawl/03_image.jpeg", "images/05_flapper-shawl/04_image.jpeg", "images/05_flapper-shawl/05_image.jpeg"],
    // Product name
    name: "Flapper Shawl Wraps Beaded Sequin Art Deco Evening Cape Bolero Cover Up Gatsby Party Dress Online Hot Sale",
    // Product price
    price: 1399,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill"],
    // Number of units available in stock
    count: 2327,
    // Available colors for the product
    color: ["White", "Black", "Red", "Blue"],
    // Available sizes for the product
    size: ["One size"],
  },
  {
    // Unique product ID
    id: "614a6a67-fba6-43a9-97ea-15439fcd08c2",
    // URL to the main image of the product
    mainImage: "images/06_winter-baby/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/06_winter-baby/01_image.jpeg", "images/06_winter-baby/02_image.jpeg", "images/06_winter-baby/03_image.jpeg", "images/06_winter-baby/04_image.jpeg", "images/06_winter-baby/05_image.jpeg"],
    // Product name
    name: "Winter Baby Girls Long Sleeve Princess Lace Dress Birthday Party Outfits For Toddler Infant Flower Costume Discount",
    // Product price
    price: 1260,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 1520,
    // Available colors for the product
    color: ["Red", "White", "Black", "Purple", "Blue"],
    // Available sizes for the product
    size: ["3M", "6M", "9M", "12M"],
  },
  {
    // Unique product ID
    id: "72036da4-b209-4110-9298-59d3081e21f9",
    // URL to the main image of the product
    mainImage: "images/07_christmas-white/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/07_christmas-white/01_image.jpeg", "images/07_christmas-white/02_image.jpeg", "images/07_christmas-white/03_image.jpeg", "images/07_christmas-white/04_image.jpeg", "images/07_christmas-white/05_image.jpeg"],
    // Product name
    name: "Christmas White Bow Decoration Design Sense Red Vitality Women Mature Sexy Hot Slim Fit Halter Knit Dress Supply",
    // Product price
    price: 1600,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 231,
    // Available colors for the product
    color: ["Red"],
    // Available sizes for the product
    size: ["Small", "Medium", "Large"],
  },
  {
    // Unique product ID
    id: "12d0b80d-9088-413b-bc68-33187ae89e8d",
    // URL to the main image of the product
    mainImage: "images/08_toddler-baby/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/08_toddler-baby/01_image.jpeg", "images/08_toddler-baby/02_image.jpeg", "images/08_toddler-baby/03_image.jpeg", "images/08_toddler-baby/04_image.jpeg", "images/08_toddler-baby/05_image.jpeg"],
    // Product name
    name: "Toddler Baby Girls Princess Dress Kids Sequin Star Tutu Party Birthday Christmas Dresses Hot on Sale",
    // Product price
    price: 1990,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 827,
    // Available colors for the product
    color: ["ZL", "QL", "H", "F"],
    // Available sizes for the product
    size: ["12M", "2T", "3T"],
  },
  {
    // Unique product ID
    id: "aad54888-042e-497b-b693-5bb7d95ad4c5",
    // URL to the main image of the product
    mainImage: "images/09_women-lovely/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/09_women-lovely/01_image.jpeg", "images/09_women-lovely/02_image.jpeg", "images/09_women-lovely/03_image.jpeg", "images/09_women-lovely/04_image.jpeg", "images/09_women-lovely/05_image.jpeg"],
    // Product name
    name: "Women’s Lovely Dresses Chic Ins Kawaii Short Sleeve Dress Girl Sweet Clothes For Women Shirt Discount",
    // Product price
    price: 1330,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 4121,
    // Available colors for the product
    color: ["Black", "Blue", "Yellow"],
    // Available sizes for the product
    size: ["Small", "Medium"],
  },
  {
    // Unique product ID
    id: "d9f12699-b3e6-4b68-b504-4d7fb020b95b",
    // URL to the main image of the product
    mainImage: "images/10_women-sweater/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/10_women-sweater/01_image.jpeg", "images/10_women-sweater/02_image.jpeg", "images/10_women-sweater/03_image.jpeg", "images/10_women-sweater/04_image.jpeg", "images/10_women-sweater/05_image.jpeg"],
    // Product name
    name: "Women Sweater Coats Autumn Winter Drop Shoulder Knitted Cardigan Single-Breasted Vintage Cardigans Sale",
    // Product price
    price: 1580,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 1217,
    // Available colors for the product
    color: ["Gray", "Yellow", "Violet"],
    // Available sizes for the product
    size: ["Small", "Medium", "Large"],
  },
  {
    // Unique product ID
    id: "c1622781-8827-4af6-b99f-59c733c7ac02",
    // URL to the main image of the product
    mainImage: "images/11_flapper-pearl/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/11_flapper-pearl/01_image.jpeg", "images/11_flapper-pearl/02_image.jpeg", "images/11_flapper-pearl/03_image.jpeg", "images/11_flapper-pearl/04_image.jpeg", "images/11_flapper-pearl/05_image.jpeg"],
    // Product name
    name: "Flapper Pearl Headband Bracelet Ring Inspired Leaf Simulated Jewelry Set Online Sale",
    // Product price
    price: 1720,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 3027,
    // Available colors for the product
    color: ["Silver", "Gold", "Black"],
    // Available sizes for the product
    size: ["Small", "Medium", "Large"],
  },
  {
    // Unique product ID
    id: "22711e89-f885-442e-bdd5-e0a508512611",
    // URL to the main image of the product
    mainImage: "images/12_women-sequin/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/12_women-sequin/01_image.jpeg", "images/12_women-sequin/02_image.jpeg", "images/12_women-sequin/03_image.jpeg", "images/12_women-sequin/04_image.jpeg", "images/12_women-sequin/05_image.jpeg"],
    // Product name
    name: "Women Sequin Halter Bra Salsa Belly Dance Boho Festival Club Tribal Top Colorful Beading Coins on Sale",
    // Product price
    price: 1014,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 312,
    // Available colors for the product
    color: ["White", "Purple", "Red", "Yellow"],
    // Available sizes for the product
    size: ["One size"],
  },
  {
    // Unique product ID
    id: "f2f6151a-8c94-49c4-872d-b2261e1017a9",
    // URL to the main image of the product
    mainImage: "images/13_women-sexy/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/13_women-sexy/01_image.jpeg", "images/13_women-sexy/02_image.jpeg", "images/13_women-sexy/03_image.jpeg", "images/13_women-sexy/04_image.jpeg", "images/13_women-sexy/05_image.jpeg"],
    // Product name
    name: "Women Sexy Brocade Floral Lace Up Corset Waist Cincher Body Shaper Vintage Plum Flowers Hot Sale",
    // Product price
    price: 1932,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 721,
    // Available colors for the product
    color: ["Red", "Black"],
    // Available sizes for the product
    size: ["X", "M", "L", "XL"],
  },
  {
    // Unique product ID
    id: "31d6a3b1-5034-4f8b-8ba5-0b1dff2bcd83",
    // URL to the main image of the product
    mainImage: "images/14_charleston-flapper/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/14_charleston-flapper/01_image.jpeg", "images/14_charleston-flapper/02_image.jpeg", "images/14_charleston-flapper/03_image.jpeg", "images/14_charleston-flapper/04_image.jpeg", "images/14_charleston-flapper/05_image.jpeg"],
    // Product name
    name: "Charleston Flapper Girl Fancy Dress Fringe Sequin Dress Sexy Strap Party Latin Dance Costume Online Hot Sale",
    // Product price
    price: 2410,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 1203,
    // Available colors for the product
    color: ["White", "Purple", "Red", "Green"],
    // Available sizes for the product
    size: ["One size"],
  },
  {
    // Unique product ID
    id: "86b457ed-d6cc-43d6-8714-27065b5db737",
    // URL to the main image of the product
    mainImage: "images/15_women-round/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/15_women-round/01_image.jpeg", "images/15_women-round/02_image.jpeg", "images/15_women-round/03_image.jpeg", "images/15_women-round/04_image.jpeg", "images/15_women-round/05_image.jpeg"],
    // Product name
    name: "Women Round Neck Stitching Lace Short Sleeve Top Petal Sleeve Tshirts Fashion",
    // Product price
    price: 1320,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 1341,
    // Available colors for the product
    color: ["Black", "Green", "Red", "Gray"],
    // Available sizes for the product
    size: ["X", "M", "L", "XL"],
  },


  {
    // Unique product ID
    id: "7b68e4a6-5084-4c89-8713-c1ff1a249b63",
    // URL to the main image of the product
    mainImage: "images/16_snake-pattern/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/16_snake-pattern/01_image.jpeg", "images/16_snake-pattern/02_image.jpeg", "images/16_snake-pattern/03_image.jpeg", "images/15_women-round/04_image.jpeg", "images/16_snake-pattern/05_image.jpeg"],
    // Product name
    name: "Snake Pattern Flat Summer Clip Toe Gladiator Sandals Woman Non Slip Beach Shoes Hot on Sale",
    // Product price
    price: 1508,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 763,
    // Available colors for the product
    color: ["Beige", "Red", "Blue", "Yellow"],
    // Available sizes for the product
    size: ["35", "36", "37", "38", "39", "40"],
  },

  {
    // Unique product ID
    id: "b9a76f3f-63f6-4f2f-92fa-b53172fce30b",
    // URL to the main image of the product
    mainImage: "images/17_summer-purple/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/17_summer-purple/01_image.jpeg", "images/17_summer-purple/02_image.jpeg", "images/17_summer-purple/03_image.jpeg", "images/17_summer-purple/04_image.jpeg", "images/17_summer-purple/05_image.jpeg"],
    // Product name
    name: "Summer Purple Elegant Lace Long Maxi Dress Women Vintag Holiday Lady Vestidos Online Hot Sale",
    // Product price
    price: 1720,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 213,
    // Available colors for the product
    color: ["White", "Silver Blue"],
    // Available sizes for the product
    size: ["X", "M", "L", "XL"],
  },

  {
    // Unique product ID
    id: "03fe7491-f5aa-4dbe-b1f6-14e97ad36fcb",
    // URL to the main image of the product
    mainImage: "images/18_fashion-wide/01_image.jpeg",
    // Array of image URLs for the product
    images: ["images/18_fashion-wide/01_image.jpeg", "images/18_fashion-wide/02_image.jpeg", "images/18_fashion-wide/03_image.jpeg", "images/18_fashion-wide/04_image.jpeg", "images/18_fashion-wide/05_image.jpeg"],
    // Product name
    name: "Fashion wide corset belt female elastic waist belt 50s 60s vintage ladies waist Solid Color Discount",
    // Product price
    price: 9020,
    // Array of rating icons for visual representation of product rating
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-half-line", "ri-star-line"],
    // Number of units available in stock
    count: 4321,
    // Available colors for the product
    color: ["Red", "Purple", "Black"],
    // Available sizes for the product
    size: ["China"],
    // Link to the product page
    link: "https://www.wildfrkfoe.shop/product/2023-fashion-wide-corset-belt-female-elastic-waist-belt-50s-60s-vintage-stretch-dress-corset-ladies-waist-solid-color-discount/",
  },
]
