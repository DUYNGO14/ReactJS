import { Box, Button, Paragraph } from "../../Atoms";
import { Link } from "react-router";
import { useState } from "react";
import { useAuth } from "@/hooks";
import { IContext } from "@/interfaces";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, handleLogout } =
    useAuth() as unknown as IContext.UseAuthReturnType;

  const navigation = [
    { title: "User", to: "/users" },
    { title: "Resources", to: "/resources" },
  ];

  return (
    <nav
      className={`bg-white pb-2 md:text-sm border-b-[1px] border-indigo-200 ${
        isMenuOpen
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <Box className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <Box className="flex items-center justify-between py-5 md:block">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img
              src="https://www.pngkey.com/png/full/64-643451_manchester-united-logo-png.png"
              alt="Logo"
              className="w-full max-w-[50px] h-full rounded-full max-sm"
            />
          </Link>
          <Box className="md:hidden">
            <Button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </Button>
          </Box>
        </Box>

        <Box
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {user && (
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 hover:text-green-900 hover:border-b-2 hover:border-green-900"
                >
                  <Link className="font-bold text-lg" to={item.to}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Box className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Paragraph
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-800 hover:bg-green-700 active:bg-gray-900 rounded-full md:inline-flex"
                  text={user.email}
                />
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-green-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Logout
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </nav>
  );
};

export default Header;
