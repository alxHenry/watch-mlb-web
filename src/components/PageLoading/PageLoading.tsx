import React, { FC } from "react";
import { Row, Spin } from "antd";

const spinnerContainerStyle = { marginTop: "8%" };

const PageLoading: FC = () => {
  return (
    <Row justify="center" style={spinnerContainerStyle}>
      <Spin size="large" spinning={true} delay={400} />
    </Row>
  );
};

export default PageLoading;
