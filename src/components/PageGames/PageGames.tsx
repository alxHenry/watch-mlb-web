import React, { FC } from "react";
import GameCard from "../GameCard";
import { SportsLeague } from "../../api/games/types";
import PageLoading from "../PageLoading";
import PageError from "../PageError";
import { useGames } from "../../api/games/useGames";

const containerStyle = { width: "100%", maxWidth: "800px", margin: "auto" };

interface PageGamesProps {
  readonly league: SportsLeague;
}

const PageGames: FC<PageGamesProps> = ({ league }) => {
  const { games, loading, error } = useGames(league);

  const cards = games.map((game, index) => (
    <GameCard game={game} key={`${game.homeTeamFullName}-${game.awayTeamFullName}-${index}`} />
  ));

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  return <div style={containerStyle}>{cards}</div>;
};

export default PageGames;
