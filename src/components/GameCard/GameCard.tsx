import React, { FC } from "react";
import { Row, Col, Card } from "antd";
import { GameItem } from "../../api/games/types";

interface GameCardProps {
  readonly game: GameItem;
}

const logoStyle = { width: "100%", maxWidth: "50px" };
const cardStyle = { margin: "24px" };
const textStyle = { fontSize: "16px", fontWeight: "bold" } as React.CSSProperties;

const GameCard: FC<GameCardProps> = ({ game }) => {
  const watchLink = (
    <a href={game.streamUrl} target="_blank" rel="noreferrer noopener">
      Watch
    </a>
  );

  return (
    <Card size="small" title={game.statusDisplay} style={cardStyle} extra={watchLink}>
      <Row align="middle">
        <Col span={4}>
          <img src={game.homeTeamLogoUrl} alt={game.homeTeamFullName} style={logoStyle} />
        </Col>
        <Col span={16} style={textStyle}>
          {game.homeTeamFullName}
        </Col>
        <Col span={4} style={textStyle}>
          {game.homeTeamScore ?? ""}
        </Col>
      </Row>
      <Row align="middle">
        <Col span={4}>
          <img src={game.awayTeamLogoUrl} alt={game.awayTeamFullName} style={logoStyle} />
        </Col>
        <Col span={16} style={textStyle}>
          {game.awayTeamFullName}
        </Col>
        <Col span={4} style={textStyle}>
          {game.awayTeamScore ?? ""}
        </Col>
      </Row>
    </Card>
  );
};

export default GameCard;
