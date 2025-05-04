const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./database/database");
const perguntaModel = require("./database/Pergunta");

// db
conn
  .authenticate()
  .then(() => {
    console.log("conexão feita com o banco de dados");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

// usar ejs com view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// isso decofica os dados do form e ler os dados json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar", {});
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send("recebido: " + titulo + " " + descricao);
});

app.listen(8080, () => {
  console.log("ok");
});
