const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.get("/", (req, res) => {
  res.redirect("home");
});


app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/emergency", (req, res) => {
  res.render("emergency");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
