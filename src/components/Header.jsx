export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Side - Logo */}
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        
        {/* Middle - Navigation Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">Home</a>
              <ul className="absolute left-0 mt-2 hidden bg-white text-black shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">About</a>
              <ul className="absolute left-0 mt-2 hidden bg-white text-black shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">Services</a>
              <ul className="absolute left-0 mt-2 hidden bg-white text-black shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Web Development</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">SEO</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        
        {/* Right Side - Contact Button */}
        <a href="#" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 shadow-md">Contact Us</a>
      </div>
    </header>
  );
}
