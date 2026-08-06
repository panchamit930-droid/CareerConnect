import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InputField from "../common/InputField/InputField";
import Button from "../Button/Button";

import { updateUserThunk } from "../../features/users/userSlice";
import { updateCurrentUser } from "../../features/auth/authSlice";

const EditProfileForm = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.users);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    github: "",
    linkedin: "",
    portfolio: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        fullName: currentUser.fullName || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        location: currentUser.location || "",
        education: currentUser.education || "",
        experience: currentUser.experience || "",
        skills: currentUser.skills || "",
        about: currentUser.about || "",
        github: currentUser.github || "",
        linkedin: currentUser.linkedin || "",
        portfolio: currentUser.portfolio || "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      ...currentUser,
      ...formData,
    };

    const result = await dispatch(
      updateUserThunk({
        id: currentUser.id,
        userData: updatedUser,
      }),
    );

    if (updateUserThunk.fulfilled.match(result)) {
      alert("Profile updated successfully!");
      dispatch(updateCurrentUser(result.payload));
    } 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-5"
    >
      <InputField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <InputField label="Email" name="email" value={formData.email} disabled />

      <InputField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <InputField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

      <InputField
        label="Education"
        name="education"
        value={formData.education}
        onChange={handleChange}
      />

      <InputField
        label="Experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <InputField
        label="Skills"
        name="skills"
        value={formData.skills}
        placeholder="React, Redux, JavaScript..."
        onChange={handleChange}
      />

      <div>
        <label className="block mb-2 font-medium">About</label>

        <textarea
          name="about"
          rows="4"
          value={formData.about}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 dark:bg-gray-700"
        />
      </div>

      <InputField
        label="GitHub"
        name="github"
        value={formData.github}
        onChange={handleChange}
      />

      <InputField
        label="LinkedIn"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
      />

      <InputField
        label="Portfolio"
        name="portfolio"
        value={formData.portfolio}
        onChange={handleChange}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  );
};

export default EditProfileForm;
