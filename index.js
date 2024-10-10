const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let cors = require('cors');

app.use(cors());

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

function sortProductsOnRating(product1, product2) {
  return product2.rating-product1.rating;
}

app.get('/products/sort/popularity', (req, res)=> {
    let productsCopy=products.slice();
    productsCopy.sort(sortProductsOnRating);
    // const responseBody = "JSON of sorted products on popularity " + JSON.stringify(productsCopy);
    // res.send(responseBody);
    res.json(productsCopy);
})

function sortProductsOnPrice(product1, product2) {
   return product2.price-product1.price;
}

function sortProductsOnPriceAscending(product1, product2) {
  return product1.price-product2.price;
}


app.get('/products/sort/price-high-to-low', (req, res)=> {
  let productsSlice=products.slice();
  productsSlice.sort(sortProductsOnPrice);
  // const responseBody = "JSON of sorted products on pricing (Low to High) " + JSON.stringify(productsSlice);
  // res.send(responseBody);
  res.json(productsSlice);

})


app.get('/products/sort/price-low-to-high', (req, res)=> {
    let productsSlice=products.slice();
    productsSlice.sort(sortProductsOnPriceAscending);
    // const responseBody = "JSON of sorted products on pricing (Low to High) " + JSON.stringify(productsSlice);
    // res.send(responseBody);
    res.json(productsSlice);

})

function filterBasedOnRam(ele, ram) {
   return ele.ram===ram;
}

app.get('/products/filter/ram', (req, res)=> {
    let ram=parseInt(req.query.ram);
    let filteredProducts = products.filter(ele=>filterBasedOnRam(ele, ram));
    // const responseBody = `JSON of products with RAM=${ram} GB ` + JSON.stringify(productsSlice);
    // res.send(responseBody);
    res.json(filteredProducts);
})

function filterBasedOnRom(ele, rom) {
   return ele.rom===rom;
}

app.get('/products/filter/rom', (req, res)=> {
  let rom=parseInt(req.query.rom);
  let filteredProducts = products.filter(ele=>filterBasedOnRom(ele, rom));
  // const responseBody = `JSON of products with ROM=${rom} GB ` + JSON.stringify(filteredProducts);
  // res.send(responseBody);
  res.json(filteredProducts);
})

function filterProductsBasedOnBrand(ele, brand) {
    return ele.brand.toLowerCase()===brand;
}

app.get('/products/filter/brand', (req, res)=> {
    let brand=req.query.brand;
    let lowerCaseBrandValue=brand.toLowerCase();
    let filteredProducts = products.filter(ele=>filterProductsBasedOnBrand(ele, lowerCaseBrandValue));
    // const responseBody = `JSON of products with brand = ${brand} ` + JSON.stringify(filteredProducts);
    // res.send(responseBody);
    res.json(filteredProducts);
})

function filterProductsBasedOnOs(ele, os) {
    return ele.os.toLowerCase()===os;
}

app.get('/products/filter/os', (req, res)=> {
  let os=req.query.os;
  let lowerCaseOsValue=os.toLowerCase();
  let filteredProducts = products.filter(ele=>filterProductsBasedOnOs(ele, lowerCaseOsValue));
  // const responseBody = `JSON of products with OS= ${os} ` + JSON.stringify(filteredProducts);
  // res.send(responseBody);
  res.json(filteredProducts);
})

function filterBasedOnPrice(ele, price) {
  return ele.price<=price;
}

app.get('/products/filter/price', (req, res)=> {
    let price=parseFloat(req.query.price);
    let filteredProducts=products.filter(ele=>filterBasedOnPrice(ele, price));
    // const responseBody = `JSON of products with Price <= ${price} ` + JSON.stringify(filteredProducts);
    // res.send(responseBody);
    res.json(filteredProducts);
})

app.get('/products', (req, res)=> {
  //  const responseBody = `JSON of products ` + JSON.stringify(filteredProducts);
  //  res.send(responseBody);
  res.json(products);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
