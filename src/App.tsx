import "antd/dist/antd.css";

import React, { FC } from "react";
import GameCard from "./components/GameCard";
// import { getMockGame } from "./api/mock/game";
import { useGames } from "./api/games/useGames";

const App: FC = () => {
  // const games = [getMockGame(), getMockGame(), getMockGame()];
  const games = useGames();
  const cards = games.map((game) => <GameCard game={game} key={`${game.homeTeamFullName}-${game.awayTeamFullName}`} />);

  return <div>{cards}</div>;
};

export default App;
 