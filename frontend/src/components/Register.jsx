import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    phone: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const courses = [
    "Computer Science",
    "Engineering",
    "Business",
    "Medicine",
    "Arts",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.studentId.trim()) return "Student ID is required";
    if (!formData.course) return "Course is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      return "Invalid email format";
    if (formData.phone && formData.phone.length < 10)
      return "Phone must be at least 10 digits";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://register-form-fullstack.vercel.app/api/students",
        formData
      );

      toast.success(res.data.message || "Registered Successfully 🎉");

      // Reset form
      setFormData({
        name: "",
        studentId: "",
        email: "",
        phone: "",
        course: "",
      });

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6 md:p-10">
        
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />

          {/* Student ID */}
          <input
            type="text"
            name="studentId"
            placeholder="Student ID *"
            value={formData.studentId}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />

          {/* Course */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" className="text-black">Select Course *</option>
            {courses.map((course, i) => (
              <option key={i} value={course} className="text-black">
                {course}
              </option>
            ))}
          </select>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-blue-500 to-indigo-600 
              transition duration-300 
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}
            `}
          >
            {loading ? "Submitting..." : "Register"}
          </button>

        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default StudentRegistrationForm;