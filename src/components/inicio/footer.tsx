import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121417] text-gray-400 px-6 py-10 text-sm">
      {/* Sección de enlaces e iconos */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-6 text-center md:text-left">
        {/* Columna 1 */}
        <div>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <p className="hover:text-white cursor-pointer mb-2">Terms of Service</p>
          <div className="flex gap-4 text-lg">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Columna 3 */}
        <div>
          <p className="hover:text-white cursor-pointer">Contact Us</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-xs text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Fitness Hub. All rights reserved.
      </div>
    </footer>
  );
}
