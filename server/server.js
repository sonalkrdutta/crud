const express = require("express");
const app = express();

const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes/route")
const port = 3001;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);


app.get("/", (req, res) => {
    res.send("hello word");
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})