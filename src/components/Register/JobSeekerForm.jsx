import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUserThunk } from "../../features/auth/authSlice";
import InputField from "../common/InputField/InputField";
import Button from "../Button/Button";
import { validateJobSeeker } from "../../utils/validation";

const JobSeekerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const validationErrors = validateJobSeeker(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Remove confirmPassword before saving
    const { confirmPassword, ...userData } = formData;

    const resultAction = await dispatch(
      registerUserThunk({
        ...userData,
        role: "jobSeeker",
      }),
    );

    if (registerUserThunk.fulfilled.match(resultAction)) {
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      toast.success("Registration successful!");
      navigate("/login");
    } else {
      toast.error(resultAction.payload || "Registration failed!");
    }
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          placeholder="Enter your full name"
          onChange={handleChange}
          error={errors.fullName}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handleChange}
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {/* Redux Error */}
        {error && <p className="text-center text-red-500 text-sm">{error}</p>}
        
        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
        Already have an account?{" "}
        <NavLink
          to="/login"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition"
        >
          Login
        </NavLink>
      </p>

      
    </div>
  );
};

export default JobSeekerForm;
