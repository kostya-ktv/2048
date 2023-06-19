import SHeader from "./Header.styled";
import RefreshButton from "./RefreshButton";

const Header = () => {
  return (
    <SHeader>
      <RefreshButton />
      <span className="game-name">2048</span>
    </SHeader>
  );
};

export default Header;
