const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const posts = [
  {
    username: "apna_collage",
    contant: "apna collage have best web development couses",
  },
  {
    username: "Tousif",
    contant: "Hii! i'm learning web development with apna collage",
  },
  {
    username: "Zain_123",
    contant: "I have a laptop which is very low end laptop am i able to code",
  },
];

app.get("/posts", (req, res) => {
  res.render("landing_page", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  let { username, contant } = req.body;
  posts.push({ username, contant });
  res.redirect("/posts");
});
app.listen(port, () => {
  console.log(`Port ${port} has connected`);
});
