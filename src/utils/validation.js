export const validateJobSeeker = (formData) => {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password should be at least 6 characters";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const validateEmployer = (formData) => {
  const errors = {};

  if (!formData.companyName.trim()) {
    errors.companyName = "Company name is required";
  }

  if (!formData.contactPerson.trim()) {
    errors.contactPerson = "Contact person is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const validateLogin = (formData) => {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateJob = (formData) => {
  const errors = {};

  if (!formData.title.trim()) errors.title = "Job title is required";
  if (!formData.location.trim()) errors.location = "Location is required";
  if (!formData.jobType.trim()) errors.jobType = "Job type is required";
  if (!formData.salary.trim()) errors.salary = "Salary is required";
  if (!formData.description.trim()) errors.description = "Description is required";

  return errors;
};