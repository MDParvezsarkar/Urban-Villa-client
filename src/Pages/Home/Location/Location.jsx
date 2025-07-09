import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkedAlt,
  FaBusAlt,
  FaHospital,
  FaShoppingCart,
  FaTrain,
} from "react-icons/fa";
import "leaflet/dist/leaflet.css";

const Location = () => {
  const position = [23.8103, 90.4125];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-gray-100 to-blue-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-8 text-gray-800"
          data-aos="fade-up"
        >
          📍 Our Apartment Location
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaMapMarkedAlt className="text-blue-600" /> How to Reach Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of the city, our apartments offer easy access
              to transport, schools, hospitals & malls in a green-friendly
              environment.
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaTrain className="text-blue-500" /> 5 mins from Metro Station
              </li>
              <li className="flex items-center gap-2">
                <FaBusAlt className="text-green-600" /> Multiple Bus Routes
              </li>
              <li className="flex items-center gap-2">
                <FaHospital className="text-red-600" /> Close to hospitals &
                schools
              </li>
              <li className="flex items-center gap-2">
                <FaShoppingCart className="text-yellow-600" /> Nearby Shopping
                Malls
              </li>
            </ul>
          </div>

          {/* Map */}
          <div
            className="rounded-xl overflow-hidden shadow-xl ring-2 ring-blue-200 hover:ring-blue-400 transition duration-300 h-[300px] md:h-[400px]"
            data-aos="fade-left"
          >
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full z-0"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>
                  Our Apartment <br /> Visit us anytime!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
