import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ManageCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const [successMsg, setSuccessMsg] = useState("");

  // Fetch all coupons
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/coupons`)
      .then((res) => {
        setCoupons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch coupons:", err);
        setLoading(false);
      });
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/coupons`,
        data
      );
      if (res.data.insertedId) {
        setSuccessMsg("✅ Coupon added successfully!");
        reset();
        setCoupons((prev) => [res.data.newCoupon, ...prev]);
      }
    } catch (err) {
      console.error("❌ Failed to add coupon:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎟️ Manage Coupons</h1>

      {/* Coupon Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow space-y-4"
      >
        <input
          {...register("code", { required: true })}
          placeholder="Coupon Code"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("discount", { required: true })}
          placeholder="Discount %"
          type="number"
          className="w-full border p-2 rounded"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Coupon Description"
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Add Coupon
        </button>
        {successMsg && <p className="text-green-600">{successMsg}</p>}
      </form>

      {/* Coupon Table */}
      {loading ? (
        <p className="text-center mt-6">Loading coupons...</p>
      ) : (
        <table className="w-full mt-6 table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Code</th>
              <th className="p-2 border">Discount %</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr key={c._id}>
                <td className="p-2 border text-center">{c.code}</td>
                <td className="p-2 border text-center">{c.discount}</td>
                <td className="p-2 border">{c.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCoupons;
