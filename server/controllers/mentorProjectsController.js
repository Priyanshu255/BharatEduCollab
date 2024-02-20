const asyncHandler = require("express-async-handler");
const projectdata = require("../models/mentorProjectsModel");

const getProjects = asyncHandler(async (req, res) => {
  const projects = await projectdata.find();
  res.status(200).json(projects);
});

const createProject = asyncHandler(async (req, res) => {
  console.log("Request body: ", req.body);
  const {
    projectName,
    university,
    domain,
    techUsed,
    teamMembers,
    problem,
    description,
    video,
  } = req.body;
  // if (!name || !email){
  //     res.status(400);
  //     throw new Error("All fields are mandatory");
  // }
  const project = await projectdata.create({
    projectName,
    university,
    domain,
    techUsed,
    teamMembers,
    description,
    problem,
    video,
  });
  res.status(201).json(project);
});

const getProject = asyncHandler(async (req, res) => {
  const project = await projectdata.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }
  res.status(200).json(project);
});

const updateProject = asyncHandler(async (req, res) => {
  const project = await projectdata.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }
  const updatedProject = await projectdata.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProject);
});

const deleteProject = asyncHandler(async (req, res) => {
  const project = await projectdata.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }
  await projectdata.deleteOne();
  res.status(200).json(project);
});

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};

// const tempprojectData = [
//   {
//     // pid: 1,
//     projectName: "MediHealth Platform",
//     university: "MediCaps University",
//     teamMembers: "Aarav, Riya, Ananya",
//     description:
//       "A comprehensive healthcare management system enabling online appointment bookings and medical records storage.",
//     video: "https://youtu.be/H0gGf147YH0?si=oyiY4IpNRxpZkfTN",
//     domain: "Healthcare",
//     techUsed: "Java, MySQL, Spring Boot",
//     problem: "How to improve access to healthcare services and medical records management.",
//   },
//   {
//     // pid: 2,
//     projectName: "FinanceX",
//     university: "IPS College",
//     teamMembers: "Karan, Vivek, Preeti",
//     description:
//       "A financial analytics tool providing insights into stock market trends and investment recommendations.",
//     video: "video2",
//     domain: "Finance",
//     techUsed: "Python, ReactJS, Machine Learning",
//     problem: "How to provide investors with better tools for financial decision-making.",
//   },
//   {
//     // pid: 3,
//     projectName: "EduTech Interactive Learning",
//     university: "IIT Indore",
//     teamMembers: "Sarika, Harsh, Lokesh",
//     description:
//       "An online platform offering interactive courses, real-time doubt solving, and assignments grading.",
//     video: "video3",
//     domain: "Education",
//     techUsed: "JavaScript, Node.js, MongoDB",
//     problem: "How to enhance the online learning experience and support students with their coursework.",
//   },
//   {
//     // pid: 4,
//     projectName: "GreenSustain",
//     university: "VIT Vellore",
//     teamMembers: "Rahul, Meena, Pranav",
//     description:
//       "An environmental initiative promoting sustainability through innovative waste management techniques.",
//     video: "video4",
//     domain: "Environment",
//     techUsed: "IoT, Python, Data Analytics",
//     problem: "How to address environmental sustainability and innovative waste management.",
//   },
//   {
//     // pid: 5,
//     projectName: "RetailX E-commerce",
//     university: "MediCaps University",
//     teamMembers: "Tanya, Abhishek, Divya",
//     description:
//       "A next-gen e-commerce platform with augmented reality-based try-ons and advanced recommendation systems.",
//     video: "video5",
//     domain: "E-commerce",
//     techUsed: "AR, Java, React Native",
//     problem: "How to elevate the online shopping experience and improve product recommendations.",
//   },
//   {
//     // pid: 6,
//     projectName: "ChatMate",
//     university: "IPS College",
//     teamMembers: "Nikhil, Lakshmi, Suresh",
//     description:
//       "A messaging platform with end-to-end encryption ensuring user data safety and privacy.",
//     video: "video6",
//     domain: "Social Media",
//     techUsed: "Java, End-to-End Encryption, Firebase",
//   },
//   {
//     // pid: 7,
//     projectName: "Traveler's Guide",
//     university: "IIT Indore",
//     teamMembers: "Sonia, Manish, Rahul",
//     description:
//       "A platform providing customized travel itineraries and real-time travel updates.",
//     video: "video7",
//     domain: "Travel",
//     techUsed: "Python, ReactJS, Web Scraping",
//   },
//   {
//     // pid: 8,
//     projectName: "Foodie's Delight",
//     university: "VIT Vellore",
//     teamMembers: "Vinay, Prachi, Lata",
//     description:
//       "A food delivery platform with AI-based diet recommendations and real-time tracking.",
//     video: "video8",
//     domain: "FoodTech",
//     techUsed: "Python, AI, Swift",
//   },
//   {
//     // pid: 9,
//     projectName: "WorkFit Task Manager",
//     university: "MediCaps University",
//     teamMembers: "Rohit, Sneha, Vikram",
//     description:
//       "A task management tool with analytics to improve productivity in professional teams.",
//     video: "video9",
//     domain: "Productivity",
//     techUsed: "JavaScript, Electron, SQLite",
//   },
//   {
//     // pid: 10,
//     projectName: "EstateElite",
//     university: "IPS College",
//     teamMembers: "Madhur, Tania, Om",
//     description:
//       "A platform for real estate listings, virtual tours, and mortgage calculations.",
//     video: "video10",
//     domain: "Real Estate",
//     techUsed: "VR, Java, ReactJS",
//   },
  // ... And so on for remaining projects...
// ];

// projectdata.insertMany(tempprojectData);
