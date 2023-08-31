import { Link } from "react-router-dom";
import SearchOrder from "../features/order/Searchorder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 font-sans uppercase sm:px-6">
      <Link to="/" className="tracking-wide">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
};

export default Header;