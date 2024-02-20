const asyncHandler = require("express-async-handler");
const universitydata = require("../models/universityModel");

const getuniversities = asyncHandler(async (req, res) => {
  const universities = await universitydata.find();
  res.status(200).json(universities);
});

const createUniversity = asyncHandler(async (req, res) => {
  console.log("Request body: ", req.body);
  const {
    name,
    email,
    contact,
    password,
    proUploaded,
    proAccepted,
    proPending,
  } = req.body;
  // if (!name || !email){
  //     res.status(400);
  //     throw new Error("All fields are mandatory");
  // }
  const university = await universitydata.create({
    name,
    email,
    contact,
    password,
    proUploaded,
    proAccepted,
    proPending,
  });
  res.status(201).json(university);
});

const getUniversity = asyncHandler(async (req, res) => {
  const university = await universitydata.findById(req.params.id);
  if (!university) {
    res.status(400);
    throw new Error("university not found");
  }
  res.status(200).json(university);
});

const updateUniversity = asyncHandler(async (req, res) => {
  const university = await universitydata.findById(req.params.id);
  if (!university) {
    res.status(400);
    throw new Error("university not found");
  }
  const updatedUniversity = await universitydata.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedUniversity);
});

const deleteUniversity = asyncHandler(async (req, res) => {
  const university = await universitydata.findById(req.params.id);
  if (!university) {
    res.status(400);
    throw new Error("project not found");
  }
  await universitydata.deleteOne();
  res.status(200).json(university);
});

module.exports = {
  getuniversities,
  createUniversity,
  getUniversity,
  updateUniversity,
  deleteUniversity,
};

// const universitiesData = [
//   {
//     name: "MediCaps University",
//     email: "contact@medicaps.edu",
//     contact: "+911234567890",
//     password: "hashedPassword1",
//     uploaded: 3,
//     accepted: 3,
//     pending: 2,
//   },
//   {
//     name: "IPS College",
//     email: "admin@ips.edu",
//     contact: "+919876543210",
//     password: "hashedPassword2",
//     uploaded: 3,
//     accepted: 3,
//     pending: 2,
//   },
//   // ... Following the same structure for four more universities
//   {
//     name: "IIT Indore",
//     email: "inquiry@iitindore.edu",
//     contact: "+912345678901",
//     password: "hashedPassword3",
//     uploaded: 2,
//     accepted: 2,
//     pending: 2,
//   },
//   {
//     name: "VIT Vellore",
//     email: "info@vitvellore.edu",
//     contact: "+914567890123",
//     password: "hashedPassword4",
//     uploaded: 2,
//     accepted: 2,
//     pending: 2,
//   },
// ];

// universitydata.insertMany(universitiesData);
