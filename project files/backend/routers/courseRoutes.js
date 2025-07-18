// backend/routes/courseRoutes.js
const express = require('express');
const router = express.Router();

router.get('/getallcourses', (req, res) => {
  const courses = [
    {
      _id: "1",
      title: "Full Stack Web Development",
      description: "Learn MERN stack from scratch",
      price: 499,
    },
    {
      _id: "2",
      title: "Data Structures & Algorithms",
      description: "Master DSA for interviews",
      price: 299,
    }
  ];

  res.status(200).json({ success: true, courses });
});

module.exports = router;

