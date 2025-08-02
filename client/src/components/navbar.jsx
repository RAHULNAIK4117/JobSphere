import { MdAccountCircle } from "react-icons/md";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { usejob } from "../context/jobcontext";

const Navbar = ({searchQuery, setSearchQuery}) => {
   const {title} = usejob();
   
  return (
    <nav className="flex justify-between text-center items-center p-4 navbararea">
      <div>
        <b className="title">{title}</b>
      </div>

      <div className="flex items-center justify-center border-1 rounded-2xl ">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="outline-0  p-2 input lg:w-4xl"
          placeholder="search any job..."

        />
        <BsFillSearchHeartFill className="mr-2" />
      </div>

      {/* //////////////////onChange this after add account logic  clear opacity -0 */}   
      <div className="text-2xl lg:text-4xl opacity-0 ">
        <MdAccountCircle />
      </div>
    </nav>
  );
};

export default Navbar;
