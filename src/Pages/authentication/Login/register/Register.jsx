import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import SocialLogin from "../../SocialLogin/SocialLogin";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
const { createUser } = useAuth();

const onSubmit = (data) => {
  createUser(data.email, data.password)
    .then((result) => {
      console.log("Registered User:", result.user);
      // Optionally update profile, toast here
    })
    .catch((error) => {
      console.error("Registration Error:", error.message);
    });
};

  return (
    <div className="card shadow-xl bg-base-200 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-200 p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        {/* First Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">First Name</span>
          </label>
          <input
            type="text"
            placeholder="John"
            {...register("firstName", {
              required: "First name is required",
              maxLength: {
                value: 20,
                message: "Max length is 20 characters",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.firstName && (
            <span className="text-error text-sm mt-1">
              {errors.firstName.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Doe"
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters allowed",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.lastName && (
            <span className="text-error text-sm mt-1">
              {errors.lastName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <span className="text-error text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Must include uppercase, lowercase, number, and special character",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.password && (
            <span className="text-error text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-2">
          Create Account
        </button>
          <SocialLogin />

        {/* Login Link */}
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
