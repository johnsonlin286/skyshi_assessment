function Header() {
  return (
    <header className="bg-blue py-8">
      <div className="container">
        <h3
          data-cy="header-title"
          className="uppercase text-2xl font-bold text-white"
        >
          To Do List App
        </h3>
      </div>
    </header>
  );
}

export default Header;
