const footerLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Pinaka-Pani-18/Public-Codebases",
  },
  {
    label: "Contributing",
    url: "https://github.com/Pinaka-Pani-18/Public-Codebases/blob/main/CONTRIBUTING.md",
  },
  {
    label: "Contact",
    url: "https://github.com/Pinaka-Pani-18/Public-Codebases/issues/new/choose",
  },
  {
    label: "Privacy Policy",
    url: "https://github.com/Pinaka-Pani-18/Public-Codebases/blob/main/LICENSE",
  },
  {
    label: "Terms of Service",
    url: "https://github.com/Pinaka-Pani-18/Public-Codebases/blob/main/CODE_OF_CONDUCT.md",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div>
        <img
            src="src\images\logo.png" // Replace with your icon source
            alt="Logo"
            className="w-17 h-16 mr-2 ml-2"
          />
        </div>
        <div>
          <ul className="list-none p-0 flex flex-wrap justify-end">
            {footerLinks.map((link, index) => (
              <li key={index} className="mr-5 mb-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="text-center mt-2 px-4">
          &copy; {new Date().getFullYear()} Public Codebases. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
