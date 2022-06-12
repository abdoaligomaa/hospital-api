const express = require("express");
const router = express.Router();
const { createDepartment } = require("../controllers/department");

// api end points

// creat new doctor
router.post("/create", createDepartment);

// read doctor data
router.get("/:id");

// delete doctor
router.delete("/:id");

// update doctor data
router.patch("/:id");

module.exports = router;
