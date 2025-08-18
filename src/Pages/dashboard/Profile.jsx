import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { useNavigate } from "react-router";
import MoonLoaderComponent from "../Shared/Loader/MoonLoaderComponent";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useAuth(); // make sure this is in your AuthProvider
  const { role, isLoading: roleLoading } = useRole();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    if (!roleLoading && role === "admin") {
      navigate("/dashboard/admin-profile");
    }
  }, [role, roleLoading, navigate]);

  useEffect(() => {
    if (user?.email && role !== "admin") {
      axiosSecure
        .get(`/agreements/user/${user.email}`)
        .then((res) => {
          if (res.data) {
            setAgreement(res.data);
          } else {
            setAgreement(null);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("❌ Failed to load agreement:", err);
          setAgreement(null);
          setLoading(false);
        });
    }
  }, [user, axiosSecure, role]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName, photoURL });
      setIsEditing(false);
      toast.success("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("❌ Failed to update profile.");
    }
  };

  if (roleLoading || loading) {
    return <MoonLoaderComponent />;
  }

  return (
    <div className="text-[var(--color-brand)] dark:text-[var(--color-brand)]">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      {/* Profile Avatar and Edit Icon */}
      <div className="relative mb-4 w-fit">
        <img
          src={user?.photoURL || "https://i.ibb.co/tPZyGv4X/avatar.jpg"}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <button
          onClick={() => setIsEditing(!isEditing)}
          title="Edit Profile"
          className="absolute top-0 right-0 text-lg text-[var(--color-brand)] "
        >
          <FaEdit />
        </button>
      </div>

      {/* Edit Form */}
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-3 mb-6 max-w-sm">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-bordered w-full text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full text-black"
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
          {/* Display Info */}
          <p>
            <strong>Name:</strong> {user?.displayName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>
        </>
      )}

      {/* Agreement Section */}
      <div className="mt-4">
        <p>
          <strong>Agreement Accept Date:</strong>{" "}
          {agreement?.updatedAt ? (
            new Date(agreement.updatedAt).toLocaleDateString()
          ) : (
            <span className="text-gray-400">No agreement yet</span>
          )}
        </p>

        <p>
          <strong>Rented Info:</strong>{" "}
          {agreement ? (
            <>
              Floor - {agreement.floor}, Block - {agreement.block}, Room -{" "}
              {agreement.apartmentNo}
            </>
          ) : (
            <span className="text-gray-400">No rented room info</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Profile;
