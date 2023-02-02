const express = require("express");
const path = require("path");

const routes = require("./routes");
const mysqldb = require("./database");
//const { response } = require("express");

let app = express();

const fs = require("fs");

app.set("port", process.env.PORT || 5000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.use(express.static(path.join(__dirname, "/public")));
app.listen(app.get("port"), function () {
  console.log("Server is started on port " + app.get("port"));
  console.log("Server Address is: http://localhost:5000/");
});

app.get("/faq", function (req, res) {

  mysqldb.query("SELECT * FROM questions", (error, results) => {
    if (error) {
      throw error;
    } else {
      let data = {
        one: results[0].question,
        two: results[1].question,
        thr: results[2].question,
      };

      res.render("data", { data: data });
    }
  });
})
