import "antd/dist/antd.css";

import React, { FC, useState, useCallback } from "react";
import { Menu } from "antd";
import { SportsLeague } from "./api/games/types";
import PageGames from "./components/PageGames";

const logoStyles = { marginRight: "8px", paddingBottom: "3px" };

const nflLogo = (
  <img
    src="https://www.bing.com/th?id=ALBUDBC69EF24CA0FCCF40480846E16876198318B6BBD5EBEED1F239E2172CA29E7FB&w=28&h=28"
    alt="NFL"
    style={logoStyles}
  />
);
const mlbLogo = (
  <img
    src="https://www.bing.com/th?id=ALBUD5CE4B8FC8A1D6200445D98037887C4202AF3D6884CA2F5225FF17131AD7CA3D4&w=28&h=28"
    alt="MLB"
    style={logoStyles}
  />
);
const nbaLogo = (
  <img
    src="https://www.bing.com/th?id=ALBUD70C4B1B94F8CEE97262F925B9AAA92DC8EDCAA8A5C92616268B595D9CD593AB3&w=28&h=28"
    alt="NBA"
    style={logoStyles}
  />
);
const eplLogo = (
  <img
    src="https://www.bing.com/th?id=ALBUD9771FE318A6ECAC20C57DCD5CB590E16EEE14A3DD27458D15B661A662712197E&w=28&h=28"
    alt="NBA"
    style={logoStyles}
  />
);

const App: FC = () => {
  const [league, setLeague] = useState(SportsLeague.NFL);
  const handleMenuClick = useCallback((e: any) => {
    setLeague(e.key);
  }, []);

  return (
    <>
      <Menu onClick={handleMenuClick} selectedKeys={[league]} mode="horizontal">
        <Menu.Item key={SportsLeague.NFL} icon={nflLogo}>
          NFL
        </Menu.Item>
        <Menu.Item key={SportsLeague.MLB} icon={mlbLogo}>
          MLB
        </Menu.Item>
        <Menu.Item key={SportsLeague.NBA} icon={nbaLogo}>
          NBA
        </Menu.Item>
        <Menu.Item key={SportsLeague.EPL} icon={eplLogo}>
          EPL
        </Menu.Item>
      </Menu>
      <PageGames league={league} />
    </>
  );
};

export default App;
