const uniqid = require("uniqid")
const mysql = require("mysql");
let obj = {};

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});

obj.add = async (req, res) => {
    const { name, email, phone } = req.body;
    const sqlInsert = "INSERT INTO user (ID,NAME,EMAIL,PHONE) VALUES (?,?,?,?)";
    let data = [uniqid(), name, email, phone]
    db.query(sqlInsert, data, (err, result) => {
        res.status(200).json(result)
    });
}

obj.getAll = async (req, res) => {
    const sql = "SELECT * FROM user"
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json({ data: result })
    })
}

obj.getUser = async (req, res) => {
    const sql = `SELECT * from user WHERE user.ID= "${req.params.userid}"`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json({ data: result })
    })
}

obj.updateUser = async (req, res) => {
    const { name, email, phone } = req.body
    const sql = `UPDATE user SET NAME="${name}",EMAIL="${email}",PHONE="${phone}" WHERE user.ID= "${req.params.userid}"`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json({ data: result })
    })
}

obj.deleteUser = async (req, res) => {
    const sql = `DELETE FROM user WHERE user.ID= "${req.params.userid}"`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json({ data: result })
    })
}
module.exports = obj;