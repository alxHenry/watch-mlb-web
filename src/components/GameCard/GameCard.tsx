import React, { FC } from "react";
import { Card } from "antd";
import { GameItem } from "../../api/games/types";
import StreamLinks from "./StreamLinks";
import GameRowDisplay from "./GameRowDisplay";

interface GameCardProps {
  readonly game: GameItem;
}

const cardStyle = { margin: "24px" };

const GameCard: FC<GameCardProps> = ({ game }) => {
  const watchLinks = <StreamLinks homeStreamUrl={game.homeStreamUrl} awayStreamUrl={game.awayStreamUrl} />;

  return (
    <Card size="small" title={game.statusDisplay} style={cardStyle} extra={watchLinks}>
      <GameRowDisplay
        teamName={game.homeTeamFullName}
        teamLogoUrl={game.homeTeamLogoUrl}
        teamScore={game.homeTeamScore}
        teamConferenceAbbr={game.homeTeamConferenceAbbr}
        teamDivisionName={game.homeTeamDivisionName}
        teamDivisionRank={game.homeTeamDivisionRank}
      />
      <GameRowDisplay
        teamName={game.awayTeamFullName}
        teamLogoUrl={game.awayTeamLogoUrl}
        teamScore={game.awayTeamScore}
        teamConferenceAbbr={game.awayTeamConferenceAbbr}
        teamDivisionName={game.awayTeamDivisionName}
        teamDivisionRank={game.awayTeamDivisionRank}
      />
    </Card>
  );
};

export default GameCard;
