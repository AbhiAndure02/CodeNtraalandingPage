const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 ">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Shubham Bhakare</h2>
            <p className="text-sm text-gray-400">Project Manager </p>
          </div>
  
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
  
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Shubham Bhakare. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  