import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import useAxios from "../../../../hooks/useAxios";
import { Link } from "react-router";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const axiosInstance = useAxios();
  const [uploading, setUploading] = useState(false);

  const [profilePic, setProfilePic] = useState("");

  const handleImageUpload = async (e) => {
    setUploading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const uploadURL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;
    try {
      const res = await axios.post(uploadURL, formData);
      setProfilePic(res.data.data.url);
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const firebaseUser = result.user;
      console.log(firebaseUser)

      // Update Firebase profile
      await updateUserProfile({
        displayName: `${data.firstName} ${data.lastName}`,
        photoURL: profilePic,
      });

      // Send user to backend
      const userInfo = {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        role: "user",
        photoURL: profilePic,
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      const res = await axiosInstance.post("/users", userInfo);
      console.log("User saved to DB", res.data);
    } catch (error) {
      console.error("Register Error", error);
    }
  };

  return (
    <div className="card shadow-xl bg-base-200 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">First Name</label>
            <input
              {...register("firstName", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="label">Last Name</label>
            <input
              {...register("lastName")}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div>
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: "Required" })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Required",
              minLength: {
                value: 6,
                message: "Min 6 characters",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="label">Profile Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full"
          />
          {uploading && <p className="text-blue-500">Uploading...</p>}
        </div>

        <button type="submit" className="btn btn-primary w-full mt-2">
          Register
        </button>

        <SocialLogin />

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
