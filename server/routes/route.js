const express = require("express");
const app = express();
const addController = require("../controller/addController")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("welcome to crud app")
})

router.post("/add", addController.add)

router.get("/getall", addController.getAll)

router.get("/getuser/:userid", addController.getUser)

router.put("/updateuser/:userid", addController.updateUser)

router.delete("/deleteuser/:userid", addController.deleteUser)


module.exports = router;