import React, { FC } from "react";
import { Button, Card, Row, Col } from "antd";

const cardStyle = { margin: "24px", backgroundColor: "#D7001D" };
const redzoneTextStyle = { color: "white", fontWeight: 600, fontSize: "28px" };
const watchTextStyle = { color: "#2f4fdb", fontWeight: 600 };
const linkProps = { target: "_blank", rel: "noreferrer noopener" };

interface RedzoneGameCardProps {
  readonly hansonStreamUrl: string;
  readonly sicilianoStreamUrl: string;
  readonly altStreamUrl: string;
}

const RedzoneGameCard: FC<RedzoneGameCardProps> = ({ hansonStreamUrl, sicilianoStreamUrl, altStreamUrl }) => (
  <Card style={cardStyle}>
    <Row align="middle">
      <Col span={24} style={redzoneTextStyle}>
        NFL REDZONE
      </Col>
    </Row>
    <Row gutter={8}>
      <Col>
        <Button style={watchTextStyle}>
          <a href={hansonStreamUrl} {...linkProps}>
            Primary
          </a>
        </Button>
      </Col>
      <Col>
        <Button style={watchTextStyle}>
          <a href={sicilianoStreamUrl} {...linkProps}>
            Alt 1
          </a>
        </Button>
      </Col>
      <Col>
        <Button style={watchTextStyle}>
          <a href={altStreamUrl} {...linkProps}>
            Alt 2
          </a>
        </Button>
      </Col>
    </Row>
  </Card>
);

export default RedzoneGameCard;
