const express = require("express");
const app = express();
const port = 3000;

// ROute GET
// app.get("/", (req, res) => {
//   res.send("Hello GET request");
// });

// Middleware untuk parsing body request
app.use(express.json());


app.post("/submit", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

// Response text 
app.get("/text", (req, res) => {
  res.send("Ini adalah response text");
});

// Response HTML 
app.get("/html", (req, res) => {
  res.send("<h1>Hello WORLD</h1>");
});

// // Response json 
app.get("/json", (req, res) => {
  res.send({ message: "Hello Motherfucka" });
});


// Using static file in public folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
