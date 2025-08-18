import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdCampaign, MdIcecream } from "react-icons/md";

const MakeAnnouncement = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/announcements", data);
      if (res.data.insertedId) {
        Swal.fire("✅ Success!", "Announcement added!", "success");
        reset();
      }
    } catch (error) {
      console.error("❌ Failed to make announcement", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="text-[var(--color-brand)]">
      <h2 className="text-2xl font-bold mb-4 flex gap-3 items-center">
        <MdCampaign className="text-5xl" /> Make Announcement
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter announcement title"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border px-4 py-2 rounded"
            rows="4"
            placeholder="Enter announcement details"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[var(--color-brand)] text-white px-6 py-2 rounded hover:bg-secondary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
