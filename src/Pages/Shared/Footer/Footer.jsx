import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Logo & Info */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-gray-400">
            Providing reliable real estate service since 1992.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apartments
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Building
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-white text-white">
              
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
