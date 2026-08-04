import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import ApplicantProfileCard from "../components/Applications/ApplicantProfileCard";

import {
  getUserByIdThunk,
  clearSelectedUser,
} from "../features/users/userSlice";

const ApplicantProfile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { selectedUser, loading } = useSelector(
    (state) => state.users
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

      <div className="max-w-5xl mx-auto px-6 py-8">

        <h1 className="text-3xl font-bold mb-8">
          Applicant Profile
        </h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <ApplicantProfileCard user={selectedUser} />
        )}

      </div>
    </>
  );
};

export default ApplicantProfile;