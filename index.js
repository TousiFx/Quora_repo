const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const posts = [
  {
    id: uuidv4(),
    username: "apna_collage",
    contant: "apna collage have best web development couses",
  },
  {
    id: uuidv4(),
    username: "Tousif",
    contant: "Hii! i'm learning web development with apna collage",
  },
  {
    id: uuidv4(),
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
  let id = uuidv4();
  posts.push({ id, username, contant });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show", { post });
});
app.patch("/posts/:id", (req, res) => {
  let newContant = req.body.contant;
  console.log(newContant);
  res.send("post has been patched");
});
app.listen(port, () => {
  console.log(`Port ${port} has connected`);
});
