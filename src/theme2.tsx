import Header from "./Header";
import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const Theme2 = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <LogoutButton />
        <div>Theme 2 </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Theme2;
