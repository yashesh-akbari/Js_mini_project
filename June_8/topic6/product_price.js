let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 }
];

let maps_result=products.map(product=>(product*10/100)+product)
console.log(maps_result);

let fliter_result=products.filter(product=>product.price>=800);
console.log(fliter_result);
