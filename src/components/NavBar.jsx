import "../css/NavBar.css";
import { IoMdSearch } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

function NavBar() {
  return (
    <nav>
      <MdMenuOpen className="cursor-pointer" size={35} />
      <a href="#" className="nav-link">
        Categories
      </a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <IoMdSearch />
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label form="switch-mode" className="switch-mode" />
    </nav>
  );
}

export default NavBar;
