import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EmployerDashboard from "../pages/EmployerDashboard";
import JobSeekerDashboard from "../pages/JobSeekerDashboard";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import PostJob from "../pages/PostJob";
import ManageJobs from "../pages/ManageJobs";
import EditJob from "../pages/EditJob";
import Jobs from "../pages/Jobs";
import MyApplications from "../pages/MyApplications";
import ApplicantProfile from "../pages/ApplicantProfile";
import Profile from "../pages/Profile";
import Applicants from "../pages/Applicants";
import JobDetails from "../pages/JobDetails"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/employer/dashboard"
        element={
          <ProtectedRoute allowedRole="employer">
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobseeker/dashboard"
        element={
          <ProtectedRoute allowedRole="jobSeeker">
            <JobSeekerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post-job"
        element={
          <ProtectedRoute allowedRole="employer">
            <PostJob />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage-jobs"
        element={
          <ProtectedRoute allowedRole="employer">
            <ManageJobs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-job/:id"
        element={
          <ProtectedRoute allowedRole="employer">
            <EditJob />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-applications"
        element={
          <ProtectedRoute allowedRole="jobSeeker">
            <MyApplications />
          </ProtectedRoute>
        }
      />
      <Route
        path="/applicant/:id"
        element={
          <ProtectedRoute allowedRole="employer">
            <ApplicantProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs/:jobId/applicants"
        element={
          <ProtectedRoute allowedRole="employer">
            <Applicants />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs/:id"
        element={
          <ProtectedRoute allowedRole="jobSeeker">
            <JobDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
