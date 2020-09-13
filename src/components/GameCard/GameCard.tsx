import React, { FC } from "react";
import { Card, Divider } from "antd";
import { GameItem } from "../../api/games/types";
import StreamLinks from "./StreamLinks";
import GameRowDisplay from "./GameRowDisplay";
import GameCurrentDataRowDisplay from "./GameCurrentDataRowDisplay";

interface GameCardProps {
  readonly game: GameItem;
}

const cardStyle = { margin: "24px" };
const dividerStyle = { margin: "8px 0" };

const GameCard: FC<GameCardProps> = ({ game }) => {
  const watchLinks = (
    <StreamLinks
      homeStreamUrl={game.homeStreamUrl}
      awayStreamUrl={game.awayStreamUrl}
      altStreamUrl={game.altStreamUrl}
    />
  );
  const hasCurrentGameData =
    game.winningPitcherName ||
    game.losingPitcherName ||
    game.savingPitcherName ||
    game.currentPitcherName ||
    game.currentBatterName ||
    game.homePitcherName ||
    game.awayPitcherName;
  const currentGameDisplay = hasCurrentGameData ? (
    <>
      <Divider type="horizontal" style={dividerStyle} />
      <GameCurrentDataRowDisplay game={game} />
    </>
  ) : null;

  return (
    <Card size="small" title={game.statusDisplay} style={cardStyle} extra={watchLinks}>
      <GameRowDisplay
        teamName={game.homeTeamFullName}
        teamLogoUrl={game.homeTeamLogoUrl}
        teamScore={game.homeTeamScore}
        teamRecord={game.homeTeamRecord}
        teamConferenceAbbr={game.homeTeamConferenceAbbr}
        teamDivisionName={game.homeTeamDivisionName}
        teamDivisionRank={game.homeTeamDivisionRank}
      />
      <GameRowDisplay
        teamName={game.awayTeamFullName}
        teamLogoUrl={game.awayTeamLogoUrl}
        teamScore={game.awayTeamScore}
        teamRecord={game.awayTeamRecord}
        teamConferenceAbbr={game.awayTeamConferenceAbbr}
        teamDivisionName={game.awayTeamDivisionName}
        teamDivisionRank={game.awayTeamDivisionRank}
      />
      {currentGameDisplay}
    </Card>
  );
};

export default GameCard;
