import React, { FC } from "react";

interface StreamLinkProps {
  readonly homeStreamUrl: string;
  readonly awayStreamUrl: string;
}

const textStyle = { fontWeight: "bold" } as React.CSSProperties;
const linkProps = { target: "_blank", rel: "noreferrer noopener" };
const spacerStyle = { marginRight: "4px" };

const StreamLinks: FC<StreamLinkProps> = ({ homeStreamUrl, awayStreamUrl }) => (
  <div style={textStyle}>
    <span>Stream: </span>
    <a href={homeStreamUrl} style={spacerStyle} {...linkProps}>
      Home
    </a>
    <a href={awayStreamUrl} {...linkProps}>
      Away
    </a>
  </div>
);

export default StreamLinks;
