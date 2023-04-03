import Header from "./Header";
import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const Theme1 = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <LogoutButton />
        <div>Theme 1</div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Theme1;
