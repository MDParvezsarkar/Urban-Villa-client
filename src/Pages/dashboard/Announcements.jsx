import { useEffect, useState } from "react";
import axios from "axios";
import { MdCampaign, MdOutlineCampaign } from "react-icons/md";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/announcements`).then((res) => {
      setAnnouncements(res.data);
    });
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl text-[var(--color-brand)] font-bold mb-4 flex gap-3 items-center">
        Announcements <MdOutlineCampaign className="text-4xl" />
      </h1>
      <ul className="space-y-3">
        {announcements.length === 0 && (
          <p className="text-[var(--color-brand)]">No announcements yet.</p>
        )}
        {announcements.map((a, index) => (
          <li
            key={index}
            className="border-l-4 border-[var(--color-brand)] pl-4"
          >
            <h3 className="font-semibold text-lg text-[var(--color-brand)]">
              {a.title}
            </h3>
            <p className="text-[var(--color-brand)]">{a.description}</p>
            <p className="text-sm text-[var(--color-brand-lite)]">
              {new Date(a.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
