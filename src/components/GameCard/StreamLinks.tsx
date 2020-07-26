import React, { FC } from "react";

interface StreamLinkProps {
  readonly homeStreamUrl: string;
  readonly awayStreamUrl: string;
}

const textStyle = { fontWeight: "bold" } as React.CSSProperties;
const linkProps = { target: "_blank", rel: "noreferrer noopener" };

const StreamLinks: FC<StreamLinkProps> = ({ homeStreamUrl }) => (
  <div style={textStyle}>
    <a href={homeStreamUrl} {...linkProps}>
      Watch
    </a>
  </div>
);

export default StreamLinks;
