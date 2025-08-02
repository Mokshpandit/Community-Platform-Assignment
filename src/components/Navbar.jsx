import { HiHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";



const Navbar = () => (
  <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
     <Link to="/" className="hover:text-black flex gap-1 items-center">
        <h1 className="text-xl font-bold text-gray-800">CommunityHub</h1>
     </Link>
    <div className="flex gap-3 text-gray-600 ">
      <Link to="/" className="hover:text-black flex gap-1 items-center"><HiHome /> Home</Link>
      <Link to="/login" className="hover:text-black flex gap-1 items-center"><CgProfile />Login/Signup</Link>
    </div>
  </nav>
);

export default Navbar;
