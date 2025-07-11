// src/Shared/MoonLoaderComponent.jsx
import { MoonLoader } from "react-spinners";

const MoonLoaderComponent = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-[9999]">
      <MoonLoader size={70} color="#2563eb" />
      <p className="mt-4 text-xl font-medium">
        আপনার চাওয়া পূরণ করতে সময় লাগতেছে 😅
      </p>
    </div>
  );
};

export default MoonLoaderComponent;
