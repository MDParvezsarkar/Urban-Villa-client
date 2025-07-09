// Coupons.jsx
import { FaGift, FaTags, FaCoins } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Coupons = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const offers = [
    {
      icon: <FaGift className="text-5xl text-pink-600 mb-3" />,
      title: "10% Off for New Members",
      desc: "Enjoy a special discount on your first apartment booking!",
      bg: "bg-pink-100",
      aos: "fade-up",
    },
    {
      icon: <FaTags className="text-5xl text-green-600 mb-3" />,
      title: "Festival Offer",
      desc: "Celebrate with savings! Avail our seasonal offers today.",
      bg: "bg-green-100",
      aos: "zoom-in",
    },
    {
      icon: <FaCoins className="text-5xl text-yellow-600 mb-3" />,
      title: "Refer & Earn",
      desc: "Refer friends and get exciting rewards on every booking.",
      bg: "bg-yellow-100",
      aos: "fade-up",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          data-aos="fade-down"
        >
          💸 Special Offers Just for You
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${offer.bg}`}
              data-aos={offer.aos}
            >
              <div className="flex flex-col items-center text-center">
                {offer.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
