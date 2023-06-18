import { styled } from "styled-components";

const SScore = styled.div`
  height: 70px;
  width: 60px;
  padding: 5px 10px;
  border-radius: 0 15px 15px 0;
  color: white;
  span {
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
  }
`;
const Score = () => {
  return (
    <SScore className="btn">
      <span>Score</span>
      <span>score</span>
    </SScore>
  );
};
export default Score;
