const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


//@desc Get all contact
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id:req.user.id});
  console.log(req.user);
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("Please provide name and email");
  }
  const contact = await Contact.create({
    name,
    email,
    user_id:req.user.id
  });
  res.status(201).json({ message: "Create Contact" });
});
//@desc Get contact by id
//@route GET /api/contacts/:id
//@access private
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access private
const updateContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User don't have permission to update other user contact");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});
//@desc Delete contact by id
//@route DELETE /api/contacts/:id
//@access private
const deleteContactById = asyncHandler(async (req, res) => {
 const contact = await Contact.findById(req.params.id);
 if(contact.user_id.toString() !== req.user.id){
  res.status(403);
  throw new Error("User don't have permission to update other user contact");
}
  await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
