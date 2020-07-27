import React, { FC } from "react";
import { Row, Col } from "antd";

interface GameRowDisplayProps {
  readonly teamName: string;
  readonly teamLogoUrl: string;
  readonly teamScore: number | null;
  readonly teamRecord: string;
  readonly teamDivisionRank: string;
  readonly teamConferenceAbbr: string;
  readonly teamDivisionName: string;
}

const logoStyle = { width: "100%", maxWidth: "50px", marginRight: "8px" };
const textStyle = { fontSize: "16px", fontWeight: "bold" } as React.CSSProperties;
const subTextStyle = { fontSize: "12px", color: "#a5a6a7" };

const GameRowDisplay: FC<GameRowDisplayProps> = ({
  teamName,
  teamLogoUrl,
  teamScore,
  teamRecord,
  teamDivisionRank,
  teamConferenceAbbr,
  teamDivisionName,
}) => {
  const teamStanding = `(${teamRecord}, ${teamDivisionRank} in ${teamConferenceAbbr} ${teamDivisionName})`;

  return (
    <Row align="middle">
      <Col span={22}>
        <Row align="middle">
          <Col>
            <img src={teamLogoUrl} alt={teamName} style={logoStyle} />
          </Col>
          <Col>
            <Row style={textStyle}>{teamName}</Row>
            <Row style={subTextStyle}>{teamStanding}</Row>
          </Col>
        </Row>
      </Col>
      <Col span={2} style={textStyle}>
        {teamScore ?? ""}
      </Col>
    </Row>
  );
};

export default GameRowDisplay;
