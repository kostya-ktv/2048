import SHeader from "./Header.styled";
import RefreshButton from "./RefreshButton";

const Header = () => {
  return (
    <SHeader>
      <RefreshButton />
      <span className="game-name">2048</span>
      <div className="score btn">
        <span>Score</span>
        <span>score</span>
      </div>
    </SHeader>
  );
};

export default Header;
