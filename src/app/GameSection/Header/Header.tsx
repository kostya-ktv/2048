import SHeader from "./Header.styled";
import RefreshButton from "./RefreshButton";
import icon from "../../../assets/tiles/2048.gif";
const Header = () => {
  return (
    <SHeader>
      <RefreshButton />

      <div className="header-logo-wrapper">
        <img className="header-logo" src={icon} />
      </div>
    </SHeader>
  );
};

export default Header;
