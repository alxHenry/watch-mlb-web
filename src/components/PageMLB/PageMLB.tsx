import React, { FC } from "react";
import GameCard from "../GameCard";
import { useGames } from "../../api/games/useGames";
import { Row, Spin } from "antd";
import { SportsLeague } from "../../api/games/types";

const spinnerContainerStyle = { marginTop: "8%" };
const containerStyle = { width: "100%", maxWidth: "800px", margin: "auto" };

const PageMLB: FC = () => {
  const { games, loading } = useGames(SportsLeague.MLB);
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

export default PageMLB;
