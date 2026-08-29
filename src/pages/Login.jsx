import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/common/InputField/InputField";
import Button from "../components/Button/Button";
import { loginUserThunk, clearError } from "../features/auth/authSlice";
import { validateLogin } from "../utils/validation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, currentUser, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const validationErrors = validateLogin(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = await dispatch(loginUserThunk(formData));

    if (loginUserThunk.fulfilled.match(result)) {
      toast.success("Login successful!");

      if (result.payload.role === "employer") {
        navigate("/employer/dashboard");
      } else {
        navigate("/jobseeker/dashboard");
      }
    } else {
      toast.error(result.payload || "Invalid email or password.");
    }
  };

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.role === "employer") {
        navigate("/employer/dashboard");
      } else {
        navigate("/jobseeker/dashboard");
      }
    }
  }, [isAuthenticated, currentUser, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <section className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Login to your CareerConnect account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
            />

            {error && (
              <p className="text-red-500 text-center text-sm">{error}</p>
            )}

            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Register
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
