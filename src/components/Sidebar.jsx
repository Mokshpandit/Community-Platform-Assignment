import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-white border-r p-4 hidden md:block">
    <div className="font-semibold mb-4">Menu</div>
    <ul className="space-y-2 text-gray-700">
      <li><Link to="/profile" className="hover:text-black">My Profile</Link></li>
      <li><Link to="/settings" className="hover:text-black">Settings</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
