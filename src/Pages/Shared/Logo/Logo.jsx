
import { Link } from "react-router";

const Logo = ({ color }) => {

  return (
    <Link
      to="/"
      className={`flex items-center gap-2 bg-[var(--color-brand-lite)] rounded-full w-20 h-20 justify-center text-xl font-bold ${color}`}
    >
      <img
        src="https://i.ibb.co.com/nsLvyRT8/urban-villa-high-resolution-logo-transparent.png"
        alt="logo"
        width={60}
        height={60}
      />
    </Link>
  );
};

export default Logo;