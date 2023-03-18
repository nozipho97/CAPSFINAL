//import database connection from the config folder
const db = require("../config");
//import bcypt module
const { hash, compare, hashSync } = require("bcrypt");
//
const { createToken } = require("../middleware/AuthenticatedUser.js");

//User Class
class User {
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const strQry = `SELECT userID, firstName, lastName, gender, emailAdd, userPass, userRole, userProfile
            FROM users
            WHERE emailAdd ='${emailAdd}';
            `;
    db.query(strQry, async (err, data) => {
      
      if (!data || data == null) {
        res.status(401).json({ err: "Please enter a correct email address" });
      } else {
        await compare(userPass, data[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          //create token
          const jwToken = createToken({
            emailAdd,
            userPass,
          });
          //save your token
          res.cookie("LegitUser", jwToken, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.status(200).json({
              msg: "You are logged in",
              jwToken,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "Incorrect Password, please enter a correct password.",
            });
          }
        });
      }
    });
  }

  fetchUsers(req, res) {
    const strQry = `
            SELECT  
            userID,
            firstName,
            lastName,
            gender,
            emailAdd,
            userRole,
            userProfile,
            joinDate,
            cellPhoneNumber
            FROM users;
            `;
    db.query(strQry, (err, data) => {
      if (err) throw err;
      else res.status(200).json({ results: data });
    });
  }
  // single user
  fetchUser(req, res) {
    const strQry = `
            SELECT  
            userID,firstName,lastName,gender,emailAdd ,userRole,userProfile
            FROM users
            WHERE userID =?;
            `;
    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      else res.status(200).json({ result: data });
    });
  }

  async createUser(req, res) {
    // Payload
    let detail = req.body;
    // Hashing user password
    detail.userPass = await hash(detail.userPass, 15);
    // This information will be used for authentication.
    let user = {
      emailAdd: detail.emailAdd,
      userPass: detail.userPass,
    };
    // sql query
    const strQry = `INSERT INTO users
        SET ?;`;
    db.query(strQry, [detail], (err) => {
      if (err) {
        res.status(401).json({ err });
      } else {
        // Create a token
        const jwToken = createToken(user);
        // This token will be saved in the cookie.
        // The duration is in milliseconds.
        res.cookie("LegitUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "You have successfully registered." });
      }
    });
  }
  updateUser(req, res) {
    let data = req.body;
    if (data.userPass !== null || data.userPass !== undefined)
      data.userPass = hashSync(data.userPass, 15);
    const strQry = `
        UPDATE users
        SET ?
    WHERE userID = ?;
    `;
    //db
    db.query(strQry, [data, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({
        msg: "A row was affected",
      });
    });
  }
  deleteUser(req, res) {
    const strQry = `
    DELETE FROM users
    WHERE userID = ?;
    `;
    //db
    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({
        msg: "A record was removed from a database",
      });
    });
  }
}

//product
class Product {
  fetchProducts(req, res) {
    const strQry = `SELECT prodID, prodName, prodDescription, category, prodPrice, prodQuantity, imgURL
        FROM Products;`;
    db.query(strQry, (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  fetchProduct(req, res) {
    const strQry = `SELECT prodID, prodName, prodDescription, category, prodPrice, prodQuantity, imgURL
        FROM Products
        WHERE prodID = ?;`;
    db.query(strQry, [req.params.id], (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  addProduct(req, res) {
    const strQry = `
        INSERT INTO Products
        SET ?;
        `;
    db.query(strQry, [req.body], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to insert a new record." });
      } else {
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  updateProduct(req, res) {
    const strQry = `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `;
    db.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to update a record." });
      } else {
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
  deleteProduct(req, res) {
    const strQry = `
        DELETE FROM Products
        WHERE  prodID = ?;
        `;
    db.query(strQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

//CART
class Cart {
  fetchProduct(req, res) {
    const strQry = `SELECT prodID, prodName, prodDescription, prodPrice, prodQuantity, imgURL
        FROM Products
        WHERE prodID = ?;`;
    db.query(strQry, [req.params.id], (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  addProduct(req, res) {
    const strQry = `
        INSERT INTO Cart
        SET ?;
        `;
    db.query(strQry, [req.body], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to insert a new record." });
      } else {
        res.status(200).json({ msg: "Product added to cart" });
      }
    });
  }
  deleteProduct(req, res) {
    const strQry = `
        DELETE FROM Cart
        WHERE  prodID = ?;
        `;
    db.query(strQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

//search

// Export classes
module.exports = {
  User,
  Product,
  Cart,
};
