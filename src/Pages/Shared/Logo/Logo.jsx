// Logo.jsx
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router";


const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-secondary text-xl font-bold"
    >
      <FaBuilding className="text-secondary" size={32} />
      <span>UrbanVilla</span>
    </Link>
  );
};

export default Logo;
