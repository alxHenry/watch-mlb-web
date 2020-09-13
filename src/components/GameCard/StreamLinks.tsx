import React, { FC } from "react";

interface StreamLinkProps {
  readonly homeStreamUrl: string;
  readonly awayStreamUrl: string;
  readonly altStreamUrl?: string;
}

const textStyle = { fontWeight: "bold" } as React.CSSProperties;
const linkProps = { target: "_blank", rel: "noreferrer noopener" };

const StreamLinks: FC<StreamLinkProps> = ({ homeStreamUrl, altStreamUrl }) => {
  const altStream = altStreamUrl ? (
    <>
      {" - "}
      <a href={altStreamUrl} {...linkProps}>
        Alt
      </a>
    </>
  ) : null;

  return (
    <div style={textStyle}>
      <a href={homeStreamUrl} {...linkProps}>
        Watch
      </a>
      {altStream}
    </div>
  );
};

export default StreamLinks;
