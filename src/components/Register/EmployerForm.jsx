import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import InputField from "../common/InputField/InputField";
import Button from "../Button/Button";

import { validateEmployer } from "../../utils/validation";
import { registerUserThunk } from "../../features/auth/authSlice";

const EmployerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
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

    const validationErrors = validateEmployer(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { confirmPassword, ...userData } = formData;

    const result = await dispatch(
      registerUserThunk({
        ...userData,
        role: "employer",
      })
    );

    if (registerUserThunk.fulfilled.match(result)) {
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    }
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-5">

        <InputField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter company name"
          error={errors.companyName}
        />

        <InputField
          label="Contact Person"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          placeholder="Enter contact person"
          error={errors.contactPerson}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter company email"
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          error={errors.confirmPassword}
        />

        {error && (
          <p className="text-red-500 text-center">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="text-center mt-6">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-600">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default EmployerForm;