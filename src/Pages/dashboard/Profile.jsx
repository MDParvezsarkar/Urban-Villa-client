import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [agreement, setAgreement] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/agreements/user/${user.email}`)
        .then((res) => setAgreement(res.data))
        .catch((err) => console.error("❌ Failed to load agreement:", err));
    }
  }, [user, axiosSecure]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <div>
        <img
          src={user?.photoURL || "https://i.ibb.co/2M3Lz4p/avatar.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <p>Name: {user?.displayName || "N/A"}</p>
        <p>Email: {user?.email || "N/A"}</p>
        <p>
          Agreement Accept Date:{" "}
          {agreement?.updatedAt
            ? new Date(agreement.updatedAt).toLocaleDateString()
            : "None"}
        </p>

        <p>
          Rented Info:{" "}
          {agreement
            ? `Floor - ${agreement.floor}, Block - ${agreement.block}, Room - ${agreement.apartmentNo}`
            : "Floor - None, Block - None, Room - None"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
