import express from "express";
import web from "./routes/web.js";

const app = express();

//set template engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", web);
app.use("/services", web);
app.use("/contact", web);
app.use("/skill", web);

app.listen(8000, () => {
  console.log("server listening at 8000 okay");
});
