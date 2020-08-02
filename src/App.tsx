import "antd/dist/antd.css";

import React, { FC, useState, useCallback } from "react";
import { Menu } from "antd";
import PageMLB from "./components/PageMLB";
import { SportsLeague } from "./api/games/types";
import PageNBA from "./components/PageNBA";

const App: FC = () => {
  const [league, setLeague] = useState(SportsLeague.MLB);
  const handleMenuClick = useCallback((e: any) => {
    setLeague(e.key);
  }, []);

  let page;
  switch (league) {
    case SportsLeague.NBA:
      page = <PageNBA />;
      break;
    case SportsLeague.MLB:
    default:
      page = <PageMLB />;
  }

  return (
    <>
      <Menu onClick={handleMenuClick} selectedKeys={[league]} mode="horizontal">
        <Menu.Item key={SportsLeague.MLB}>MLB</Menu.Item>
        <Menu.Item key={SportsLeague.NBA}>NBA</Menu.Item>
      </Menu>
      {page}
    </>
  );
};

export default App;
