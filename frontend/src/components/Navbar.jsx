import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, setUser, backendURL } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const firstLetter = user?.fullName?.charAt(0)?.toUpperCase() || "U";

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/users/logout`,
        {},
        { withCredentials: true },
      );
      if (data.success) {
        setUser(null);
        localStorage.removeItem("isLoggedIn");
        setOpen(false);
        setShowDropdown(false);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      <Link to="/" className="text-lg font-semibold">
        <span className="text-gray-300">GLOBAL</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TREND
        </span>
      </Link>

      <div className="hidden md:flex gap-6 items-center">
        <Link
          to="/"
          className={location.pathname === "/" ? "text-blue-400" : ""}
        >
          Tasks
        </Link>

        <Link
          to="/add-task"
          className={location.pathname === "/add-task" ? "text-blue-400" : ""}
        >
          Add Task
        </Link>

        {user ? (
          <div className="relative flex items-center gap-2" ref={dropdownRef}>

            {/* 👤 User Name */}
            <span className="hidden md:block text-sm">
              {user?.fullName}
            </span>

            {/* Avatar */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold"
            >
              {firstLetter}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow">
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="border border-gray-400 px-4 py-1.5 rounded-md"
          >
            Login
          </Link>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>
            Tasks
          </Link>
          <Link to="/add-task" onClick={() => setOpen(false)}>
            Add Task
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-6 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;