import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>Sylhet, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>support@petplatform.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/pets" className="hover:text-blue-400 transition">
                  Pets
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Pet Platform. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>    );
};

export default Footer;
