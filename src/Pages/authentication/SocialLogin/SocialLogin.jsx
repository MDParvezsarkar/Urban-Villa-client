import { useNavigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLoading } from "../../../hooks/useLoading"; 
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const { setLoading } = useLoading(); 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    setLoading(true); 
    signInWithGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google Login Failed:", error.message);
        toast.error("Google login failed!");
      })
      .finally(() => setLoading(false)); 
  };

  return (
    <div>
      <div className="divider">or</div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-accent w-full"
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
