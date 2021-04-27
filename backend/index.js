const express = require("express"),
  app = express(),
  passport = require("passport"),
  port = process.env.PORT || 8080,
  cors = require("cors"),
  cookie = require("cookie");

const bcrypt = require("bcrypt");

const db = require("./database.js");
let users = db.users;

require("./passport.js");

const router = require("express").Router(),
  jwt = require("jsonwebtoken");

app.use("/api", router);
router.use(cors({ origin: "http://localhost:3000", credentials: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log("Login: ", req.body, user, err, info);
    if (err) return next(err);
    if (user) {
        if (req.body.remember == true) {
          time_exp = "7d";
        } 
        else time_exp = "1d";
        const token = jwt.sign(user, db.SECRET, {
          expiresIn: time_exp,
        });

        var decoded = jwt.decode(token);
        let time = new Date(decoded.exp * 1000);
        console.log(new Date(decoded.exp * 1000));
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              maxAge: 60 * 60,
              sameSite: "strict",
              path: "/",
          })
      );
      res.statusCode = 200;
      return res.json({ user, token });
    } else return res.status(422).json(info);
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: -1,
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  return res.json({ message: "Logout successful" });
});

/* GET user profile. */
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.send(req.user);
  }
);

/* GET user admin */
router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
      res.status(200).json({ message: "ADMIN Laundry" });
  }
);

router.post("/register", async (req, res) => {
  try {
    const SALT_ROUND = 10;
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.json({ message: "Cannot register with empty string" });
    if (db.checkExistingUser(username) !== db.NOT_FOUND)
      return res.json({ message: "Duplicated user" });

    let id = users.users.length? users.users[users.users.length - 1].id + 1: 1;
    hash = await bcrypt.hash(password, SALT_ROUND);
    users.users.push({ id, username, password: hash, email });
    res.status(200).json({ message: "Register success" });
  } catch {
    res.status(422).json({ message: "Cannot register" });
  }
});

router.get("/alluser", (req, res) => res.json(db.users.users));

router.get("/", (req, res, next) => {
  res.send("Respond without authentication");
});


  let laundry = {
      list: [
        { "id": 1,"CustomerID": "A001","name": "Sawalee","surname": "Khongyuen","status": "Washing" ,"price": 40 },
        { "id": 2,"CustomerID": "A002","name": "Surawee","surname": "Ruanjan","status": "Spin dryer" ,"price": 80 }]
    }  
  
  router
    .route("/laundry")
    .get((req, res) => {
      res.send(laundry);
    })
    .post((req, res) => {
      console.log(req.body);
      let newCustomer = {};
      newCustomer.id = laundry.list.length ? laundry.list[laundry.list.length - 1].id + 1 : 1;
      newCustomer.CustomerID = req.body.CustomerID;
      newCustomer.name = req.body.name;
      newCustomer.surname= req.body.surname;
      newCustomer.status = req.body.status;
      newCustomer.price= req.body.price;
      laundry = { list: [...laundry.list, newCustomer] };
      res.json(laundry);
    });
  
  router
    .route("/laundry/:customer_ID")
    .get((req, res) => {
      let id = laundry.list.findIndex((item) => +item.id == +req.params.customer_ID)
      res.json(laundry.list[id]);
    })
    .put((req, res) => {
      let id = laundry.list.findIndex((item) => item.id == +req.params.customer_ID);
      laundry.list[id].CustomerID = req.body.CustomerID;
      laundry.list[id].name = req.body.name;
      laundry.list[id].surname = req.body.surname;
      laundry.list[id].status = req.body.status;
      laundry.list[id].price = req.body.price;
      res.json(laundry.list);
    })
    .delete((req, res) => {
      laundry.list = laundry.list.filter((item) => +item.id !== +req.params.customer_ID);
      res.json(laundry.list);
    });

// Error Handler
app.use((err, req, res, next) => {
  let statusCode = err.status || 500;
  res.status(statusCode);
  res.json({
    error: {
      status: statusCode,
      message: err.message,
    },
  });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));