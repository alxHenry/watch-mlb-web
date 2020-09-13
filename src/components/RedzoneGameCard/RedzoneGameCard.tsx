import React, { FC } from "react";
import { Button, Card, Row, Col } from "antd";

const cardStyle = { margin: "24px", backgroundColor: "#D7001D" };
const redzoneTextStyle = { color: "white", fontWeight: 600, fontSize: "28px" };
const watchTextStyle = { color: "#2f4fdb", fontWeight: 600 };
const linkProps = { target: "_blank", rel: "noreferrer noopener" };

interface RedzoneGameCardProps {
  readonly hansonStreamUrl: string;
  readonly sicilianoStreamUrl: string;
}

const RedzoneGameCard: FC<RedzoneGameCardProps> = ({ hansonStreamUrl, sicilianoStreamUrl }) => (
  <Card style={cardStyle}>
    <Row align="middle">
      <Col span={16} style={redzoneTextStyle}>
        NFL REDZONE
      </Col>
      <Col span={4}>
        <Button style={watchTextStyle}>
          <a href={hansonStreamUrl} {...linkProps}>
            Enter
          </a>
        </Button>
      </Col>
      <Col span={4}>
        <Button style={watchTextStyle}>
          <a href={sicilianoStreamUrl} {...linkProps}>
            Alt
          </a>
        </Button>
      </Col>
    </Row>
  </Card>
);

export default RedzoneGameCard;
