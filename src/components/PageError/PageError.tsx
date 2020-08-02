import React, { FC } from "react";
import { Row } from "antd";

const errorContainerStyle = { marginTop: "8%" };
const failureTextStyle = { fontSize: "24px", fontWeight: "bold" } as React.CSSProperties;

interface PageErrorProps {
  readonly error: Error;
}

const PageError: FC<PageErrorProps> = ({ error }) => {
  return (
    <Row justify="center" style={errorContainerStyle}>
      <div style={failureTextStyle}>{`Failed to load: ${error.message}`}</div>
    </Row>
  );
};

export default PageError;
