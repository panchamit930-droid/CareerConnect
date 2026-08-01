import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputField from "../common/InputField/InputField";
import Button from "../Button/Button";

import { createJobThunk, updateJobThunk } from "../../features/jobs/jobsSlice";
import { validateJob } from "../../utils/validation";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.jobs);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "",
    salary: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const selectedJob = jobs.find((job) => job.id === Number(id));

      if (selectedJob) {
        setFormData({
          title: selectedJob.title,
          location: selectedJob.location,
          jobType: selectedJob.jobType,
          salary: selectedJob.salary,
          description: selectedJob.description,
        });
      }
    }
  }, [id, jobs]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateJob(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (id) {
      await dispatch(
        updateJobThunk({
          id: Number(id),

          ...formData,

          companyName: currentUser.companyName,

          employerId: currentUser.id,

          postedBy: currentUser.contactPerson,
        }),
      );

      alert("Job updated successfully!");

      navigate("/manage-jobs");
    } else {
      await dispatch(
        createJobThunk({
          ...formData,

          companyName: currentUser.companyName,

          employerId: currentUser.id,

          postedBy: currentUser.contactPerson,
        }),
      );

      alert("Job posted successfully!");
    }

    setFormData({
      title: "",
      location: "",
      jobType: "",
      salary: "",
      description: "",
    });

    alert("Job posted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow rounded-xl p-8 space-y-5"
    >
      <InputField
        label="Job Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
      />

      <InputField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        error={errors.location}
      />

      <div>
        <label className="block mb-2 font-medium">Job Type</label>

        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="">Select Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        {errors.jobType && (
          <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>
        )}
      </div>

      <InputField
        label="Salary"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        error={errors.salary}
      />

      <div>
        <label className="block mb-2 font-medium">Description</label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : id ? "Update Job" : "Post Job"}
      </Button>
    </form>
  );
};

export default JobForm;
