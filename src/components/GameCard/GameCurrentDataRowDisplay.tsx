import React, { FC } from "react";
import { GameItem } from "../../api/games/types";
import { Row } from "antd";

interface GameCurrentDataRowDisplayProps {
  readonly game: GameItem;
}

const appendCurrentStat = (stats: string, toAppend: string) => {
  const leadingSpace = stats ? "   " : "";
  return stats.concat(leadingSpace, toAppend);
};

const subTextStyle = { fontSize: "12px", color: "#a5a6a7", whiteSpace: "pre" } as React.CSSProperties;

const GameCurrentDataRowDisplay: FC<GameCurrentDataRowDisplayProps> = ({ game }) => {
  let currentGameDataText = "";

  if (game.winningPitcherName) {
    const winningPitcherText = `W: ${game.winningPitcherName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, winningPitcherText);
  }

  if (game.losingPitcherName) {
    const losingPitcherText = `L: ${game.losingPitcherName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, losingPitcherText);
  }

  if (game.savingPitcherName) {
    const savingPitcherText = `SV: ${game.savingPitcherName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, savingPitcherText);
  }

  if (game.currentBatterName) {
    const currentBatterText = `B: ${game.currentBatterName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, currentBatterText);
  }

  if (game.currentPitcherName) {
    const currentPitcherText = `P: ${game.currentPitcherName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, currentPitcherText);
  }

  if (game.homePitcherName) {
    const homePitcherText = `Home: ${game.homePitcherName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, homePitcherText);
  }

  if (game.awayPitcherName) {
    const awayPitcherText = `Away: ${game.awayPitcherName}`;
    currentGameDataText = appendCurrentStat(currentGameDataText, awayPitcherText);
  }

  if (!currentGameDataText) {
    return null;
  } else {
    return <Row style={subTextStyle}>{currentGameDataText}</Row>;
  }
};

export default GameCurrentDataRowDisplay;
