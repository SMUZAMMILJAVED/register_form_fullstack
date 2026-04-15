const Student =require("../models/Student.js") ;

// @desc Register student
// @route POST /api/students
exports.registerStudent = async (req, res) => {
  try {
    const { name, studentId, email, phone, course } = req.body;

    if (!name || !studentId || !course) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // Check duplicate
    const existingStudent = await Student.findOne({ studentId });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const student = await Student.create({
      name,
      studentId,
      email,
      phone,
      course,
    });

    res.status(201).json({
      message: "Student registered successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};