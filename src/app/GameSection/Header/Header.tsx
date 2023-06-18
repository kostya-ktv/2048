import SHeader from "./Header.styled";
import RefreshButton from "./RefreshButton";
import Score from "./Score";

const Header = () => {
  return (
    <SHeader>
      <RefreshButton />
      <span className="game-name">2048</span>
      <Score />
    </SHeader>
  );
};

export default Header;
