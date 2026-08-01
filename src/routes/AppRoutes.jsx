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
    </Routes>
  );
};

export default AppRoutes;
