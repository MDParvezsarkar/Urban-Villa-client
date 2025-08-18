import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SendNoticeButton from "../../../components/Admin/SendNoticeButton";
import Loader from "../../Shared/Loader/Loader";
import { FaUserCheck, FaEdit } from "react-icons/fa";

const AdminProfile = () => {
  const { user, updateUserProfile } = useAuth(); // Make sure updateUserProfile is exposed in your provider
  const { role } = useRole();
  const axiosSecure = useAxiosSecure();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName, photoURL });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="text-[var(--color-brand)] dark:text-[var(--color-brand)]">
      <h2 className="text-2xl font-semibold mb-4 flex gap-3 items-center">
        <FaUserCheck className="text-3xl" /> Admin Profile
      </h2>

      <div className="relative">
        <img
          src={user?.photoURL || "https://i.ibb.co/2K9M3pZ/default-avatar.png"}
          alt="Admin Avatar"
          className="w-20 h-20 rounded-full mb-2"
        />
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="absolute top-0 right-0 text-2xl text-[var(--color-brand)] hover:shadow-2xl"
          title="Edit Profile"
        >
          <FaEdit />
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-2 mb-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-bordered w-full max-w-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full max-w-sm text-black"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[var(--color-brand)] text-white"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {user?.displayName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
        </>
      )}

      <hr className="my-4" />

      <h3 className="text-xl font-semibold text-[var(--color-brand)]">Stats</h3>
      <p>
        <strong>Total Rooms:</strong> {stats.totalRooms}
      </p>
      <p>
        <strong>Available Rooms (%):</strong> {stats.availablePercentage}%
      </p>
      <p>
        <strong>Unavailable Rooms (%):</strong> {stats.agreedPercentage}%
      </p>
      <p>
        <strong>Total Users:</strong> {stats.totalUsers}
      </p>
      <p>
        <strong>Total Members:</strong> {stats.totalMembers}
      </p>

      <SendNoticeButton />
    </div>
  );
};

export default AdminProfile;
