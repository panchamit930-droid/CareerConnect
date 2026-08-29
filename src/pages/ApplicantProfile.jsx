import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import ApplicantProfileCard from "../components/Applications/ApplicantProfileCard";
import Spinner from "../components/common/Loader";

import {
  getUserByIdThunk,
  clearSelectedUser,
} from "../features/users/userSlice";

const ApplicantProfile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { selectedUser, loading } = useSelector(
    (state) => state.users,
  );

  useEffect(() => {
    dispatch(getUserByIdThunk(id));

    return () => {
      dispatch(clearSelectedUser());
    };
  }, [dispatch, id]);

  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Applicant Profile
          </h1>

          <p className="mt-2 mb-8 text-gray-600 dark:text-gray-400">
            View the applicant's personal information, qualifications, and
            professional details.
          </p>

          {loading ? (
            <div className="flex justify-center py-20">
             <Spinner text="Loading profile..." />
            </div>
          ) : (
            <ApplicantProfileCard user={selectedUser} />
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicantProfile;