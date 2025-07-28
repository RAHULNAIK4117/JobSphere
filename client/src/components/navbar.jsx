import { MdAccountCircle } from "react-icons/md";
import { BsFillSearchHeartFill } from "react-icons/bs";

const Navbar = ({title,searchQuery, setSearchQuery}) => {
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

      
      <div className="text-2xl lg:text-4xl">
        <MdAccountCircle />
      </div>
    </nav>
  );
};

export default Navbar;
