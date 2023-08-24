const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button>
            Services <span>&#8595;</span>
          </button>
          <ul>
            <li>Design</li>
            <li>Development</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;