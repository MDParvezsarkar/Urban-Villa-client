import { useNavigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
      signInWithGoogle()
        .then((result) => {
          console.log("Google Login Success:", result.user);
          toast.success("Logged in with Google!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("Google Login Failed:", error.message);
        });
    };
      
  return (
    <div>
      <div className="divider">or</div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-accent w-full"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
