const db = require("../config/db");

//Get All Coffees
const getCoffees = async function (req, res) {
  try {
    res.setHeader("Content-Type", "application/json");

    db.query(
      `
    SELECT 
      * FROM coffees`,
      function (error, results, fields) {
        if (error) throw error;
        return res
          .status(200)
          .send({ error: false, message: "coffees list", data: results });
      }
    );
  } catch {
    return res.status(401).send();
  }
};

//Get Coffee by Id
const getCoffeeById = async function (req, res) {
  try {
    res.setHeader("Content-Type", "application/json");

    var coffeeId = Number(req.params.coffeeId);

    db.query(
      `
    SELECT 
      *
    FROM coffees 
    WHERE coffeeId=?`,
    coffeeId.toString(),
      function (error, results, fields) {
        if (error) throw error;
        return res.send({
          error: false,
          message: "coffee id =" + coffeeId.toString(),
          data: results,
        });
      }
    );
  } catch {
    return res.status(401).send();
  }
};


module.exports = {
  getCoffees,
  getCoffeeById,
};
