// components/HeroBanner.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import { TextGenerateEffect } from "../../../components/ui/text-generate-effect";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  

  // const slides = [
  //   {
  //     title: "Luxury Apartment in the Heart of City",
  //     img: "https://i.ibb.co/93sPBqyw/b6.jpg",
  //   },
  //   {
  //     title: "Modern Lifestyle in Your Dream Home",
  //     img: "https://i.ibb.co/nM3d4MwY/b4.jpg",
  //   },
  //   {
  //     title: "Feel Comfort and Class Together",
  //     img: "https://i.ibb.co/VWRKbHyD/b5.jpg",
  //   },
  // ];

  return (
    <div>
      <div
        className="h-[85vh] overflow-hidden w-full rounded-md relative flex flex-col items-center justify-center antialiased"
        style={{
          background:
            "linear-gradient(169deg, rgba(26, 42, 128, 1) 0%, rgba(232, 231, 248, 1) 35%, rgba(26, 42, 128, 1) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto p-4">
          <TextGenerateEffect words={"Modern Lifestyle in Your Dream Home"} />
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Banner;
