import "antd/dist/antd.css";

import React, { FC } from "react";
import GameCard from "./components/GameCard";
// import { getMockGame } from "./api/mock/game";
import { useGames } from "./api/games/useGames";
import { Row, Spin } from "antd";

const spinnerContainerStyle = { marginTop: "8%" };
const containerStyle = { width: "100%", maxWidth: "800px", margin: "auto" };

const App: FC = () => {
  // const games = [getMockGame(), getMockGame(), getMockGame()];
  const { games, loading } = useGames();
  const cards = games.map((game) => <GameCard game={game} key={`${game.homeTeamFullName}-${game.awayTeamFullName}`} />);

  if (loading) {
    return (
      <Row justify="center" style={spinnerContainerStyle}>
        <Spin size="large" spinning={true} delay={400} />
      </Row>
    );
  } else {
    return <div style={containerStyle}>{cards}</div>;
  }
};

export default App;
