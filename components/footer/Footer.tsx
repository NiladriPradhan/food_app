import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Gourate</h2>
          <p className="text-white/70">
            Serving delicious meals crafted with fresh ingredients and
            exceptional taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Reservation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              info@restaurant.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              Kolkata, West Bengal, India
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Facebook className="h-6 w-6 hover:text-primary transition" />
            <Instagram className="h-6 w-6 hover:text-primary transition" />
            <Twitter className="h-6 w-6 hover:text-primary transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60">
        © {new Date().getFullYear()} Restaurant Name. All rights reserved.
      </div>
    </footer>
  );
}
