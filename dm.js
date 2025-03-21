const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "Cà phê đen", price: 20000 },
  { id: 2, name: "Cà phê sữa", price: 25000 },
];

// Lấy danh sách sản phẩm
app.get("/products", (req, res) => {
  res.json(products);
});

// Thêm sản phẩm mới
app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Chạy server
app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
