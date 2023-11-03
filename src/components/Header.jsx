import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/Projects" },
    { name: "Contributors", link: "/Contributors" },
  ];

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null); // To track the selected link

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="shadow-md z-10 w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-800 text-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center text-white"
        >
          <img
            src="src\images\logo.png" // Replace with your icon source
            alt="Logo"
            className="w-17 h-16 mr-2 ml-2"
          />
          Public Codebases
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <div
                onClick={() => handleLinkClick(link.link)}
                className="cursor-pointer"
              >
                <Link
                  to={link.link}
                  style={{
                    color: "white", // Set text color to white
                    backgroundColor: selectedLink === link.link ? "#685eff" : "transparent",
                    padding: "8px 12px", // Adjust the padding to your liking
                    borderRadius: "4px", // Add rounded corners to the box
                  }}
                >
                  {link.name}
                </Link>
              </div>
            </li>
          ))}
          <a href="https://github.com/Pinaka-Pani-18/Public-Codebases" target="_blank">
            <button
              className="bg-blue-800 text-white text-xl py-2 px-6 rounded md:ml-8 hover:bg-blue-600 duration-500"
            >
              <div className="inline text-2xl relative top-1 mr-2">
                <ion-icon name="logo-github"></ion-icon>
              </div>
              Github
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
}





