import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

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
        <p>Agreement Accept Date: None</p>
        <p>Rented Info: Floor - None, Block - None, Room - None</p>
      </div>
    </div>
  );
};

export default Profile;
