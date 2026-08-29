import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputField from "../common/InputField/InputField";
import Button from "../Button/Button";

import { createJobThunk, updateJobThunk } from "../../features/jobs/jobsSlice";
import { validateJob } from "../../utils/validation";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    experience: "",
    vacancies: "",
    skills: "",
    responsibilities: "",
    requirements: "",
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
          experience: selectedJob.experience || "",
          vacancies: selectedJob.vacancies || "",
          skills: Array.isArray(selectedJob.skills)
            ? selectedJob.skills.join(", ")
            : selectedJob.skills || "",
          responsibilities: selectedJob.responsibilities || "",
          requirements: selectedJob.requirements || "",
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

    const jobData = {
      ...formData,
      vacancies: Number(formData.vacancies),
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    if (id) {
      await dispatch(
        updateJobThunk({
          id: Number(id),

          ...jobData,

          companyName: currentUser.companyName,

          employerId: currentUser.id,

          postedBy: currentUser.contactPerson,
        }),
      );

      toast.success("Job updated successfully!");

      navigate("/manage-jobs");
    } else {
      await dispatch(
        createJobThunk({
          ...jobData,

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
      experience: "",
      vacancies: "",
      skills: "",
      responsibilities: "",
      requirements: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 space-y-5"
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
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Job Type
        </label>

        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="
w-full
border
border-gray-300
dark:border-gray-600
rounded-lg
px-4
py-3
bg-white
dark:bg-gray-700
text-gray-900
dark:text-white
focus:ring-2
focus:ring-blue-500
focus:outline-none
"
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

      <InputField
        label="Experience Required"
        name="experience"
        value={formData.experience}
        placeholder="e.g. 2+ Years"
        onChange={handleChange}
        error={errors.experience}
      />

      <InputField
        label="Vacancies"
        type="number"
        name="vacancies"
        value={formData.vacancies}
        placeholder="e.g. 3"
        onChange={handleChange}
        error={errors.vacancies}
      />

      <InputField
        label="Skills Required"
        name="skills"
        value={formData.skills}
        placeholder="React, Redux, JavaScript"
        onChange={handleChange}
        error={errors.skills}
      />

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Responsibilities
        </label>

        <textarea
          rows="4"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          className="
w-full
border
border-gray-300
dark:border-gray-600
rounded-lg
px-4
py-3
bg-white
dark:bg-gray-700
text-gray-900
dark:text-white
placeholder-gray-400
dark:placeholder-gray-500
focus:ring-2
focus:ring-blue-500
focus:outline-none
"
        />

        {errors.responsibilities && (
          <p className="text-red-500 text-sm mt-1">{errors.responsibilities}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Requirements
        </label>

        <textarea
          rows="4"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="
w-full
border
border-gray-300
dark:border-gray-600
rounded-lg
px-4
py-3
bg-white
dark:bg-gray-700
text-gray-900
dark:text-white
placeholder-gray-400
dark:placeholder-gray-500
focus:ring-2
focus:ring-blue-500
focus:outline-none
"
        />

        {errors.requirements && (
          <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="
w-full
border
border-gray-300
dark:border-gray-600
rounded-lg
px-4
py-3
bg-white
dark:bg-gray-700
text-gray-900
dark:text-white
placeholder-gray-400
dark:placeholder-gray-500
focus:ring-2
focus:ring-blue-500
focus:outline-none
"
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
