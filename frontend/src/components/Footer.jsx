import { Mail, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Global Trend. All rights reserved.
        </p>

        <div className="flex gap-5">
          
          <a href="https://sanjanayadav.vercel.app" target="_blank">
            <User size={20} />
          </a>

          <a href="https://github.com/sanjanayadav07" target="_blank">
            <FaGithub size={20} />
          </a>

          <a href="https://www.linkedin.com/in/sanjana-yadav007/" target="_blank">
            <FaLinkedin size={20} />
          </a>

          <a href="mailto:sanjanayadav3952@gmail.com">
            <Mail size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;