let name = "books";
let phoneNumber = 87777585621;
let products = [
  {
    productName: "book",
    name: "Garay Potrer",
    category: "fantastica",
    price: 3000,
    stock: 24,
  },
  {
    productName: "book",
    name: "Abai jolu",
    category: "tvoshiski",
    price: 3000,
    stock: 25,
  },
  {
    productName: "book",
    name: "html,css yirenu kitabi",
    category: " proramironia",
    price: 3000,
    stock: 26,
  },
  {
    productName: "book",
    name: "js kitabi",
    category: "proramironia",
    price: 3000,
    stock: 29,
  },
  {
    productName: "book",
    name: "c++ kitabi",
    category: "proramironia",
    price: 3000,
    stock: 22,
  },
];

//////////////////2
function change() {
  changeShopName = prompt("Дүкеннің атауын жанартыныз");
  return (name = changeShopName);
}

console.log(change());
