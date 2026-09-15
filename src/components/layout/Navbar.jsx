import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Predict", path: "/predict" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold text-blue-900">
          SmartDelivery AI
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/predict"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Get Started
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;