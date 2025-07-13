

import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const AdminProfile = () => {
  const { user } = useAuth();
  const { role } = useRole();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">👤 Admin Profile</h2>
      <p>
        <span className="font-bold">Name:</span> {user?.displayName || "N/A"}
      </p>
      <p>
        <span className="font-bold">Email:</span> {user?.email}
      </p>
      <p>
        <span className="font-bold">Role:</span> {role}
      </p>
    </div>
  );
};

export default AdminProfile;
