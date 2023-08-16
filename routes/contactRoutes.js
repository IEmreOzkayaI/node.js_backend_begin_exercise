const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  deleteContactById,
  getContactById,
  updateContactById,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContactById);

router.route("/:id").put(updateContactById);

router.route("/:id").delete(deleteContactById);

module.exports = router;

// router.get(("/"),(req, res) => {
//     res.status(200).json({ message: "Get all contacts" });
//   });
